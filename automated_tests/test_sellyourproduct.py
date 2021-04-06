import os
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class sellingproduct(unittest.TestCase):

    def setUp(self):

        self.driver = webdriver.Chrome(
            "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/automated_tests/Drivers/chromedriver.exe")

        self.driver.maximize_window()
        self.driver.get("http://localhost:3000/Account")

    def test_sellingproduct(self):
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[1]/a').click()
            username = self.driver.find_element_by_xpath( '//*[@id="root"]/div/div/div/div/div[1]/input')
            username.send_keys("securitytest")
            password = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/input')
            password.send_keys("Securitytest1!")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/button').click()
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/nav/div[2]/a[2]').click() 
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[3]/a').click() 
        title= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/form/input')
        title.send_keys("TV")
        desc=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/form/textarea')
        desc.send_keys("VIZIO 50 Inch Smart TV used in good condition ")
        price=self.driver.find_element_by_xpath('//*[@id="validationCustom03"]')
        price.send.keys("5")
        category= self.driver.find_element_by_id("validationCustom06")
        category.send_keys("electronics")
        state= self.driver.find_element_by_id("validationCustom04")
        state.send_keys("FL")
        image=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/form/div[3]').click()
        #how to select image from file directory??

        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/form/button').click()

        recentlyadded = self.driver.find_element_by_id("sort")
        recentlyadded.send_keys("Recently Added")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/form/div/button').click()
        time.sleep(3)
        cardcontainer=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/div/div') #?
        cards = cardcontainer.find_elements_by_tag_name("li")
        item[]
        for card in cards
        item.append(card.find_element_by_tag_name("figure")
        print(item[0])
        figure = item[0]
        self.assertEqual(figure, "Table")
        

        #how do i find the item i posted?
 




        


    

       
       
