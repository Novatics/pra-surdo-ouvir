## Pra surdo ouvir

Project with the object to provide live transcription using Google Speech for any provided live stream of audio.

### Requirements

• Node 10;

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

### How to run

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```
