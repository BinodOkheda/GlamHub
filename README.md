
![index.html](https://github.com/JRaghu842/Fashion-Geeks.com/blob/main/images/GLAM%20HUB.png)
# dizzy-vase-3091  A Beauty Booking System

> Project Code : dizzy-vase-3091<br/>
> Frontend Deployed link :  https://glamguru.netlify.app/  **(Netlify)** <br/>
> Backend deployed link :  https://dull-teal-pelican-vest.cyclic.app/ **(Cyclic)**  <br/>

Dizzy Vase website is an online platform designed to connect beauty professionals with clients looking to book beauty-related sessions. The website offers a user-friendly interface that allows clients to search for services and book appointments with beauty professionals in their area.
Upon visiting the website, users can create an account and browse through a wide range of beauty services offered by professionals, such as haircuts, facials, manicures, pedicures, makeup application, and more. Users can then select their preferred service, date, time, and location.
Beauty professionals can also create an account on the website and set up their availability by opening slots. They can specify the services they offer, their rates, and their preferred work schedule. They can then receive booking requests from clients and confirm or decline them based on their availability.
Overall, a beauty booking system website provides a convenient and efficient way for clients to find and book beauty services while also helping beauty professionals manage their appointments and grow their businesses.


## Features

 - Authentication: The project includes JWT-based authentication to secure user data.
 - Hashing: User passwords are securely hashed to protect against unauthorized access.
 - dotenv: The project uses dotenv to manage environment variables and sensitive configuration data.
 - Relationship: The project includes database schema relationships between collections to support complex data structures.
 - Aggregation: The project uses MongoDB's aggregation framework to perform advanced queries and data manipulations.
 - Redis: To check the token is blacklisted or not.
 - Slot Selecting :selcting the required slot and save it in database.
 - Sending Mail : Sending mail after Booking conform.
 - Paymnet : Payment the services with cards
 
## Tech Stack

**Client:** 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)&nbsp;
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)&nbsp;
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)&nbsp;



**Server:** 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)&nbsp;
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)&nbsp;
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)&nbsp;
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)&nbsp;
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)&nbsp;
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)&nbsp;
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)&nbsp;
&nbsp;
## NPM Packages

[![Security: bcrypt](https://img.shields.io/badge/Security-bcrypt-blueviolet.svg?style=for-the-badge&logo=cryptography&logoColor=white)](https://en.wikipedia.org/wiki/Bcrypt)
[![SweetAlert](https://img.shields.io/badge/SweetAlert-FF3E3E.svg?style=for-the-badge&logo=javascript&logoColor=white)](https://sweetalert.js.org/)
[![JWT](https://img.shields.io/badge/JWT-2386C9.svg?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)


### Admin Route
    -Register New Admin (method:POST) "admin/register"
    -Login Admin (method:POST)  "admin/login"
    -Admin Refresh Access Token (method:POST) "/refresh-token";
    -Register New Salon (method:POST) "admin/register-salon";
    -Get All Salons (method:POST) "admin/salons";
    -Update Salon Details (method:POST) "/update-details";
    
### User Authentication
    - Get Users List(Method: POST): /login/
    - Get Users List(Method: POST): /register/
   
 ### User Route
  
    - Get Users List(Method: GET): /refresh-token/
    - Get Users List(Method: POST): /getotp/
    - Get Users List(Method: POST): /verifyotp/
    - Get Users List(Method: POST): /resetpassword/
    - Get Users List(Method: GET): /getsalon/
    - Get Users List(Method: POST): /order/addorder
    - Get Users List(Method: POST): /order/sendmail
    
  
  
  
  ## Run Locally
 ### Clone the project
     -https://github.com/8309h/dizzy-vase-3091 

### Go to the project directory
    - cd dizzy-vase-3091
    
### Install dependencies

    - npm install

### Start the server
    - npm run server
    
## Environment Variables
 To run this project, you will need to add the following environment variables to your .env file

      -PORT = 4000
      -MONGO_URL = MongoDb Database
      -SENDGRID_KEY =To send mail while forget password and to receive mail after order confrom.
      -JWT_ACCESS_TOKEN_SECRET_KEY =JWT tokens
      -JWT_REFRESH_TOKEN_SECRET_KEY = Refresh token
      -GOOGLE_CLIENT_ID = For Login with Google 
      -GOOGLE_CLIENT_SECRET = For Login with Google 


## Contributors
-[Harshal Wagh](https://github.com/8309h) <br/>
-[Raghavendra Jingade](https://github.com/JRaghu842) <br/>
-[Pranay Mishra](https://github.com/THEPRANAYMISHRA) <br/>
-[Binod Okheda](https://github.com/BinodOkheda) 


<h3>Landing Page</h3>
  
![index](https://github.com/JRaghu842/Fashion-Geeks.com/blob/main/images/Glam_indexpage.png)
  
<h3>Login Page</h3>
  
![index.html](https://github.com/JRaghu842/Fashion-Geeks.com/blob/main/images/Glam_login.png)  
  
<h3>Register Page</h3>
  
![index.html](https://github.com/JRaghu842/Fashion-Geeks.com/blob/main/images/Glam_register.png)
  
<h3>Center</h3>
  
![index.html](https://github.com/JRaghu842/Fashion-Geeks.com/blob/main/images/Glam_booking.png)  
  
<h3>Slot Booking</h3>
  
![index.html](https://github.com/JRaghu842/Fashion-Geeks.com/blob/main/images/Glam_slot_booking.png)  
  
<h3>Confirm Booking and payment</h3>
  
![index.html](https://github.com/JRaghu842/Fashion-Geeks.com/blob/main/images/Glam_confirm_booking.png)  


