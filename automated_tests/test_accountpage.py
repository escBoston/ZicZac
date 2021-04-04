import os
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class accountpageloads(unittest.TestCase):

    def setUp(self):

        self.driver = webdriver.Chrome(
            "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/automated_tests/Drivers/chromedriver.exe")

        self.driver.maximize_window()
        self.driver.get("http://localhost:3000/Account")

    def test_Accountpage(self):
            #checking to see if login button works
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[1]/a').click()
        expr2 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/h3').text
        print(expr2)
        self.assertEqual(expr2, 'Sign In')
        time.sleep(1)

        #checking sell you product button
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/ul/li[3]/a').click()
        expr4 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/div[2]/h2').text
        print(expr4)
        self.assertEqual(expr4, 'Sell Your Product')
        time.sleep(1)

        def teardown(self):
            self.driver.close()


if __name__ == "__main__":
    unittest.main()
