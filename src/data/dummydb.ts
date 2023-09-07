import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import current from "../utils/date/date";

const decimal = (x : unknown) => {return x as Decimal}

const products:Partial<Product>[] = [
        {     
            id: 0,        
            productName: "Big Badda Boom",       
            productDesc: "Your target is hiding on a planet? No problem. Just, Blow the whole thing up", 
            shortDesc:"",
            grade:"F",
            price: decimal(100000000000),      
            imageUrl: "Big-Badda-Boom.png",
            sku:"X509k840",      
            categoryId: 100,
            createdAt: current,  
         },
         {      
            id: 1,       
            productName: "Galaxy Sizzler",      
            productDesc: "Cook a whole galaxy and enjoy a buffet in mere hours",
            grade:"C",
            price: decimal(8000000000000),     
            imageUrl: "string",
            sku:"S29k4Y0",          
            categoryId:200, 
            createdAt: current,  
         },
         {      
            id: 2,         
            productName: 'Quantum Space Destructor XS',        
            price: decimal(5000000000),
            grade:"O",    
            productDesc: 'Destroy the Space-Time Continuum at the Quantum Level. This minified versions affect range is shy of 100km', 
            imageUrl: "string",      
            sku:"X834VW6T0",          
            categoryId: 100,  
            createdAt: current,   
         },
    ] 

export default products