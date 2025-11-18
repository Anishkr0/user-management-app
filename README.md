# User Management App (React + Tailwind CSS)

This is a User Management application built with **React**, **React Router**, and **Tailwind CSS**.  
The app uses the **JSONPlaceholder API** to simulate user management operations such as:

- Fetching users
- Creating a user
- Updating a user
- Deleting a user

It was developed as part of a frontend internship assignment.

---

## 🔗 Live Demo

Hosted on Netlify: https://sensational-manatee-072cab.netlify.app/
---

## 📦 GitHub Repository
Link:-https://github.com/Anishkr0/user-management-app
---

## 🚀 Features

- Fetch and display users from API
- View user details on a separate page
- Create new user (simulated with JSONPlaceholder `POST`)
- Edit existing user (simulated with `PUT`)
- Delete user (simulated with `DELETE`)
- Smooth UI built with Tailwind CSS
- Responsive layout (works on desktop and mobile)
- Error handling with user-friendly messages
- Loading state while fetching data
- Clean and structured code using:
  - `components/`
  - `views/`
  - `services/`
  - `hooks/`
  - `styles/`

---

# Tech Stack

- **React**
- **React Router**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **JSONPlaceholder API**
- Deployed on **Netlify**
- Source control with **GitHub**

---

## 🧱 Project Structure

```bash
src/
  api/           # (if any API helpers)
  components/    # Reusable UI components (Header, Layout, etc.)
  hooks/         # Custom hooks (for users)
  services/      # API calls (usersApi.js)
  styles/        # Tailwind-for better UI
  views/         # Pages (Home, UserDetail)
  App.js         # Main routes
  index.js       # React entry
