# HCG P-Seminar Oper 2021-23 🎭

![](https://img.shields.io/badge/Discord-7289DA?style=flat&logo=discord&logoColor=white&link=https://discord.gg/5eX3tJGZ)
![](https://img.shields.io/badge/license-MIT-blue)
![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![](https://badgen.net/github/last-commit/CarossaOper/hcgoper)
![](https://badgen.net/github/release/CarossaOper/hcgoper)
---
## Installation
Clone the repo and download the latest packages
```
git clone https://github.com/CarossaOper/hcgoper
cd hcgoper
```

## 🚀 Without Docker
### 📓 Development

```
npm install

npm run serve
```
> This won't start the backend server

### 💻 Production

```
npm run build
```
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
## 🐳 Docker

Configure the `Dockerfile` to your suit needs
```
ENV DB_STRING=<YOUR DB CONNECTION>
ENV PORT=<YOUR PORT>
```

Build the docker image (currently `dev`)

```
docker build -t hcgoper/oper:dev .
```

Run docker container and expose ports (in this case 80)

```
docker run -d -p 80:80 hcgoper/oper:dev
```

### Backend API-Routes (`server/api/api.js`)

#### Retrieve all blog entries from the server (as an RSS Feed)

```GET /api/blog```

#### Retrieve a certain blog post
```GET /api/post/:postid```

#### Add a new email to the newsletter

```POST /api/newsletter```

#### Remove email from newsletter

```DELETE /api/newsletter```

### ✔️ TODO

- [x] Base structure and page system
- [x] Backend server and database
- [x] Dynamically loading blogs (frontend with axios https requests)
- [ ] Newsletter insert/delete new email
- [ ] Newsletter SMTP Mailer
- [ ] Scrolling to element support on main page
- [ ] Back to top button on long pages (bottom right corner)
- [ ] *OPTIONAL* Blog management system (admin page or client control panel)


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).