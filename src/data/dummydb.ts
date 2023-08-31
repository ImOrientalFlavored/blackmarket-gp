import Product from "../types/Product.type"

const date = new Date().toISOString();

const db = {
    products:[
        {     
            id: 0,        
            name: "Big Badda Boom",       
            price: 100000000000,      
            description: "Your target is hiding on a planet? No problem. Just, Blow the whole thing up", 
            image: "string",
            SKU:"X509k840",      
            categoryId: 100,
            rateId:{ 
              rate: 4.5,    
              count: 160982     
            },
            createdAt: date,  
            modifiedAt:"",  
            deletedAt:""  
         },
         {      
            id: 1,       
            name: "Galaxy Sizzler",      
            price: 8000000000000,     
            description: "Cook a whole galaxy and enjoy a buffet in mere hours",
            image: "string",
            SKU:"S29k4Y0",          
            categoryId:200, 
            ratingId:{     
              rate: 4.7,     
              count: 34098   
            },
            createdAt: date,  
            modifiedAt:"",  
            deletedAt:"" 
         },
         {      
            id: 2,         
            name: 'Quantum Space Destructor XS',        
            price: 5000000000,    
            description: 'Destroy the Space-Time Continuum at the Quantum Level. This minified versions affect range is shy of 100km', 
            image: "string",      
            SKU:"X834VW6T0",          
            categoryId: 100,  
            ratingId:{          
              rate: 4.2,      
              count: 24982      
            },
            createdAt: date,   
            modifiedAt:"",  
            deletedAt:""
         },
    ] 
} as {products: Product[]}

export default db