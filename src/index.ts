import 'dotenv/config'
//import '../supabase/supabase'

import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express/';
import swaggerJSDoc from 'swagger-jsdoc/';

import v1Router from './back_api/v1';
import v2Router from './back_api/v2';
import { authenticateLogin } from 'middleware/authenticateLogin.middleware';


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
app.use(cors({origin:'*'}));
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
  //For accessing request body
app.use(express.urlencoded({extended: true }))

//Routes
app.use('/api/v1', v1Router)
app.use('/api/v2', v2Router)
app.use('/auth', authenticateLogin)
app.post('/refresh',(req:Request, res:Response) => {
  const cookies = req.headers
  console.log(cookies);
  res.send(cookies);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
})

