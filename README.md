# CPSC 455 Project

CPSC 455 2022S **Team 405 Found**

## Project Description

-   The targeted users for this project are driving instructors and people seeking to get driver's licenses in BC. It provides a platform for student drivers to find ideal instructors based on locations, services they need, etc.
-   Future drivers can browse a list of instructors. They can also rate instructors. Instructors can put their information on the website to advertise their services. Users can create accounts to see their reviews/advertisements.
-   It will store profiles of driving instructors, their services, and reviews from previous students. Student drivers can choose instructors based on the information mentioned above and get in touch with the instructors.
-   One additional functionality we can add is to arrange appointments for instructors and students. We are also planning to add Google Maps API to show all the instructors in users' neighbourhoods. Adding searching/filtering is also a good idea.

## Project Task Requirements

**Minimal Requirements**

-   [ ] Have instructor/student profile pages
-   [ ] Display instructors' reviews
-   [ ] Implement React sliding window effect on the main page
-   [ ] Display instructor profile cards on the main page
-   [ ] Have a sign-in/sign-up page

**Standard Requirements**

-   [ ] Manage user registration/login/authentication
-   [ ] Edit instructor/student profile page
-   [ ] Add/Delete/Update user reviews
-   [ ] Like and save instructors to "My Favourite Instructors List"
-   [ ] Filter instructors according to a search criteria
-   [ ] Sort reviews according to rating
-   [ ] List instructor availability in a calendar view

**Stretch Requirements**

-   [ ] Have a contact instructor panel
-   [ ] Link with map API to show instructors nearby me
-   [ ] Recommend instructor based on a user quiz (ML/AI)
-   [ ] Write comments/reviews anonymously, and anonymous posts are only visible to us
-   [ ] Implement an instructor profile page preview

## Requirements breakdown

-   [ ] Display instructor profile cards in the main page
    -   Have a search bar
    -   Display Top 3 recommended instructor profile cards on the top of the main page using React sliding window effect
    -   Add a filter panel on the left of the webpage to help users search for ideal instructors
    -   Display query results based on filters
    -   Click on cards and redirect to instructors' review pages
-   [ ] Have instructor/student profile pages
    -   Display the user's name, language, location, availability, contact email, etc in the profile page
    -   Be able to edit user's personal information
    -   Upload/Update user's profile image
    -   Have a tab to view student's favorite instructors
    -   Have a tab to view student's written reviews

## Future requirements breakdown

-   [ ] Edit a review
    -   Add a review on the instructor's profile page listed on the main page
    -   Rate the instructor on the instructor's profile page listed on the main page
-   [ ] Create/Delete/Modify new instructor profiles
    -   Display the instructor's name, language, location, availability, contact email, and etc on the profile page
    -   Edit the instructor's personal information
    -   Upload/Update the instructor's profile image
-   [ ] Manage user registration/login/authentication
    -   Register with email and password as a student/instructor
    -   Register with a Google account as a student/instructor
    -   Login with email and password as a student/instructor
    -   Login with a Google account as a student/instructor

## Sketch

![Screenshot](/docs/mainPage.png)
![MainpageScrolldown](/docs/Mainpage-Scrolldown.png)
![Profile-Intructor](/docs/Profile-Intructor.png)
![Viewpage-InstructorInfoReview](/docs/Viewpage-InstructorInfoReview.png)
