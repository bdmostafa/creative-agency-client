# Creative Agency - A Full Stack development Project

### [Live Client](https://creative-agency2020.web.app/)    
### [Live Server](https://creative-agency2020.herokuapp.com)    
### [Server Source Code](https://github.com/bdmostafa/creative-agency-server)

## Features
- Site is fully mobile friendly
- It's login authentication is set up using firebase auth
- Users and admins collection of e-mails in MongoDB
- It will differentiate whether the logged in user is a guest/user or an admin
- Services and clients' reviews are displayed from MongoDB dynamically
- An user can choose any service from home page and it redirects to dashboard automatically

### Users/Clients 
- An user/client can order service, set a time limit, set a price and can upload an image or file as a project sample.
- Users can add feedback/reviews that is displayed in home page.
- Users can see their all the services ordered and monitor the service's current status such as pending, in progress and done.
- All the data go to MongoDB and come from MongoDB with the help of API

### Admin Panel
- An admin can add new services and make more admins with emails.
- Admin can see all the ordered services list of different users/clients
- Admin will be able to change the status of orders such as pending to on going to done.
- All the data go to MongoDB and come from MongoDB with the help of API


### Technologies Used 
- React.js
- React-Hook
- React-Router
- React-Preloaders
- Base64
- Swiper.js
- Node.js
- MongoDB
- Express.js
- React-Bootstrap
- Firebase auth
- Firebase Hosting
- Heroku