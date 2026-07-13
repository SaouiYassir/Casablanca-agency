# Casablanca Location

Modern car-rental website template for a Casablanca agency. Customers can search the fleet, filter vehicles, prepare a booking request and continue through WhatsApp.

## Live demo

[location-projet.vercel.app](https://location-projet.vercel.app/)

## Main features

- Responsive React and Vite interface
- Search, category, fuel and price filters
- Booking dates transferred from the homepage to the catalogue
- Accessible WhatsApp booking modal with validation
- Central agency configuration in `src/Config/Agency.js`
- Legal, privacy and 404 routes
- Page metadata, canonical URLs, sitemap, robots and `AutoRental` structured data
- EmailJS contact form configured through environment variables

## Installation

```bash
git clone --branch redesign-system https://github.com/SaouiYassir/Location-Projet.git
cd Location-Projet
npm install
cp .env.example .env
npm run dev
```

Configure the EmailJS values in `.env` if the contact form will be enabled.

## Commands

```bash
npm run dev      # Development server
npm run lint     # ESLint checks
npm run build    # Production build
npm run preview  # Preview the production build
npm run check    # Lint and build
```

## Client configuration

Before delivery, update:

1. Agency contact, address, social and legal details in `src/Config/Agency.js`.
2. Vehicle data and verified vehicle photos in `src/Data/Catalogue.js`.
3. EmailJS identifiers in `.env` and allowed-domain settings in EmailJS.
4. Production domain references in `Agency.js`, `index.html`, `robots.txt` and `sitemap.xml`.
5. Legal text after review for the agency’s actual operation and contracts.

## Deployment

The included `vercel.json` sends application routes to `index.html`, allowing React Router routes to work when opened directly on Vercel.
