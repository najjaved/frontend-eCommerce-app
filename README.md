# Ethical Origins, an eCommerce Admin Dashboard

## [See the App!](https://ethicalorigins.netlify.app/)

![App Logo](/src/assets/images/ethicalorigins.png)

## Description

This application is designed to help administrators manage products and inventory in their online stores. The dashboard provides features for viewing, adding, editing, and deleting products, as well as managing the shopping cart.

## User Stories

We have one user that can behave like an admin or a regular buyer - which will be changed in the future (see Backlog):

- **Not Found** - As a user I can see a 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **Homepage** - As a user I'm able to access the homepage so that I see what the app is about
- **Product List** - As a user I can see all the products available so that I can choose from buy, edit, or remove
- **Create Product** - As a user I can create a product so that I can invite others to attend
- **Edit Product** - As a user I can edit a product so that I can update image, title, descirption, price, discount, anything.
- **Delete Product** - As a user I can delete a product.
- **Add Product to Cart** - As a user I can add a product to my cart & go through a mock payment flow.

## Backlog Functionalities

User Authentication

- Login or Sign Up
- Admin Login
- Different flows for buyers / admin

On each category page there should be an add Product to this category option

## Technologies used

JavaScript,
React,
Mantine,

## (Optional) Routes

List here all the routes of your server.

- GET /
  - renders the homepage
- GET /products
  - renders the product list + the create form
- POST /products/newProducts

  - body:
    - name
    - description
    - image
    - price
    - stock
    - discount

- PUT /products/edit/:productId

  - body:
    - name
    - description
    - image
    - price
    - stock
    - discount

- DELETE /products/:productId
  - delete from database

## Models

List here all the models & Schemas of your Database Structure. Example:

Products model

```

id : integer number
catergory : string
name: string
description: string
price: float number
discount: float number
stock: integer number
images: array

```

Users model

```
id: integer number
username: string
password: string
email: email
address: string
phone: number
role: string

```

Orders model

```
id: number
userId: number
orderDate: date
status: string
totalAmount: float number


```

## Links

## Collaborators

[Najma](https://github.com/najjaved)

[Maria](https://github.com/mariamagneu)

### Project

[Repository Link](https://github.com/najjaved/frontend-eCommerce-app)

[Deploy Link](https://ethicalorigins.netlify.app/)

### Trello

[Our trello board](https://trello.com/b/fE2fOZPU/e-commerce-app-planning)

### Slides

[Our Slides](https://www.canva.com/design/DAGKquR7kEw/F0x8rET9D9_RICg021vBww/edit?utm_content=DAGKquR7kEw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

```

```
