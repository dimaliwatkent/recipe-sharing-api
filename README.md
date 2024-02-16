# Recipe Sharing API Documentation

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Request Body for POST and PUT](#request-body-for-post-and-put)
- [Team Members](#team-members)

## Introduction

Welcome to the Recipe Sharing API documentation. This API provides endpoints for managing a collection of recipes, including CRUD operations (Create, Read, Update, Delete), and fetching recipes by their IDs.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have Node.js and npm installed on your machine.
- You have a MongoDB instance running, or a cloud-based MongoDB service configured.
- You have a `.env` file set up with the correct environment variables (PORT, DATABASE_URL).

## Installation

To install the Recipe Sharing API, follow these steps:

1. Clone the repository to your local machine.
   - `git clone https://github.com/dimaliwatkent/recipe-sharing-api.git`
2. Run `npm install` to install all the necessary dependencies.
3. Rename the `.env.example` to `.env`.
4. Configure your `.env` file with the correct database URL from MongoDB and desired port.
5. Start the server with `npm run dev`.

## Usage

Once the server is running, you can interact with the API using HTTP requests. The base URL for all endpoints is `/api/recipes`.

### Endpoints

- **GET** `/api/recipes`: Retrieve all recipes.
- **POST** `/api/recipes`: Create a new recipe.
- **GET** `/api/recipes/:id`: Get a recipe by its ID.
- **PUT** `/api/recipes/:id`: Update a recipe by its ID.
- **DELETE** `/api/recipes/:id`: Delete a recipe by its ID.

### Request Body for POST and PUT

When creating or updating a recipe, the request body should match the following schema:

```json
{
  "title": "string",
  "ingredients": ["string"],
  "instructions": "string",
  "tags": ["Breakfast", "Lunch", "Dinner", "Dessert"]
}
```

### Example

![Querying the Server](/docs/postman-sample.png)

## Team Members

- **Kent Diether Dimaliwat**: Lead Maintainer
- **Zedrick Ragas**: Server Engineer
- **Vanessa Octa**: Documentation Specialist
- **Vienna Piguerra**: Database Administrator
