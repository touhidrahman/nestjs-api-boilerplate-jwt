# NestJSApiBoilerplateJWT

An API Boilerplate to create a ready-to-use REST API in seconds with NestJS 9.x and Passport Auth JWT System :heart_eyes_cat:

- NestJS
- Prisma
- MongoDB

## Installation

```bash
   $ npm install
```

## Set Enviroment for secret key JWT and other configurations

```bash
   $ cp .env.example .env
```

To set up on multiple environments, such as dev, stage or prod, we do as follows:

```bash
   $ cp .env.example .env.dev # or .env.stage, etc
```

## Config settings .env for send notification when a user registers, forgot password or change password

```
   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT=2525
   EMAIL_AUTH_USER=[:user]
   EMAIL_AUTH_PASSWORD=[:password]
   EMAIL_DEBUG=true
   EMAIL_LOGGER=true
   EMAIL_LAYOUT_DIR='templates/emails/'
   EMAIL_PARTIAL_DIR='templates/emails/'
   EMAIL_VIEW_PATH='/templates/emails/'
   EMAIL_DEFAULT_LAYOUT='index'
```

## Running the app

```bash
    # development
    $ npm run start

    # watch mode
    $ npm run start:dev

    # production mode
    $ npm run start:prod
```

## Url Swagger for Api Documentation

```
http://127.0.0.1:3000/docs
```
or

```
http://127.0.0.1:3000/docs-json
```
or

```
http://127.0.0.1:3000/docs-yaml
```

Configure `SWAGGER_USER` and `SWAGGER_PASSWORD` in the .env file and set `NODE_ENV` to `local` or `dev`or `staging` to access the SWAGGER(Open Api) documentation with basic authentication.

```
NODE_ENV=[:enviroments]
SWAGGER_USER=[:user]
SWAGGER_PASSWORD=[:password]
```

If you want to add more environments, include them in the `SWAGGER_ENVS` array in `main.ts`, see the following:

```typescript
const SWAGGER_ENVS = ['local', 'dev', 'staging'];
```

## Configuring the NODE_API_PORT environment variable as the default port if you don't want to use the default

```
   NODE_API_PORT=3333
```


## Configuring the ENDPOINT_CORS environment variable for app frontend

```
   ENDPOINT_CORS='http://127.0.0.1:4200'
```

## Getting secure resource with Curl

```bash
    $ curl -H 'content-type: application/json' -v -X GET http://127.0.0.1:3000/api/secure  -H 'Authorization: Bearer [:token]'
```

## Generate Token JWT Authentication with Curl

```bash
   $ curl -H 'content-type: application/json' -v -X POST -d '{"email": "tony_admin@nest.it", "password": "secret"}' http://127.0.0.1:3000/api/auth/login

```

## Registration user with Curl

```bash
   $ curl -H 'content-type: application/json' -v -X POST -d '{"name": "tony", "email": "tony_admin@nest.it", "username":"tony_admin", "password": "secret"}' http://127.0.0.1:3000/api/auth/register

```

## Forgot password with curl

```bash
   $ curl -H 'content-type: application/json' -v -X POST -d '{"email": "tony_admin@nest.it"}' http://127.0.0.1:3000/api/auth/forgot-password
```

## Change password User with curl

```bash
   $ curl -H 'content-type: application/json' -v -X POST -d '{"email": "tony_admin@nest.it", "password": "secret123"}' http://127.0.0.1:3000/api/auth/change-password  -H 'Authorization: Bearer [:token]'
```

## Update profile User with curl

```bash
   $ curl -H 'content-type: application/json' -v -X PUT -d '{"name": "tony", "email": "tony_admin@nest.it", "username": "tony_admin"}' http://127.0.0.1:3000/api/users/:id/profile  -H 'Authorization: Bearer [:token]'
```

## Users list with Curl

```bash
   $ curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X GET http://127.0.0.1:3000/api/users  -H 'Authorization: Bearer [:token]'
```

## User by Id with Curl

```bash
   $ curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X GET http://127.0.0.1:3000/api/users/:id  -H 'Authorization: Bearer [:token]'
```

## Update User with Curl

```bash
   $ curl -H 'content-type: application/json' -v -X PATCH -d '{"name": "tony", "email": "tony_admin@nest.it", "username": "tony_admin", "password":"secret"}' http://127.0.0.1:3000/api/users/:id  -H 'Authorization: Bearer [:token]'
```

## Delete User by Id with Curl

```bash
   $ curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X DELETE http://127.0.0.1:3000/api/users/:id  -H 'Authorization: Bearer [:token]'
```