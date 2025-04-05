# Photolabs

## Overview

PhotoLabs is a dynamic one-page React application that allows users to browse, interact with, and manage a collection of photos. Users can add photos to their favourites, view detailed enlargements, and explore similar images. The app also features a navigation bar for category selection and a notification system for favourite items.


## Features

- **Interactive Photo Gallery**: Browse a diverse collection of photos organized by topics.
- **Favourites System**: Add or remove photos from your favourites with a simplar click on the like button.
- **Photo Details Modal**: Click on any photos to view a larger version along with other similar images.
- **Category Navigation**: Easily switch photos topics by using the navigation bar at the top.
- **Favourite Notifications**: Get notified when you have active faovurites with the icon in the top-right.
- **Responsive Design**: Enjoy a seamless experience across various devices and screens

## Installation

1. Clone the repositort:

```bash
git clone https://github.com/yourusername/photolabs.git
cd photolabs
```

2. Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

### [Frontend] Running Webpack Development Server

This will open your browser to http://localhost:3000

```sh
cd frontend
npm start
```

### [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Future Enhancements

- Favourite Filter: Implement a feature to filter and display only favourite photos when the notification icon is clicked.​
- Homepage Refresh: Add functionality so that clicking the PhotoLabs logo refreshes the page to return to the homepage.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.​
- **React Router**: For handling navigation and routing within the app.​
- **React Hooks**: For state management, particularly for handling favourites and modal states.​
- **SCSS**: Sassy CSS for styling the application.​

## Demo

Below is a demo of the PhotoLabs Application:

![Screenshot of the PhotoLabs Navigation bar](https://github.com/semblant/photo-labs/blob/main/public/docs/PhotoLabs_Navigation.png?raw=true)

![Screenshot of the PhotoLabs homepage](https://github.com/semblant/photo-labs/blob/main/public/docs/PhotoLabs_HomePage.png?raw=true)

![Screenshot of the PhotoLabs photo details modal](https://github.com/semblant/photo-labs/blob/main/public/docs/PhotoLabs_PhotoModal.png?raw=true)

![Screenshot of the similar photos in photo details modal](https://github.com/semblant/photo-labs/blob/main/public/docs/PhotoLabs_MorePhotos.png?raw=true)