import os
import unittest
import uuid
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class iteminrecentlyadded(unittest.TestCase):

    def setUp(self):

        self.driver = webdriver.Chrome(
            "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/automated_tests/Drivers/chromedriver.exe")

        self.driver.maximize_window()
        self.driver.get("http://localhost:3000/Home")

    def test_fillingformtosell(self):
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[1]/a').click()
        username = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/div[1]/input')
        username.send_keys("securitytest")
        password = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/div[2]/input')
        password.send_keys("Securitytest1!")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/button').click()
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/ul/li[3]/a').click()
        title = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/div[2]/form/input')
        titlename = str(uuid.uuid4())
        title.send_keys(titlename)
        desc = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/div[2]/form/textarea')
        desc.send_keys("VIZIO 50 Inch Smart TV used in good condition ")
        price = self.driver.find_element_by_xpath(
            '//*[@id="validationCustom03"]')
        price.send_keys("5")
        category = self.driver.find_element_by_id("validationCustom06")
        category.send_keys("electronics")
        state = self.driver.find_element_by_id("validationCustom04")
        state.send_keys("FL")
        image = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/div[2]/form/div[3]/input')
        image.send_keys('C:/Users/pakbi/Desktop/TV.jpg')
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/div/div[2]/form/button').click()  # sell button

        time.sleep(3)

        recentlyadded = self.driver.find_element_by_id("sort")
        recentlyadded.send_keys("Recently Added")
        self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[2]/div/form/div/button').click()
        time.sleep(10)
        cardcontainer = self.driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div[2]/div/div/div')  # getting group of items
        cards = cardcontainer.find_elements_by_tag_name("li")
        items = []
        for card in cards:
            items.append(card.find_element_by_class_name("cards__item__text"))
        print(items)
        print(titlename)
        self.assertTrue(titlename in items)

    def teardown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
