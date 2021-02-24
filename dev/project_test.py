from datetime import datetime
import arrow
import cx_Oracle
import pickle
import numpy as np

class Item:    
    def __init__(self, title, price):
        self.title = title
        self.price = price
        self.desc = ""
        self.dateAdded = arrow.now().format('YYYY-MM-DD')
        self.ratings = []
        
    def add_description(self, desc):
        self.desc = desc
    
    def add_seller(self, seller):
        self.seller = seller
    
    def rate(self, rating):
        self.ratings.append(rating)
        
    def get_rating(self):
        return np.mean(self.ratings)
    
    def get_date(self):
        return self.dateAdded
        
class Order:
    def __init__(self):
        self.orderDate = arrow.now().format('YYYY-MM-DD')
        self.total = 0
        self.items = []
        
    def add_item(self, item):
        self.items.append(item)
        self.total += item.price
        
    def get_items(self):
        return self.items
    
class Account:
    def __init__(self, password):
        #self.username = username
        self.password = password
        self.orders = []
        
    def add_order(self, order):
        self.orders.append(order)
        
    def get_orders(self):
        return self.orders

#file = open("accounts.obj",'rb')
#accounts = pickle.load(file)
#file.close()

#tests
#i1 = Item("lamp", 12.00)
#i1.add_description("a floor lamp")
#i2 = Item("box", 2.00)

#o = Order()
#o.add_item(i)
#o.add_item(j)

#a = Account()
#a.add_order(o)