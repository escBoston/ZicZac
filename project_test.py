from datetime import datetime
import arrow
import cx_Oracle

class Item:
    desc = ""
    
    def __init__(self, title, price):
        self.title = title
        self.price = price
        
    def add_description(self, desc):
        self.desc = desc
        

class Order:
    total = 0
    items = []
    
    def __init__(self):
        self.orderDate = arrow.now().format('YYYY-MM-DD')
        
    def add_item(self, item):
        self.items.append(item)
        self.total += item.price

class Account:
    orders = []
    
    def __init__(self, password):
        #self.username = username
        self.password = password
        
    def add_order(self, order):
        self.orders.append(order)

dsn_tns = cx_Oracle.makedsn("127.0.0.1", "1521", service_name="XE")
conn = cx_Oracle.connect(user="system", password="advanstSYS1", dsn=dsn_tns, mode=cx_Oracle.SYSDBA)
cur = conn.cursor()

accounts = {}
def create_account(username, password):
    tryquery = f"SELECT * FROM SYSTEM.ACCOUNTS WHERE USERNAME={username}"
    cur.execute(tryquery)
    if not cur.fetchall(): # username not taken
        createquery = f"INSERT INTO SYSTEM.ACCOUNTS VALUES({username}, {password})"
        cur.execute(query)
        accounts[username] = Account(password) # 
        return "Account Created"
    else: # username is taken
        return "Username Taken"

# (front end prompts for login)
def trylogin(username, password):
    query = f"SELECT * FROM SYSTEM.ACCOUNTS WHERE USERNAME={username} AND PASSWORD={password}"
    cur.execute(query)
    if not cur.fetchall():
        return False
    return True

#tests
i = Item("lamp", 12.00)
i.add_description("a floor lamp")

j = Item("box", 2.00)

o = Order()
o.add_item(i)
o.add_item(j)

a = Account()
a.add_order(o)

