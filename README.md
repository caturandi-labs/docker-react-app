## Install React-App

```
docker run --rm --user $(id -u):$(id -g) -v ${PWD}/react:/app -w /app node:16.13.2-alpine3.15 /bin/sh -c "npx create-react-app ."
```

## How to Install npm package

```
docker run --rm --user $(id -u):$(id -g) -v ${PWD}/react:/app -w /app node:16.13.2-alpine3.15 /bin/sh -c "npm install {package_name}"
```

## Run React Apps

1. `docker-compose up --build -d`
2. Open `http://localhost:3000` in browser