import unittest
from selenium import webdriver
import time

class homepagetest(unittest.TestCase):
    def setUp(self):

    self.driver=webdriver.chrome(
        "/users/pakbi/Documents/GitHub/BUMETCS673S21T3/dev/automated_tests/chrome_tests/chromedriver")
    self.driver.get('http://localhost:3000')