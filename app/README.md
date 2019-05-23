## setup
### install 
`yarn install`

### dotenv
create `.env` file in root containing:
```
NMD_BASELINE='Like Graphics Love Code'  
NODE_ENV={your node environment} (Development, Production or Staging)  
NODE_SERVER_HOSTNAME={your ip-addres or domainname} (ex.: 127.0.0.1, 192.168.0.6)  
NODE_SERVER_PORT={your port for the server} (ex.: 8080)  
MONGODB_CONNECTION={your mongodb connection string}
SKIP_PREFLIGHT_CHECK=true
AUTH_BCRYPT_SALT={your salt value for passwords} (ex.: 10) 
AUTH_JWT_SECRET={your JWT secret} (ex.: gdm_nmd_mobdev2) 
AUTH_JWT_SESSION={your JWT session true or false} 
AUTH_FACEBOOK_CLIENT_ID={your Facebook Client id} 
AUTH_FACEBOOK_CLIENT_SECRET={your Facebook Client secret} 
```
create `.env` file in `src/client` containing:
```
SKIP_PREFLIGHT_CHECK=true
SASS_PATH=node_modules:src
```
## scripts

### run for development
run server (express)
`yarn server:start`
run web client (react)
`yarn client:start`
run native client (react-native)
`yarn native-client:start`
run server & web client
`yarn start:all`

## testing/linting
run tests for server
`yarn server:test`
linting for server
`yarn server:lint`
run tests web client
`yarn client:test`

## building
client must be built to visit default route: `http://{your domain}:{your port}/` (yarn client build)
creates `src/client/build` dir & copies it to `dist\client` dir (root folder).

build web client - creates
`yarn client:build`
___
## api
### docs
- [Swagger Ui for Express](http://{your domain}:{your port]/api/v1/docs/)
- [ReDoc](http://{your domain}:{your port]/docs/)
### urls
- Public
  - Home: http://{your domain}:{your port]
  - News: http://{your domain}:{your port]/news
  - Post Detail: http://{your domain}:{your port]/news/{post id}
- Admin
  - Home: http://{your domain}:{your port]/admin
  - Blog List: http://{your domain}:{your port]/admin/blogs
  - Blog Create: http://{your domain}:{your port]/admin/blogs/create
  - Blog Edit: http://{your domain}:{your port]/admin/blogs/{blog id}/edit
  - Categories List: http://{your domain}:{your port]/admin/categories
  - Category Create: http://{your domain}:{your port]/admin/categories/create
  - Category Edit: http://{your domain}:{your port]/admin/categories/{category id}/edit
  - Posts List: http://{your domain}:{your port]/admin/posts
  - Post Create: http://{your domain}:{your port]/admin/posts/create
  - Post Edit: http://{your domain}:{your port]/admin/posts/{post id}/edit
