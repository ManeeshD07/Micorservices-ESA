# E-commerce microservice api

An e-commerce microservice api which has the following features:
1.  Get list of available products
2.  Get products in a users cart
3.  Put products in a users cart

### Pre-requisites
> System packages: nodejs, npm
> npm packages: express, request, body-parser

## Installation :

1.  Clone into the working repository
    > git clone https://github.com/ManeeshD07/Micorservices-ESA.git

2.  Install the necessary npm packages and dependencies
    > npm install express request body-parser --save 

## Running the build :

1.  To start the server run :
    > node server.js

2.  On the client side you can choose out of three possible test cases:
    -   Product Microservice :
        1.  Retrieve product list:
        > http://localhost:3000/rest/v1/products

    -   User Cart Microservice :
        1.  Add/update cart items :
        > PUT /rest/v1/users/\<uuid\>/cart  
        Host: http://localhost:3000  
        Content-type: application/json  
        {  
            "productId":"\<product id number\>",  
            "quantity":"\<number of items\>"  
        }  
        
        For curl users:
        > curl -X PUT http://localhost:3000/rest/v1/users/\<uuid\>/cart -H "Content-type: application/json" -d '{"productId":"\<product id number\>","quantity":"\<number of items\>"}'

        2. Get cart items :
        > http://localhost:42069/rest/v1/users/\<uuid\>/cart
