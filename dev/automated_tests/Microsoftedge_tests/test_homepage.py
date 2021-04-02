import unittest
from selenium import webdriver
from webdriver_manager.microsoft import EdgeDriverManager


driver = webdriver.Edge(executable_path=EdgeDriverManager().install())
driver.get("http://www.google.com/")
print(driver.title)
driver.quit()
#import time


#class homepagetest(unittest.TestCase):

      #def setUp(self):
          #self.driver = webdriver.edge()
          #self.driver = webdriver.edge(executable_path="C:\\Users\\pakbi\\Documents\\GitHub\\BUMETCS673S21T3\\dev\\automated_tests\\Microsoftedge_tests\\msedgedriver")
          #self.driver.get("http://localhost:3000/Home")
            
          


      #def test_Homepageloads(self):
    #checking to see if account botton works by checking sign up element in acount page
         # self.driver.find_element_by_xpath('//*[@id="root"]/div/div/nav/div[2]/a[2]').click()
        # expr=self.driver.find_element_by_xpath('//*[@id="root"]/div/div/div/ul/li[2]/a').text
        # print(expr)
          #self.assertEqual(expr, 'Sign Up')
          #time.sleep(1)

          #def teardown(self):
          #self.driver.close()

          #if __name__ == "__main__":
              #unittest.main()