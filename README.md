# Console (in development)

Console is a CRM web application based on content and settings defined in JSON files. This approach allows modifying the application content without touching the codebase.

## Features

The application is split into three parts: the main app server, the web server, and the client. The app server handles the main architecture logic, while the web server and client are specific to a particular app. 
This approach helps with scaling the application.
Users can view, edit, and delete content filtered by categories. Users have to register an account and log in to use the application.

## Installation

This web application is created using React, JavaScript, Redux Toolkit for state management, Bootstrap, and CSS for the frontend; Express/Node.js for the backend servers, and PostgreSQL for the database.
To run the application, execute the following commands:

- `a.bat` for the app server
- `s.bat` for the web server
- `c.bat` for client
