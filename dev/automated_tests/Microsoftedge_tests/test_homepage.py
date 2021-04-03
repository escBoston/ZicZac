import os
import unittest
# from msedge.selenium_tools import Edge, EdgeOptions
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# from webdriver_manager.microsoft import EdgeDriverManager


# driver = webdriver.Edge(executable_path=EdgeDriverManager().install())
# driver.get("http://www.google.com/")
# print(driver.title)
# driver.quit()
# import time


class homepagetest(unittest.TestCase):

      def setup(self):
        # options = EdgeOptions()
        # options.use_chromium = True
        # options.binary_location = "C:\\Users\\pakbi\\AppData\\Local\\Programs\\Python\\Python39\\msedgedriver.exe"
        self.driver = webdriver.Chrome(
            "C:/Users/pakbi/Documents/GitHub/BUMETCS673S21T3/dev/automated_tests/Microsoftedge_test/Drivers/chromedriver.exe")
        # dir = os.path.dirname(os.path.realpath(__file__))
       # edge_driver_path = dir+"\\edgedriver_win64\\msedgedriver.exe"
       # self.driver = Edge(options=options, executable_path=edge_driver_path)
        self.driver.implicity_wait(30)
        self.driver.maximize_window()
        self.driver.get("www.facebook.com")
          # self.driver = webdriver.edge()
          # self.driver = webdriver.edge(executable_path="C:\\Users\\pakbi\\Documents\\GitHub\\BUMETCS673S21T3\\dev\\automated_tests\\Microsoftedge_tests\\msedgedriver")
          # self.driver.get("http://localhost:3000/")

      def test_Homepageloads(self):
    # checking to see if account botton works by checking sign up element in acount page
          self.driver.find_element_by_xpath(
              '//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
          expr = self.driver.find_element_by_xpath(
              '//*[@id="root"]/div/div/div/ul/li[2]/a').text
          print(expr)
          self.assertEqual(expr, 'Sign Up')
          time.sleep(1)

          def teardown(self):
          self.driver.close()


 if __name__ == "__main__":
   unittest.main()
