Here's a comprehensive assignment document that covers all the necessary details for your students to develop the Next.js recipe website. This document will guide them step-by-step, including cloning the repository, setting up API endpoints, creating pages, and more.

---

# **Next.js Recipe Website Assignment**

## **Assignment Overview**

In this assignment, you will work in groups to develop a recipe website using Next.js. You will be provided with API endpoints to fetch recipe data and will need to create pages that display these recipes in a user-friendly manner. This assignment will help you gain hands-on experience with building a web application, using API endpoints, and creating dynamic pages in Next.js.

### **Deadline: 2 Weeks**

---

## **1. Project Setup**

### **1.1. Clone the Repository**

Each group member should clone the provided GitHub repository to their local machine.

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL provided by your instructor.

### **1.2. Install Dependencies**

Navigate to the project directory and install the necessary dependencies.

```bash
cd your-nextjs-project
npm install
```

### **1.3. Start the Development Server**

To start the development server, run the following command:

```bash
npm run dev
```

This will start the server at `http://localhost:3000`. You can now view the project in your browser.

---

## **2. API Endpoints**

You will be using the following API endpoints to fetch data from the `recipes.json` file. 

### **2.1. Available Endpoints**

1. **Get All Recipes**  
   - **Endpoint:** `GET /api/recipes`
   - **Example:** `http://localhost:3000/api/recipes`
   - **Description:** Fetches a list of all recipes.

2. **Get Recipe by ID**  
   - **Endpoint:** `GET /api/recipes/[id]`
   - **Example:** `http://localhost:3000/api/recipes/1`
   - **Description:** Fetches a specific recipe by ID.

3. **Get a Random Recipe**  
   - **Endpoint:** `GET /api/recipes/random`
   - **Example:** `http://localhost:3000/api/recipes/random`
   - **Description:** Fetches a random recipe.

4. **Search Recipes**  
   - **Endpoint:** `GET /api/recipes/search?query=...`
   - **Example:** `http://localhost:3000/api/recipes/search?query=pasta`
   - **Description:** Searches recipes by title or summary based on the query parameter.

---

## **3. Development Requirements**

### **3.1. Pages to Build**

You need to create the following pages in your Next.js application:

1. **Home Page (`/`)**
   - **Content:** Display a list of all recipes with their title, image, and a brief summary.
   - **Design:** Each recipe should be displayed as a card with an image, title, and a “Read More” button that links to the recipe details page.

2. **Recipe Details Page (`/recipes/[id]`)**
   - **Content:** Display the detailed information of a recipe, including title, image, ingredients, and instructions.
   - **Design:** The page should include the recipe image, title, a list of ingredients, and step-by-step instructions.

3. **Search Results Page (`/search`)**
   - **Content:** Display search results based on the user’s input query.
   - **Design:** Similar to the home page but only shows the recipes that match the search query.

4. **Random Recipe Page (`/recipes/random`)**
   - **Content:** Display a random recipe from the list.
   - **Design:** The design can be similar to the Recipe Details Page but will display a different recipe every time the page is reloaded.

### **3.2. Image Handling**

- Download appropriate images for each recipe in the `recipes.json` file.
- Rename the images according to the `image` field specified in the `recipes.json` file. For example:
  - If the `image` field is `spaghetti_carbonara.jpg`, your image file should be named exactly `spaghetti_carbonara.jpg`.
- Save the images in the following directory:

  **Directory Path:** `public/images/recipes`

  ```
  your-nextjs-project/
  └── public/
      └── images/
          └── recipes/
              ├── spaghetti_carbonara.jpg
              ├── margherita_pizza.jpg
              └── ... (other recipe images)
  ```

### **3.3. Application Functionality**

1. **Navigation:** 
   - Add a navigation bar with links to the Home, Search, and Random Recipe pages.
   
2. **Responsive Design:**
   - The website should be fully responsive, meaning it should look good on both desktop and mobile devices.

3. **Error Handling:**
   - Implement error handling for cases such as:
     - Recipe not found (Invalid ID).
     - No results for the search query.
     - Random recipe endpoint returning an empty response.

4. **Styling:**
   - Use CSS or a CSS-in-JS library like `styled-components` to style your pages. Ensure consistent styling across all pages.

---

## **4. Submission Requirements**

1. **Code Repository:**
   - Push your code to a GitHub repository created for your group.
   - Include clear commit messages and a `README.md` file explaining how to run the project.

2. **Presentation:**
   - Prepare a short presentation (5-10 minutes) explaining your application, the pages you created, and any challenges you faced.

3. **Deployment (Optional):**
   - If possible, deploy your application using Vercel or another hosting service and provide the URL.

---

## **5. Evaluation Criteria**

- **Functionality (40%)**
  - Does the application meet all the requirements?
  - Are the API endpoints correctly integrated?

- **Design and UI (30%)**
  - Is the website visually appealing and user-friendly?
  - Is the design responsive?

- **Code Quality (20%)**
  - Is the code well-organized and commented?
  - Are best practices followed?

- **Presentation (10%)**
  - Was the presentation clear and informative?
  - Did the group effectively explain their work?

---

## **6. Additional Notes**

- If you have any questions, feel free to ask your instructor during office hours or via the communication channel provided.
- Make sure to test your application thoroughly before the submission deadline.

---

Good luck! We look forward to seeing your creative implementations.

---