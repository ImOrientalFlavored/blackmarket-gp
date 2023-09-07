import { Role } from "@prisma/client";

const roles: Partial<Role>[]= [
    {
        name: "BASIC"
    },
    {
        name: "PREMIUM"
    },
    {
        name: "SELLER"
    },
    {
        name: "DEV"
    },
    {
        name: "ADMIN"
    },
    
]

export default roles;