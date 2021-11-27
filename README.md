# HCG P-Seminar Oper 2021-23 🎭

![](https://img.shields.io/badge/Discord-7289DA?style=flat&logo=discord&logoColor=white&link=https://discord.gg/5eX3tJGZ)
![](https://img.shields.io/badge/license-MIT-blue)
---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

#### Running the production server and backend

Setup the connection properties by modifying the `.env` file in the server directory

```
PORT=PORT_FOR_PAGE

DB_STRING=CONNECTION_STRING_TO_MONGODB
```

Starting the server:

```
# Windows
node server.js

# Linux
sudo node server.js
```

### Backend API-Routes (`server/api/api.js`)

```
GET /api/blog
```
Retrieve all blog entries from the server

```
POST /api/newsletter

{
    email: test@test.com
}
```
Add a new email to the newsletter

```DELETE /api/newsletter

{
    email: test@test.com
}
```
Remove email from newsletter

##### ToDo:

[ ] Backend server and database
[ ] Dynamically loading blogs (frontend with axios https requests)
[ ] Newsletter SMTP Mailer


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).