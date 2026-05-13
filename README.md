# SkyMart v2 🛒⚡

A full-featured e-commerce app with Auth, Protected Routes, Redux Toolkit, TanStack Query & FakeStoreAPI.

---

## 🚀 Setup (3 commands)

```bash
npm install
npm run dev
# Open: http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── main.jsx                 # Providers: Redux + TanStack Query + Router
├── App.jsx                  # All routes defined here
├── index.css                # Tailwind + custom design system
│
├── store/
│   ├── store.js             # Redux store
│   ├── authSlice.js         # Register / Login / Logout (localStorage)
│   └── cartSlice.js         # Cart: add/remove/increment/decrement + persist
│
├── hooks/
│   └── useProducts.js       # TanStack Query: products, product, categories
│
├── routes/
│   └── ProtectedRoute.jsx   # <ProtectedRoute> & <GuestRoute> components
│
├── components/
│   ├── Layout.jsx           # Navbar + footer wrapper
│   ├── Navbar.jsx           # Sticky nav with links, user badge, cart, logout
│   ├── CartDrawer.jsx       # Slide-in cart panel
│   ├── ProductCard.jsx      # Product grid card
│   └── ProductSkeleton.jsx  # Loading skeleton
│
└── pages/
    ├── LoginPage.jsx        # Auth: login form
    ├── RegisterPage.jsx     # Auth: register with pw strength
    ├── HomePage.jsx         # Dashboard: stats, categories, top-rated
    ├── ProductsPage.jsx     # Shop: search + filter + sort + grid
    ├── ProductDetailPage.jsx # Full product: qty controls, related products
    └── AboutPage.jsx        # Info page: team, values, stats
```

---

## ✨ Features

### Auth
- Register (name, email, password) — saved to localStorage
- Login with validation
- Logout clears session
- Protected routes — unauthenticated users → /login
- Guest routes — logged-in users can't visit /login or /register

### Products (FakeStoreAPI)
- All 20 products with TanStack Query (10 min cache)
- Search by title/description/category
- Filter by category
- Sort: Featured / Price asc-desc / Rating asc-desc
- Active filter chips with individual clear buttons

### Cart (Redux Toolkit)
- Add / Remove products
- Increment / Decrement quantity (+ - buttons)
- Persist in localStorage across refreshes
- Cart count badge on navbar
- Slide-in drawer with checkout (demo)

### Pages
- `/login`         Guest-only login
- `/register`      Guest-only register  
- `/home`          Protected dashboard with stats + quick lists
- `/products`      Protected full shop page
- `/products/:id`  Protected product detail with related items
- `/about`         Protected about page

---

## 🔌 API Used

**FakeStoreAPI** (`https://fakestoreapi.com`)
- `GET /products`              — All products
- `GET /products/:id`          — Single product
- `GET /products/categories`   — Categories list
