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
        # checking sorting feature on homepage
        sorting = self.driver.find_element_by_id("sort")
        sorting.send_keys("Price")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[2]/div/form/div/button').click()
        time.sleep(3)
        cardcontainer = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[2]/div/div/div')
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
        # checking search function on homepage
        search = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/form/input')
        search.send_keys("lamp")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/form/button').click()
        time.sleep(3)
        expr1 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/li/button/div/h5').text
        print(expr1)
        self.assertEqual(expr1, "lamp")
        time.sleep(1)

    def test_clothingbutton(self):

  # checking to see if clothing botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[1]/li[1]/button/div/h5').click()
        time.sleep(1)
        expr6 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr6)
        self.assertEqual(expr6, "Category: clothing")
        time.sleep(1)

    def test_furniturebutton(self):
        # checking to see if furniture botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[1]/li[2]/button/div/h5').click()
        time.sleep(1)
        expr7 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr7)
        self.assertEqual(expr7, "Category: furniture")
        time.sleep(1)

    def test_electronicsbutton(self):
         # checking to see if electronics botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[1]/li[3]/button/div/h5').click()
        time.sleep(1)
        expr8 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr8)
        self.assertEqual(expr8, "Category: electronics")
        time.sleep(1)

    def test_vechilesbutton(self):
         # checking to see if vechiles botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[1]/li[4]/button/div/h5').click()
        time.sleep(1)
        expr9 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr9)
        self.assertEqual(expr9, "Category: vehicles")
        time.sleep(1)

    def test_schoolbutton(self):
         # checking to see if school botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[1]/li[5]/button/div/h5').click()
        time.sleep(1)
        expr10 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr10)
        self.assertEqual(expr10, "Category: school")
        time.sleep(1)

    def test_entertaintmentbutton(self):
         # checking to see if entertainment botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[2]/li[1]/button/div/h5').click()
        time.sleep(1)
        
        expr11 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr11)
        self.assertEqual(expr11, "Category: entertainment")
        time.sleep(1)

    def test_gardenbutton(self):
         # checking to see if garden botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[2]/li[2]/button/div/h5').click()
        time.sleep(1)
        expr12 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr12)
        self.assertEqual(expr12, "Category: garden")
        time.sleep(1)

    def test_petbutton(self):
         # checking to see if pet botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[2]/li[3]/button/div/h5').click()
        time.sleep(1)
        expr13 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr13)
        self.assertEqual(expr13, "Category: pet")
        time.sleep(1)

    def test_sportbutton(self):
         # checking to see if pet botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[2]/li[4]/button/div/h5').click()
        time.sleep(1)
        expr14 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr14)
        self.assertEqual(expr14, "Category: sport")
        time.sleep(1)

    def test_homesbutton(self):
         # checking to see if homes botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/div/div[2]/li[5]/button/div/h5').click()
        time.sleep(1)
        expr15 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[1]/h4').text
        print(expr15)
        self.assertEqual(expr15, "Category: homes")
        time.sleep(1)

    def test_signupbutton(self):
         # checking to see if signup botton works
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/footer/div/div/div[3]/a/button').click()
        time.sleep(1)
        expr16 = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/form/h3').text
        print(expr16)
        self.assertEqual(expr16, "Sign Up")
        

    def test_homebutton(self):
         # checking to see if home botton works 
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/nav/div[1]/a[1]').click()
        expr17 = self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div[2]/div/div/h1').text
        print(expr17)
        self.assertEqual(expr17, "PRODUCTS")
        time.sleep(1)
    
    


        


    


    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
