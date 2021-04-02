import unittest
from selenium import webdriver
import time

class homepagetest(unittest.TestCase):

      def setUp(self):
          self.driver = webdriver.Chrome("Users/pakbi/Documents/GitHub/BUMETCS673S21T3/dev/automated_tests/chrome_tests/chromedriver")
          self.driver.get('http://localhost:3000/')


      def test_Homepageloads(self):
#checking to see if account botton works by checking sign up element in acount page
          self.driver.find_element_by_xpath('//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
          expr=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[2]/a').text
          print(expr)
          self.assertEqual(expr, 'Sign Up')
          time.sleep(1)

      def teardown(self):
          self.driver.close()