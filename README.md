# CPSC 455 Project

CPSC 455 2022S **Team 405 Found**

## High-level Description
Welcome to ezdrive! The ultimate website for finding a local driving instructor nearby you, or post our own business by registering as an instructor! The explore page contains all the instructors we have and you can filter them using the panel on the left. You can also register as a student/instructor and edit your profile. Find a great instructor? Leave him/her a review and give a 5 out of 5 rating.

## Project Description

-   The targeted users for this project are driving instructors and people seeking to get driver's licenses in BC. It provides a platform for student drivers to find ideal instructors based on locations, services they need, etc.
-   Future drivers can browse a list of instructors. They can also rate instructors. Instructors can put their information on the website to advertise their services. Users can create accounts to see their reviews/advertisements.
-   It will store profiles of driving instructors, their services, and reviews from previous students. Student drivers can choose instructors based on the information mentioned above and get in touch with the instructors.
-   One additional functionality we can add is to arrange appointments for instructors and students. We are also planning to add Google Maps API to show all the instructors in users' neighbourhoods. Adding searching/filtering is also a good idea.

## Project Task Requirements

**Minimal Requirements**

-   [x] Have instructor/student profile pages
-   [x] Display instructors' reviews
-   [x] Implement React sliding window effect on the main page
-   [x] Display instructor profile cards on the main page
-   [x] Have a sign-in/sign-up page

**Standard Requirements**

-   [x] Manage user registration/login/authentication
-   [x] Edit instructor/student profile page
-   [x] Add/Delete/Update user reviews(**ongoing**)
-   [x] Like and save instructors to "My Favourite Instructors List"
-   [x] Filter instructors according to a search criteria
-   [x] Sort reviews according to rating
-   [x] List instructor availability in a calendar view (**ongoing**)

**Stretch Requirements**

-   [x] Have a contact instructor panel (changed to contact us panel)
-   [x] Link with map API
-   [ ] Recommend instructor based on a user quiz (ML/AI)
-   [ ] Write comments/reviews anonymously, and anonymous posts are only visible to us
-   [ ] Implement an instructor profile page preview

## Requirements breakdown

-   [x] Display instructor profile cards in the main page
    -   Have a search bar
    -   Display Top 3 recommended instructor profile cards on the top of the main page using React sliding window effect
    -   Add a filter panel on the left of the webpage to help users search for ideal instructors
    -   Display query results based on filters
    -   Click on cards and redirect to instructors' review pages
-   [x] Have instructor/student profile pages
    -   Display the user's name, language, location, availability, contact email, etc in the profile page
    -   Be able to edit user's personal information
    -   Upload/Update user's profile image
    -   Have a tab to view student's favorite instructors
    -   Have a tab to view student's written reviews

## Future requirements breakdown

-   [x] Edit a review
    -   Add a review on the instructor's profile page listed on the main page
    -   Rate the instructor on the instructor's profile page listed on the main page
-   [x] Create/Delete/Modify new instructor profiles
    -   Display the instructor's name, language, location, availability, contact email, and etc on the profile page
    -   Edit the instructor's personal information
    -   Upload/Update the instructor's profile image
-   [x] Manage user registration/login/authentication
    -   Register with email and password as a student/instructor
    -   Register with a Google account as a student/instructor
    -   Login with email and password as a student/instructor
    -   Login with a Google account as a student/instructor

## Tech Usages
### HTML, CSS, JavaScript
- To manage the space in each page, we use flexbox by wrapping the component in a scss class. React uses HTML also, so HTML is also a important part defining the structure of the webpage. No doubt JavaScript is the most important part of the webpage, 90% of the code is written in JavaScript. We use JavaScript calling APIs, handling promises, sending requests and so on.

### React & Redux
- React is used to create all the pages by writing functional components. We not only used hooks to manage the state of the webpage, but also used React Router to manage the routing of the webpage. Evenmore, we wrote custom hooks to give us more control over the data flow of the profile pages. We also experimented with React component lifecycle methods to manage rendering and updating. Redux is also used to manage the state of the webpage. Each dispatch action goes through the reducer and the state is updated. It allows multiple components to share the same state on the main page.

### Node & Express
- We choose Node and Express to run the server. We use Express to handle the routing of the webpage. NPM is used to install all the dependencies. It provides us with a lot of useful features. Express is also a path to our backend code.

### MongoDB
- We use MongoDB to store the data. We use Mongoose to create schemas and models. We did not insert data one by one, but instead we used seeds to insert data. It saved a lot of time and created a lot of real and useful data for testing.

### Release engineering
- We chose Heroku as our deploy platform. We used CI to test our build and then Github Actions to deploy our build. We also enabled automatic deployment to Heroku after CI is passed.


## Above and Beyond Functionalities
- Follow/unfollow
    -   According to the user's log in status and user's current following information from MongoDB, the follow button would be presented variously on the first               rendering of the instructor profile page. 
    -   Firstly, Out of the consideration of the best user experience and industrial practice, we decided that an instructor cannot follow another instructor, and if a guest user clicked the follow button, the user would be redirect to a log in/register account page. Secondly when a student navigate to an instructor page, a ternary operation is used to decide the text display and functionality of the button to be follow or unfollow. 
    -   If the follow/unfollow button is clicked by a student user, the frontend would send a patch request to our backend to update our redux reducer and MongoDB. After our backend receive the patch request and finish updating, the follow button in our frontend will change its display accordinly, and the next time when the user click it, its functionality will be switched to unfollow.    
- Registration/Authentication
    - Inserted custom Express.js middleware into project backend routes to protect them against unauthorized use as well as provide login function.
    - To create an instructor account, new instructor can provide their available timeslots from Monday to Sunday and store them in MongoDB. Once information received by MongoDB, all users will have access to view the time schedule of one instructor in one week if they view instructor's Rate&Review profile page.
- Rating and reviews
    - Fetched detailed information of each instructors such as name, experience of teaching years, and what class license the instructor holds.
    - Retrieved all available and booked timeslots based on the current instructor's Rate&Review profile page and display them in a Calendar view. Users can also choose Calendar types to view appointments in one day/week/month.
    - Display reviews and rating based on data collected from MongoDB. Logged-in students will have access to Add a new review and give ratings to every instructor they see, and the rating distribution will actively change its data once receiving a new review and rating.
    - In Student profile page, students can view all the reviews they have written and have access to Delete/Update reviews written by them
    - In Instructor profile page, instructors can view all the reviews they have received.
    - Sort reviews by sorting the ratings is available to all users, and users can also search reviews based on reviewer's names.
- Map
    - Based on the current student location, we used Google Map API to show the current location of the student. First, we need to get a API key from Google then calling the service using axios.
    - We first used the Geolocation API to convert the current location to a latitude and longitude. Then we used the react-google-maps package to display the map.
    - Backend API is also completed to show all the instructors nearby the student, but it is taking too long to respond. We used Distance Matrix API to get the distance between the student and the instructors.

- Main page sorting

- Social media / contact form
    - Registered social media account and email account for our website.
    - Added a Contact Us box using EmailJS API, so that users are able to send direct message to our official email address though our website

## Next steps
- In the future, we probably want to add a direct message system to send messages to instructors. In that way, we are able to resolve any issues that students may have by tracking the messages. Moreover, we would like to implement a recommendation system to recommend instructors to the student. It should be based on the user's quiz result.

## List of contributions
- Kaiqian(Cathy) Yang
    - Designed home page and added a Contact Us box using EmailJS API.
    - Added navbar and footer to website, and registered social media account and email account for our website.
    - Worked on backend and frontend of Rate&Review profile page for instructors, with functionalities of Add/Delete/Update/Read/Sort/Search reviews, and allowing user to view appointments in a Calendar.
    - Implemented user registration/login/authentication functionalities, and allow new instrutors to choose their available timeslots every week when signup their account.
- Chloe Zhang
- Davis Qi
    - Design and created slider's profile card and the earlier version of profile cards on explore page.
    - Worked on follow/unfollow function that send a patch request to backend using routes,reducer, and action; the results are stored in MongoDB.
    - worked on side filter bar/search function at the beginning of the project, and worked on responsive on some components.
- Yizhou Li
    - Link with map API, external APIs calling and handling
    - Worked with the deployment, fixed package/version bugs on Heroku and successfully deployed the build to Heroku
    - Worked on profile pages, from frontend using bootstrap to backend using Mongoose and MongoDB. Wrote routes, reducers and actions.

## Sketch

![Screenshot](/docs/mainPage.png)
![MainpageScrolldown](/docs/Mainpage-Scrolldown.png)
![Profile-Intructor](/docs/Profile-Intructor.png)
![Viewpage-InstructorInfoReview](/docs/Viewpage-InstructorInfoReview.png)
