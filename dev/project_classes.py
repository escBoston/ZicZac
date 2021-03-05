from datetime import datetime
import arrow
import pickle
import numpy as np
import json

class Item:
    def __init__(self, title, price):
        self.title = title
        self.price = price
        self.desc = ""
        self.dateAdded = arrow.now().format('YYYY-MM-DD')
        self.ratings = []
        self.tags = []

    def add_description(self, desc):
        self.desc = desc

    def add_tag(self, tag):
        self.tags.append(tag)

    def add_seller(self, seller):
        self.seller = seller

    def rate(self, rating):
        self.ratings.append(rating)

    def get_rating(self):
        return np.mean(self.ratings)

    def get_date(self):
        return self.dateAdded

    def get_tags(self):
        return self.tags

    def get_price(self):
        return self.price

    def to_JSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=False, indent=4)

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
    def __init__(self, password, email):
        #self.username = username
        self.password = password
        self.email = email
        self.orders = []

    def add_email(self, email):
        self.email = email

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
