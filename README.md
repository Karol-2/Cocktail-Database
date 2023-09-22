  # Cocktail Database
 Welcome to Cocktail Database, your go-to platform for cocktail enthusiasts. This full-stack application allows you to easily explore a wide array of drink recipes, ingredients, leave comments, and rate drinks. Crafted using JavaScript, MongoDB, React, SCSS, and Bootstrap, it also features a comprehensive admin panel for drink, comment, and user account management, all secured with Keycloak. Everything runs seamlessly on Dockerfile Compose for a hassle-free experience. Cheers to discovering new cocktails and sharing your mixology journey with us!
 
  # Features
 1. **Search for Drink Recipes:** Users can easily search for drink recipes using keywords, making it convenient to find their favorite drinks or discover new ones.
 2. **View Drink Details:** Get detailed information about drinks, including ingredients and step-by-step recipe instructions.
 3. **Leave Comments:** Engage with the community by leaving comments on drink pages. Share your thoughts, tips, or variations of the recipes with fellow users.
 4. **Rate Drinks:** Express your appreciation for a delicious drink by rating it using our 5-star rating system.
 5. **Containerized Deployment:** This application runs on Docker containers, ensuring a seamless and consistent deployment environment.
 6. **Secure Frontend:** The frontend is equipped with security measures to safeguard user data and application integrity.
 7. **Separate Administrator Panel:** Our frontend includes a dedicated administrator panel, allowing administrators to manage the application efficiently.
 8. **PKCE (Proof Key for Code Exchange):** PKCE is implemented to enhance the security of authentication flows.

# Installation
1. Clone this repository to your local machine.
     ```shell
     git clone https://github.com/Karol-2/Cocktail-Database.git
     ```
2. Enter the main folder - *Cocktail-Database*
   ```shell
     cd Cocktail-Database
     ```
3. Run docker compose command.
   ```shell
     docker compose up
     ```
4. Keycloak configuration will be added to the volume automatically.
5. The app is available at [localhost:3000](http://localhost:3000/)

# Accounts
There are two user accounts. You can also register your accounts.

1. User account (no special access)
   - login: user
   - password: user

2. Admin account(with admin role and access)
   - login: adminuser
   - password: adminuser

# Credits
The Cocktail Database was created by Karol Krawczykiewicz.
# License
This project is licensed under the MIT License.
