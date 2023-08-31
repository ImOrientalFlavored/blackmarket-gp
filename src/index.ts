import 'dotenv/config'

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express/';
import swaggerJSDoc from 'swagger-jsdoc/';

import v1Router from './api/v1';


const app = express();
const PORT = process.env.PORT || 3000;

//Swagger Definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BlackMarket-GP API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            }
        ]
    },
    apis: ['./api/v1/products/routes/*.ts', "./api/v1/*ts"],
}



//Middleware
 //For enabling local sharing
app.use(cors());
 //For logging
app.use(morgan('combined'));
 //For API documentation
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSDoc(swaggerSpec))
)  
 //For parsing json request when content-type matches type
app.use(express.json());

//Routes
app.use('/api/v1', v1Router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
})

