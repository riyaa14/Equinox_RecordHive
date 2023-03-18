## PROJECT OVERVIEW
Develop a web-based platform for managing student transcripts and academic records using a stack data structure to track course grades and graduation requirements.

## TABLE OF CONTENTS
- Installation
- Features
- Technologies used
- Stack Implementation
- Contribution
- Contact

## INSTALLATION
To install and run the project:
- Install Node.js and MongoDB on your machine.
- Clone the project repository and navigate to the project directory.
- Install dependencies using `npm install`.
- Create a.env file with environment variables.
- Start the server using `npm start` for frontend and `npm run dev` for backend
- Open http://localhost:3000 in a web browser to see the running application.

## FEATURES
1. User authentication and authorization to ensure secure access to the application
2. User profile creation and management for easy maintenance of user data
3. Student record creation and management for keeping track of student information
4. Course record creation and management to manage courses offered by the institution
5. Semester record creation and management for tracking courses taken by students during each semester
6. Implementation of stack data structure for tracking course history
7. Calculation of GPA and academic standing to keep track of student progress
8. Graduation requirement tracking to ensure students meet all requirements for graduation
9. Ability to generate unofficial transcripts with all relevant information
10. Ability to request official transcripts and send them to the appropriate office

All of the above features have been thoroughly tested and verified to be functioning properly. Tests include:
- Verification of registered user access and authorization to restricted pages
- Testing of profile creation, editing, and deletion to ensure proper saving and removal of user data
- Verification of accurate creation, updating, and deletion of student, course, and semester records
- Testing of stack implementation for tracking course history, including adding and removing courses
- Verification of accurate calculation of GPA and academic standing
- Testing of graduation requirement tracking and updating to reflect changes
- Verification of accurate generation of unofficial and official transcripts with all required information.

## TECHNOLOGIES USED
- MongoDB: a document-based NoSQL database used to store and manage data in the project.
- Express: a web application framework used to build the server-side of the project, handle HTTP requests, and define routes.
- React: a JavaScript library used to build the client-side of the project, create reusable UI components, and manage the application state.
- Node.js: a JavaScript runtime environment used to run server-side code in the project and manage dependencies.
- React Bootstrap: a frontend framework used to create responsive and visually appealing UI elements, including buttons.
- React Toast: a library used to display notification messages in the UI.
- Font Awesome: a library used to add icons to the UI.
- React Router: a library used to set up links and routes in the application.
- PDFKit: a library used to generate PDFs.
- Nodemailer: a library used to send email notifications.

## STACK IMPLEMENTATION
- Generating unofficial transcripts: a stack is used to efficiently reverse the order of course information based on the student's course track array, enabling the most recent course taken to appear first on the transcript.
- Updating completed courses: a stack is used to efficiently maintain the order in which courses are completed by the student when the required credits are fulfilled.
- To add a course to a student's course history, a stack operation push is used, which ensures that the most recent course appears on top of the list. This maintains a chronological order and provides an organised record of the student's academic progress.
Using stacks in these functions improves efficiency and allows for easier manipulation and maintenance of course information.

## CONTRIBUTION

Instructions on how others can contribute to the project, including information on how to report issues, submit feature requests, and contribute code:
1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Submit a pull request to the original repository

## CONTACT
If you have any questions or feedback regarding this project, please feel free to contact us using one of the following methods:
- Email: himanshi142btit21@igdtuw.ac.in
- GitHub: github.com/himanshi4902

  We would love to hear from you and are open to suggestions, improvements, and collaborations!
