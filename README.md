Introduction: 

This is the api backend for dashtar product service built with node.js, express, mongoose, and mongodb for database. 


Running the project:

    ⦁	First npm install for install all packages latest version.
    ⦁	npm run start:dev for run in development mode.
    ⦁	npm run data:import for manually import all data into the database, this will run seed.js file and all sample data in utils file will imported to the database.


Folder Structure & Customization:

⦁   In index.js file has all declared api endpoint for different route.

⦁   In seed.js file has all created model for manually imported into database.

⦁   /models: This folder contain all model create with mongoose schema validation.

⦁   /routes: This folder contain all route like category, product, coupon, route. 

⦁  /controller: This folder contain all different route controller function.

⦁  /utils : This folder contain product, category, attribute and coupons sample data.
