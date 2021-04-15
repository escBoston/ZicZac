# ZicZac
ZicZac is an online marketplace for users to buy, sell, or trade products. ZicZac makes it simple and easy to post a product for sale. It also provides a platform or communication between users, a sophisticated search engine, categorical and chronological product filtering, account security, and more.

## Project Stack
ZicZac is built on a ReactJS front end. The back end is a REST API built with python/flask. ZicZac uses a SQLite relational database, and all communication with the database is via flask.

## Running ZicZac locally:
To run the project locally, first ensure that npm, python, and flask are installed. Navigate in terminal to ```team3_webapp_react``` and run ```npm start```. Then, in a separate terminal tab, navigate to dev and run ```python app.py```. The site will open in your browser with the URL http://localhost:3000/

## Directory Structure
```
├── BUMETCS673S21T3
  ├── design
    └── logo.png
  ├── automated_tests/
  ├── dev
    ├── static/
    ├── templates/
    ├── app.py
    ├── passwordManager.py
    ├── data
      └── db.db
  ├── doc
    ├── CS673_ProgressReport_team3.xlsx
    ├── CS673_T3_MeetingMinutes.docx
    ├── CS673_T3_userstories.zip
    ├── Iteration_0_Presentation.pdf
    ├── Iteration_1_Presentation.pdf
    ├── Iteration_2_Presentation.pdf
    ├── Iteration_3_Presentation.pdf
    ├── T3_CS673_SDD.docx
    ├── T3_CS673_Testing.docx
    └── T3_CS673_SPPP.docx    
  ├── team3_webapp_react
    ├── config/
    ├── node_modules/
    ├── public/
    ├── scripts/
    ├── src
      ├── components
        ├── Footer.js
        ├── Header.js
        ├── Card.js
        ├── CardCategory.js
        ├── Messages.js
        ├── ProductDetail.js
        ├── ProductList.js
        ├── Search.js
        ├── SendMessage.js
        ├── Section1.js
        ├── Section2.js
        ├── Section3.js
        ├── Section4.js
        ├── UploadProduct.js
        └── UserProfile.js
      ├── Account.js
      ├── App.js
      ├── ContactUs.js
      ├── Home.js
      ├── index.css
      ├── Products.js
      ├── ProductDetails.js
      ├── reportWebVitals.js
      ├── setupTests.js
      ├── Sell.js
      ├── Signin.js
      └── Signup.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock
  ├── team.md
  └── README.md
  ```
