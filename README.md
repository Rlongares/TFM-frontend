# TFM-frontend

This project is being developed by me as part of my TFM project with the objective of providing an interface to interact with the [TFM-API-express](https://github.com/Rlongares/TFM-API-express) pod in order to answer to Right of Access petitions.

It is important that the authentication is done also on the API, as explained in its readme.

In case the port is changed on the API, it must be changed in the code of this application, in the uri variable inside pages/index.jsx in order to make the query to the correct address.

The port can be changed by changing the parameter of the listen function inside the server.js file.

# Libraries used
react <br>
@inrupt/solid-ui-react <br>
@inrupt/prism-react-components <br>
axios <br>
react-dropdown-tree-select <br>
@coreui/react <br>
react-query <br>
react-query/devtools

@coreui/react <br>
@coreui/coreui/dist/css/coreui.min.css <br>
@inrupt/solid-client <br>
@inrupt/solid-client-authn-browser <br>
bootstrap/dist/css/bootstrap.min.css

# Getting started


1. Clone the repo.
2. Run the development server:

   ```bash
    npm ci && npm run dev
    # or
    yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.
