import os
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time



class homepagetest(unittest.TestCase):

    def setUp(self):
      
        self.driver = webdriver.Chrome(
            "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/automated_tests/Drivers/chromedriver.exe")
     
        self.driver.maximize_window()
        self.driver.get("http://localhost:3000/")
       

    def test_Homepageloads(self):
        
       
   # checking to see if account botton works by checking sign up element in acount page
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        expr = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/ul/li[2]/a').text
        print(expr)
        self.assertEqual(expr, 'Sign up')
        time.sleep(3)

    def test_sorting(self):
        #checking sorting feature on homepage
        sorting = self.driver.find_element_by_id("sort")
        sorting.send_keys("Price")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/form/div/button').click()
        time.sleep(3)
        cardcontainer=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/div/div')
        cards = cardcontainer.find_elements_by_tag_name("li")
        
        price = []
        for card in cards:

            price.append(card.find_element_by_tag_name("figure").get_attribute('data-category'))
        priceCopy = price
        priceCopy.sort()
        print(price)
        self.assertEqual(price, priceCopy)

        time.sleep(1)

    def test_searching(self):
        #checking search function on homepage
        search= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/nav/form/input')
        search.send_keys("lamp")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/nav/form/button').click()
        time.sleep(3)
        expr1=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/li/button/div/h5').text
        print(expr1)
        self.assertEqual(expr1, "lamp")
        time.sleep(1)

    


    


    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
