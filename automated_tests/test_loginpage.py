import os
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class loginpagefunctionality(unittest.TestCase):

    def setUp(self):

        self.driver = webdriver.Chrome(
            "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/automated_tests/Drivers/chromedriver.exe")

        self.driver.maximize_window()
        self.driver.get("http://localhost:3000/Signin")

    def test_loginpage(self):
    #checking to see if invalid username message displayed when the username enters incorrect username

        username = self.driver.find_element_by_xpath( '//*[@id="root"]/div/div/div/div/div[1]/input')
        username.send_keys("pakbiyik")
        password = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/input')
        password.send_keys("UN#LMLK99")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/button').click()
        time.sleep(3)
        expr3 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/span').text
        print(expr3)
        self.assertEqual(expr3, "Invalid username.")
        time.sleep(1)

    def test_loginpagemessage(self):
    #checking to see if incorrect password error message displayed when the username enters incorrect password

        username = self.driver.find_element_by_xpath( '//*[@id="root"]/div/div/div/div/div[1]/input')
        username.send_keys("securitytest")
        password = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/input')
        password.send_keys("UN#LMLK99")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/button').click()
        time.sleep(3)
        expr4 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/span').text
        print(expr4)
        self.assertEqual(expr4, "Incorrect password.")
        time.sleep(1)

      def test_loginpagefunction(self):
    #checking to see if a user can login with existing account

        username = self.driver.find_element_by_xpath( '//*[@id="root"]/div/div/div/div/div[1]/input')
        username.send_keys("securitytest")
        password = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/div[2]/input')
        password.send_keys("Securitytest1!")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/div/button').click()
        time.sleep(3)
        expr5 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/div/h1').text
        print(expr5)
        self.assertEqual(expr5, "PRODUCTS")



    time.sleep(1)

    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
