# React Travel Website

A modern and responsive travel website built with React. This project allows users to explore popular destinations, customize their trips, and get in touch with travel experts.

## Features

1. **Home Page**:
   - Displays a carousel of banners with a search bar.
   - Shows a list of popular destinations with an "Explore" button.

2. **Customize Page**:
   - Multi-step form for customizing trips:
     - Select the number of days.
     - Choose who is traveling (solo, couple, family).
     - Configure room options.
     - Display a confirmation message.

3. **Destination Page**:
   - Displays available trips for a selected destination.
   - Includes a "Talk to an Expert" button that redirects to the contact page.

4. **Contact Page**:
   - A form for users to get in touch:
     - Name.
     - Contact Number.
     - Email.
     - Budget (dropdown).

5. **Responsive Design**:
   - Works seamlessly on both desktop and mobile devices.

6. **Modern UI**:
   - Includes hover effects, transitions, and gradients for a polished look.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For handling routing between pages.
- **CSS**: For styling the components.
- **Fetch API**: For fetching data from external APIs.

## Live Demo

Check out the live demo of the project: [React Travel Website](#) *(Replace with your deployment link)*

## Installation

1. Run the following command to install the required Node.js packages::
```bash
   npm install
```
2. Now that you have installed the dependencies, run the following command to start the React development server:
```bash
   npm start
```
3. Open the app:
```
  Visit http://localhost:3000 in your browser.
```
## Folder Structure
```
  src/
  ├── components/
  │   ├── Banner/
  │   ├── DestinationCard/
  │   ├── SearchBar/
  │   ├── ItinerarySteps/
  │   ├── TripCard/
  │   ├── ContactForm/
  │   ├── Home/
  │   ├── Customize/
  │   ├── Destination/
  │   ├── Contact/
  │   └── App.js
  ├── App.css
  └── index.js
```
## APIs Used

### Banners API
**Endpoint:**  
`https://json-data-1wm2.onrender.com/banners`

**Description:**  
Returns a list of banners for the carousel.

---

### Destinations API
**Endpoint:**  
`https://json-data-1wm2.onrender.com/featured-destination`

**Description:**  
Returns a list of popular destinations.

---

### Trips API
**Endpoint:**  
`https://json-data-1wm2.onrender.com/destination/[handle]`

**Description:**  
Returns a list of trips for a specific destination.

---

## How It Works

### Home Page
- Fetches banners and destinations from the APIs.
- Displays a carousel of banners and a list of destination cards.
- Clicking "Explore" on a destination card redirects to the destination page.

### Customize Page
- A multi-step form allows users to customize their trip.
- After completing the form, the user is redirected to the home page.

### Destination Page
- Fetches trips for the selected destination.
- Displays trip details and a "Talk to an Expert" button.

### Contact Page
- A form for users to get in touch.
- After submission, the user is redirected to the home page.




