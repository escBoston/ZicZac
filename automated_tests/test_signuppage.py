import os
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import random 
import time


class signuppagefunctionality(unittest.TestCase):

    def setUp(self):

        self.driver = webdriver.Chrome(
            "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/automated_tests/Drivers/chromedriver.exe")

        self.driver.maximize_window()
        self.driver.get("http://localhost:3000/Signup")

    def test_signup(self):

    # checking to see if users can signup

        email = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[1]/input')
        email.send_keys("testingproject@gmail.com")
        username = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[2]/input')
        username.send_keys(''.join(random.choice('0123456789ABCDEF') for i in range(16)))
        password = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[3]/input')
        password.send_keys("Beauty1234@")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/button').click()
        time.sleep(5)
        exps = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/div/h1').text
        print(exps)
        self.assertEqual(exps, "PRODUCTS")
        time.sleep(1)

    def test_errormessage(self):

        # checking to see if the error message displayed when user does not meet the password requirements
        email = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[1]/input')
        email.send_keys("testingproject@gmail.com")
        username = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[2]/input')
        username.send_keys(''.join(random.choice('0123456789ABCDEF') for i in range(16)))
        password = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[3]/input')
        password.send_keys("abcd")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/button').click()
        time.sleep(1)
        exps1 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/span').text
        print(exps1)
        self.assertEqual(exps1, "password requirements not met!")
        time.sleep(1)

    def test_existinguser(self):

        # checking to see if the error message displayed when user enters existing user info
        email = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[1]/input')
        email.send_keys("testingproject@gmail.com")
        username = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[2]/input')
        username.send_keys("securitytest")
        password = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[3]/input')
        password.send_keys("Securitytest1!")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/button').click()
        time.sleep(1)
        exps2 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/span').text
        print(exps2)
        self.assertEqual(exps2, "username taken")
        time.sleep(1)

    def test_blankemail(self):
        # Checking the error message when user does not enter email field.
        email = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[1]/input')
        email.send_keys(" ")
        username = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[2]/input')
        username.send_keys("test590")
        password = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[3]/input')
        password.send_keys("Boston1234@")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/button').click()
        wait = WebDriverWait(self.driver, 2)  
        try:
            wait.until(EC.alert_is_present(), 'Alert did not show')
        

            alert = self.driver.switch_to.alert
            alert.accept()
            print("alert accepted")
        except TimeoutException:
            print("no alert")


        

         # how to inspect an alert?

    def test_emptyusername(self):
    # Checking the error message when user does not enter username field
        email = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[1]/input')
        email.send_keys("test2021@gmail.com")
        username = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[2]/input')
        username.send_keys(" ")
        password = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/div[3]/input')
        password.send_keys("Boston123456@")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/button').click()
        wait = WebDriverWait(self.driver, 2)  
        try:
            wait.until(EC.alert_is_present(), 'Alert did not show')
        

            alert = self.driver.switch_to.alert
            alert.accept()
            print("alert accepted")
        except TimeoutException:
            print("no alert")


      

         # how to inspect an alert?
    def test_passwordfieldempty(self):
        # Checking the error message when user does not enter password fields
        email= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/div[1]/input')
        email.send_keys("test9010gmail.com")
        username= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/div[2]/input')
        username.send_keys("Nicolas90")
        password= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/div[3]/input')
        password.send_keys(" ")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/button').click()
        wait = WebDriverWait(self.driver, 2)  
        try:
            wait.until(EC.alert_is_present(), 'Alert did not show')
        

            alert = self.driver.switch_to.alert
            alert.accept()
            print("alert accepted")
        except TimeoutException:
            print("no alert")




          # how to inspect an alert?

    def test_allfieldsempty(self):
       # Checking the error message when user does not enter any fields
        email= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/div[1]/input')
        email.send_keys(" ")
        username= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/div[2]/input')
        username.send_keys(" ")
        password= self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/div[3]/input')
        password.send_keys(" ")
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/form/button').click()
        wait = WebDriverWait(self.driver, 2)  
        try:
            wait.until(EC.alert_is_present(), 'Alert did not show')
        

            alert = self.driver.switch_to.alert
            alert.accept()
            print("alert accepted")
        except TimeoutException:
            print("no alert")



        # how to inspect an alert?


        
        

    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()




