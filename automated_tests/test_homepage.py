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

    #checking to see if login button works
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[1]/a').click()
        expr2=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/h3').text
        print(expr2)
        self.assertEqual(expr2, 'Sign In')
        time.sleep(1)

        #checking to see if the error message displayed when the username enters incorrect password
        
        #username=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[1]/input')
        #username.value = "pakbiyik"
        #password=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/input')
        #password.value = "UN#LMLK99"
        #self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/button').click
        #expr3 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div').text
        #self.assertEqual(expr3, "Invalid username.")
        #time.sleep(1)

        #checking sell you product button
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[3]/a').click()
        expr4 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/h2').text
        print(expr4)
        self.assertEqual(expr4, 'Sell Your Product')
        time.sleep(1)



    


    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
