# React E-Commerce App

A modern, responsive e-commerce website built using **React**, **TypeScript**, and **Vite**.  
This project includes product listing, category filtering, cart functionality, and is fully tested with **Jest** and **React Testing Library**.  
It also features a full **CI/CD pipeline** using GitHub Actions, and is automatically deployed to **Vercel**.

---

##  Live Demo

 [View the Live Site](when i have vercel link add here )  


---

##  Tech Stack

- **React** + **TypeScript**
- **Vite** for build tooling
- **React Context API** for global state
- **React Query** for API data fetching
- **Jest** & **React Testing Library** for testing
- **GitHub Actions** for CI/CD
- **Vercel** for hosting

---

##  Testing Overview

This project uses **Test-Driven Development (TDD)** principles.

###  Unit Tests
- `ProductCard.test.tsx`: Verifies product title and price are rendered.
- `Home.test.tsx`:  Confirms category dropdown and filter rendering.

### Integration Test
- `Cart.integration.test.tsx`: Simulates adding a product to the cart and verifies the cart UI updates.

Run tests locally with:

```bash
npm test
