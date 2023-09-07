import client from "@lib/client"
import { RolePermission } from "@prisma/client"


async function grantPremiumRoleTo(userId:number){

    const role = await client.role.findUnique({
        where: {
            name: "PREMIUM"
        }
    })
    if(!role){ return }
    console.log(role);
    

    const permission = await client.permission.findUnique({
        where: {
            id: 2
        }
    })
    if(!permission){ return }
    console.log(permission);
    

    const rolePermission:RolePermission = await client.rolePermission.create(
        {
            data: {
                roleId: role.id,
                permissionId: permission.id
            }
        }
    )
    if(!rolePermission){ return }
    console.log(rolePermission);
    


    const userRole = await client.userRole.create({
        data: {
            userId: userId,
            roleId: role.id,
        }
    })
    if(!userRole){ return }
    
    return userRole
}


export default grantPremiumRoleTo;