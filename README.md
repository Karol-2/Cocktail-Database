  <h1>Cocktail Database</h1>
  <p>Welcome to Cocktail Database - a fullstack application that lets you search for drink recipes, view ingredients, leave comments, and rate drinks. The application is built using JavaScript, MongoDB, React, SCSS, and Bootstrap, and includes a full-featured admin panel that allows you to manage drinks, comments, and user accounts. Account system is based secured by keycloak. Everything runs on dockerfile compose.</p>
  <h2>Features</h2>
  <ul>
    <li>Search for drink recipes using keywords</li>
    <li>View drink details, including ingredients and recipe instructions</li>
    <li>Leave comments on drink pages</li>
    <li>Rate drinks using a 5-star rating system</li>
    <li>Admin panel for managing drinks, comments, and user accounts</li>
  </ul>

# Installation
1. Clone this repository to your local machine:
   **git clone https://github.com/Karol-2/Cocktail-Database.git**
2. Enter main foldeer, *Cocktail-Database*
3. Run docker compose command **docker compose up**
4. Keycloak configuration will be added to volumin.
5. App is available on: *http://localhost:3000/*

# Konta
There are two user accounts. You can also register your own accounts.

1. User account (no special access)
   - login: user
   - password: user

2. Admin account(with admin role and access)
   - login: adminuser
   - password: adminuser

  <h2>Credits</h2>
  <p>Cocktail Database was created by Karol Krawczykiewicz.
  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
