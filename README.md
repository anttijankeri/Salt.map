# Salt.map

![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![image](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![image](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![image](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)
![image](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white)
![image](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
[![image](https://github.com/anttijankeri/Salt.map/actions/workflows/pages/pages-build-deployment/badge.svg)](DEPLOYED)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

Mapping app for all Salties' places of birth. Allows users to add themselves and their place of birth as a pin on a Google Map. It also shows all users who have added themselves either individually or all together on the map. This repo contains both the backend and frontend for the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Installation

Install both the backend and frontend for running locally or deploying to github pages.

```
git clone https://github.com/anttijankeri/Salt.map.git
cd Salt.map
cd frontend && npm install
cd ../backend && npm install
```

## Usage

Create .env files in both folders based on the .env.examples, but replace the values with your own variables.

**To run locally:**

```
Uncomment the VITE_REACT_APP_BACKEND=http://localhost:3000 env variable in frontend/.env and comment out the other one

Open 2 terminal windows in root

Window 1:
cd frontend && npm run dev

Window 2:
cd backend && npm run dev
```

**To deploy frontend to github pages:**

```
cd frontend && npm run deploy
```

## API

The app's backend is deployed on Railway.app.

The exact URL is `https://saltmap-production.up.railway.app/api`

The backend has several open endpoints to access data:

```
GET /users
Returns a JSON list of all users
Each user contains the name and the user's hash string

GET /maps
Returns a JSON list of all pins and their attached users
Each pin contains a latitude and longitude attribute, and a color

GET /maps/:id
id is a hash string generated based on the user's name
Returns a JSON object containing the one user's pin and data
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
