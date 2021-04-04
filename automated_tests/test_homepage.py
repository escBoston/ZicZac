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
        time.sleep(1)

    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
