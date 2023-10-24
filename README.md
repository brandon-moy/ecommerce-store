# eCommerce Store

A front end eCommerce store that utilizing product information/data from the admin dashboard to populate the content.

## 🤔 Why I built this?

I have some interest in eCommerce and online store so I wanted to try to build one. Instead of creating one where users can post their own items as a marketplace, I wanted this to be more like a singular shop that allows a user to control it via an external hub that also includes analytics. This is the front-end side of the shop and the admin dashbaord can be visited <a href="https://github.com/brandon-moy/ecommerce-admin">here</a>

## 🔗 Live Example

Try out the application live <a href="https://github.com/brandon-moy/ecommerce-store">here</a>!

## 💻 Technologies Used

- Axios
- JavaScript
- JSX
- Lucide React
- Next13
- React
- TailwindCSS
- TypeScript
- Zustand

## Features

- Users can view a list of featured items
- Users can expand to see a modal with product information
- Users can click a product to view the product details
- Users can view similar products on the product page
- Users can view products by category
- Users can add to cart
- Users can remove items from cart
- Users can checkout via Stripe

## Preview

## Getting Started

Things you will need:

- The <a href="https://github.com/brandon-moy/ecommerce-admin">eCommerce-Admin</a> application set up and running

1. Clone the repository

```
git clone https://github.com/brandon-moy/ecommerce-store.git
```

2. Install dependencies with Node Package Manager

```
npm install
```

3. Copy the .env files from the .env.example in the root

```
cp .env.example .env
```

4. Update the .env values

After you create a new store, copy the url listed in eCommerce Admin dashboard with the storeId and use that to update `NEXT_PUBLIC_API_URL`.

If in development, the url should look like `http://localhost:3000/api/{storeId}`

5. Start up the development server

```
npm run dev
```

6. Open the project in the browser at localhost:3001! (This should be 3001 because you need to be running the ecommerce-admin which should be running on :3000)
