# InventoryFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.
This is an inventory management application that allows you to create, search, list and update products. The app is built with Angular on the frontend and NestJS on the backend.

## Requirements

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Angular CLI (version 12 or higher)
- NestJS CLI (version 7 or higher)

## Installation

### Clone the repository

```bash
git clone https://github.com/santioso/inventory-management-front.git
cd inventory-management
``` 

### Backend Setup
Navigate to the backend directory:

cd backend

### Install dependencies:

npm install

Start the backend server:
npm run start

The backend server should be running at http://localhost:3000.

Frontend Setup

## Frontend Setup
Navigate to the frontend directory:

Install dependencies:
npm install

Start the Angular development server:
ng serve

The frontend server should be running at http://localhost:4200.

## Usage

### Create Product
Navigate to http://localhost:4200/products.
Enter the product details in the creation form.
Click on "Create Product".

### Search Product
Navigate to http://localhost:4200/products.
Enter the product name in the search field.
Click on "Search".

### List Products
Navigate to http://localhost:4200/products.
The list of products will be displayed in a table.

### Update Product Quantity
Navigate to http://localhost:4200/products.
Enter the quantity in the "Update quantity" field.
Click on "Entry" to increase the quantity or "Exit" to decrease the quantity.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

