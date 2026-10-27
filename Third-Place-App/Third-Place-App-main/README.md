# Third-Place-App
Social app that helps users discover local places and connect with people in real life.

## Development Model
We are using Agile.

We will build the project in small parts instead of trying to complete everything at once. Our group will divide the work, check our progress often, test what we build, and make changes when needed.

This works well for our three-person group because everyone can work on different parts of the project while still helping each other.
## Project Scope

Our project is a social app that helps people discover places where they can spend time and connect with others in real life.

The app will focus on places such as cafes, parks, libraries, gyms, and small businesses.

### Main Goal
The goal of the app is to help people find places to go instead of spending all of their time scrolling online.

### Main Features
- Create an account and log in
- Search for places
- View nearby places
- View information about a place
- View places on a map
- Save favorite places
- Recommend places to other users
- Have a basic user profile

## Running Locally
Requires [Node.js](https://nodejs.org/) 20.19+ (or 22.12+).

```bash
npm install     # first time, and whenever package.json changes
npm run dev     # start the dev server at http://localhost:5173
npm run lint    # check code with ESLint
npm run build   # production build into dist/
```

## Project Structure
- `index.html` – page shell; React renders into `<div id="root">`
- `src/main.jsx` – entry point; sets up the router and global styles
- `src/App.jsx` – list of routes (URL → page)
- `src/components/` – shared pieces used on every page (header, layout)
- `src/pages/` – one component per page (Home, Explore, Login, Profile)
- `src/assets/` – images and icons
- `src/style.css` – site styles
