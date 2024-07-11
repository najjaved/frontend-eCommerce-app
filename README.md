# Ethical Origins, an eCommerce Admin Dashboard

## [See the App!](https://ethicalorigins.netlify.app/)

![App Logo]("/src/assets/images/ethicalorigins.png")

## Description

**NOTE -** This application is designed to help administrators manage products and inventory in their online stores. The dashboard provides features for viewing, adding, editing, and deleting products, as well as managing the shopping cart.

## User Stories

**NOTE -** The User with some Admin powers can:

- **404** - As a user I can to see a 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **homepage** - As a user I'm able to access the homepage so that I see what the app is about and login and signup
- **events list** - As a user I can see all the products available so that I can choose which ones I want to attend
- **events create** - As a user I can create a product so that I can invite others to attend
- **events edjt** - As a user I can edit a product so that I can update anything, image, title, descirption, price, discount, anything.

## Backlog Functionalities

**NOTE -** User Authentication
**NOTE -** different flow for just buyer
**NOTE -** stripe integration

## Technologies used

**NOTE -**

JavaScript,
React,
mantine,

## (Optional) Routes

**NOTE -** List here all the routes of your server. Example:

- GET /
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login

  - redirects to / if user logged in
  - body:
    - username
    - password

- GET /events
  - renders the event list + the create form
- POST /events/create
  - redirects to / if user is anonymous
  - body:
    - name
    - date
    - location
    - description

## Models

**NOTE -** List here all the models & Schemas of your Database Structure. Example:

User model

```
username: String
password: String
```

Event model

```
owner: ObjectId<User>
name: String
description: String
date: Date
```

## Links

## Collaborators

[Developer 1 name](www.github-url.com)

[Developer 2 name](www.github-url.com)

### Project

[Repository Link](www.your-github-url-here.com)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)
