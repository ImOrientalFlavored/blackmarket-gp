import { Permission } from "@prisma/client";

const permissions : Partial<Permission>[]=[
    {   
        id:1,
        resource: "basic-write-access",
        accessType: "WRITE"
    },
    { 
        id:2,
        resource: "basic-read-access",
        accessType: "READ"
    },
    {   
        id:3,
        resource: "basic-update-access",
        accessType: "UPDATE"
    },
    {   
        id:4,
        resource: "basic-delete-access",
        accessType: "DELETE"
    },
    {
        id:5,
        resource: "premium-write-access",
        accessType: "WRITE"
    },
    {
        id:6,
        resource: "premium-read-access",
        accessType: "READ"
    },
    {
        id:7,
        resource: "premium-update-access",
        accessType: "UPDATE"
    },
    {
        id:8,
        resource: "premium-delete-access",
        accessType: "DELETE"
    },
]

export default permissions