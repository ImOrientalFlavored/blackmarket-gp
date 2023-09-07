import { Permission } from "@prisma/client";

// enum AccessType{
//     Read = "READ"
// }

const permissions : Partial<Permission>[]=[
    {
        resource: "premium-read-access",
        accessType: "READ"
    },
    {
        resource: "premium-write-access",
        accessType: "WRITE"
    },
    {
        resource: "premium-delete-access",
        accessType: "DELETE"
    },
    {
        resource: "premium-update-access",
        accessType: "UPDATE"
    },
]

export default permissions