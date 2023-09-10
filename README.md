# hotel-looker

This web application allows users to log in with Firebase Google authentication, search for hotels, view hotel details, read reviews, and book rooms. It fetches hotel data from the Fake Hotel API.

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo](#demo)


## Description

This web application allows users to log in with Firebase Google authentication, search for hotels, view hotel details, read reviews, and book rooms. It fetches hotel data from the Fake Hotel API.

## Tech Stack

<h4 align="center">Frontend:</h4>
<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="firebase" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css" />
</p>


<h4 align="center">Deployed On:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercerl">
</p>

## Features

- Firebase Google Login
- Home Page with:
  - Cards displaying Hotel Details:
    - Hotel Name
    - Auto-sliding images of the hotel
    - Star rating
    - Design-based Rating
    - "Book Now" button
  - Hotel search functionality
- Expandable hotel card to show review comments received through the API
- Booking confirmation with in-app notification
- Logout

## Installation

1. Clone the repository

```bash
git clone https://github.com/khanahmad4527/hotel-looker.git
```
2. Install dependencies

```bash
npm install
```
3. Start the project

```bash
npm run start
```

## Usage

1. **Log In**: Launch the app, and you will be prompted to log in with your Google account using Firebase authentication.

2. **Home Page**: On the Home Page, you can:

   - **View Hotel Cards**: Browse through hotel cards with details.
   - **Search for a Hotel**: Utilize the search feature to find a specific hotel.
   - **Expand Hotel Details**: Click on a hotel card to expand and view review comments.

3. **Booking a Room**: To book a room, follow these steps:

   - Find the hotel you want to book.
   - Click the "Book Now" button on the hotel card.
   - You will receive an in-app notification confirming your booking with the message "Your booking has been confirmed."

4. **Log Out**: To log out of the app, click on the "Logout" option.

## Screenshots

<div align="center">
  <h3>Signup Page</h3>
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694351366/Screenshot_467_f8alai.png" width="500">
</div>

<div align="center">
  <h3>Home Page</h3>
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694352233/Screenshot_469_eg2pjg.png" width="500">
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694352233/Screenshot_471_gmqlfz.png" width="500">
</div>

<div align="center">
  <h3>Hotel Review</h3>
  <img src="https://res.cloudinary.com/dalqx198y/image/upload/v1694352233/Screenshot_470_ububj8.png" width="500">
</div>

## Demo

Check out the demo <a href="https://hotel-looker.vercel.app" target="_blank">here</a>
