### `npm install`
This command will install all the necessary dependencies required for the project to run. It will create a node_modules folder in your project directory containing all the packages listed in the package.json file.

In this project, we're using JSON Server to mock API endpoints for CRUD operations.

To start JSON Server,go to cd **src/data** run the following command:
### `json-server --watch db.json --port 5000`

### `npm start`
This command will start the development server and open the landing page in your default web browser. You can view the landing page by navigating to http://localhost:3000 in your browser.
You can also open in different port if :3000 already in use,by using this command `npm start --port <port>`.

