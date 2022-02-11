# HCG P-Seminar Oper 2021-23 🎭
## Frontend
![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![](https://badgen.net/github/last-commit/CarossaOper/hcgoper)
![](https://badgen.net/github/release/CarossaOper/hcgoper)
---

## Installation
Clone the repo and download the latest packages
```
git clone https://github.com/CarossaOper/oper-frontend
cd oper-frontend
```

## 💻 Without Docker
### 📓 Development

Serve application using **vue-cli**:
```
npm install

npm run serve
```
or the custom server:
```
npm run build

node serve.js
```

> This won't start the backend server

## 🐳 Docker

Build the docker image

```
docker build -t oper-frontent:latest .
```

Run docker container and expose ports (in this case 80)

```
docker run -d -p 80:80 oper-frontend:latest
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).