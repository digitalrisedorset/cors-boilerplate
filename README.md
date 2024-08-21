## This repository shows how to setup a safe cors setup between both frontend and backend environments
2 separate environments are created in this repository.

The backend exposes a unique API end point
The frontend is a Vite Typescript environment calling the unique end point

## test the cors setup
the backend file src/config.ts is  set with the frontend url and this url is allowed in the `corsOptions` (see src/index.ts)
--> the frontend button calls the backend successfully with default settings if both environments run 

## test cors prevents unwanted external system to consume the backend API end point
change the config.ts to another url, and restart the backend
--> the frontend button returns an error 
