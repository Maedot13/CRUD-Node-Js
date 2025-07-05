  CRUD API (Node.js + Express + MongoDB)
This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB for managing a list of products. The app is structured using MVC principles and includes clean routing and controller handling.

📁 Project Structure
bash
Copy
Edit
.
├── index.js                  # Main entry point
├── model/
│   └── product.model.js      # Mongoose product schema/model
├── controller/
│   └── Product_Controller.js # Business logic for API endpoints
├── routes/
│   └── routes.js             # Route definitions
├── package.json
└── README.md
🚀 Features
Add a new product

Retrieve all products

Retrieve a single product by ID

Update a product by ID

Delete a product by ID

📦 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/product-crud-api.git
cd product-crud-api
Install dependencies:

bash
Copy
Edit
npm install
Start MongoDB locally (default: mongodb://localhost:27017/Crud).

Run the app:

bash
Copy
Edit
node index.js
You should see:

arduino
Copy
Edit
DB conection
connected
🔗 API Endpoints
Base URL: http://localhost:3000/api/products
Method	Endpoint	Description
GET	/	Root route
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update product by ID
DELETE	/api/products/:id	Delete product by ID

🛠️ Technologies Used
Node.js

Express

MongoDB

Mongoose

📄 Sample Product JSON
json
Copy
Edit
{
  "name": "iPhone 15",
  "quantity": 10,
  "company": "Apple",
  "price": 999,
  "image": "https://example.com/image.png"
}
🧠 Notes
The image field is optional.

Validation is handled via Mongoose schema.

🧪 Testing
Use tools like Postman, Insomnia, or cURL to test the endpoints.

Example:

bash
Copy
Edit
curl -X POST http://localhost:3000/api/products \
-H "Content-Type: application/json" \
-d '{"name": "Pen", "quantity": 100, "company": "Reynolds", "price": 2.5}'
🐛 Troubleshooting
Ensure MongoDB is running locally.

If you get a 500 error, check your MongoDB connection string and data format.

Use console.log() for debugging inside controllers.

📌 License
This project is open-source and available under the MIT License.
