from datetime import datetime
import arrow
import cx_Oracle
import pickle

class Item:
    desc = ""
    
    def __init__(self, title, price):
        self.title = title
        self.price = price
        
    def add_description(self, desc):
        self.desc = desc
    
    def add_seller(self, seller):
        self.seller = seller
        

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

#file = open("accounts.obj",'rb')
#accounts = pickle.load(file)
#file.close()

def create_account(username, password):
    if username in accounts:
        return "Username taken"
    else:
        accounts[username] = Account(password)
        filehandler = open("accounts.obj","wb")
        pickle.dump(accounts,filehandler)
        filehandler.close()
        return "Account created"

def trylogin(username, password):
    if accounts[username].password == password:
        return True
    return False

#tests
#i = Item("lamp", 12.00)
#i.add_description("a floor lamp")

#j = Item("box", 2.00)

#o = Order()
#o.add_item(i)
#o.add_item(j)

#a = Account()
#a.add_order(o)