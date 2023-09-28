import client from "@lib/client";
import { AccessType } from "@prisma/client";


async function grantBasicRoleTo(userId:number){

    
    const permissions:AccessType[] = [AccessType.WRITE, AccessType.READ, AccessType.UPDATE, AccessType.DELETE];
    const resource = ["basic-write-access", "basic-read-access", "basic-update-access", "basic-delete-access"];

    const role = await client.role.findUnique({
        where: {
            name: "BASIC"
        }
    })

    if (!role) { return }

    for (let accessType of permissions) {
        const permission = await client.permission.findFirst({
            where: {
                accessType: accessType,
                resource: resource[permissions.indexOf(accessType)]
            }
        })

        if (!permission) { continue }

        const rolePermission = await client.rolePermission.create({
            data: {
                roleId: role.id,
                permissionId: permission.id,
            }
        })

        if(!rolePermission){ continue }
        
        console.log(rolePermission);
    }
    
    const userRole = await client.userRole.create({
        data: {
            userId: userId,
            roleId: role.id,
        }
    })
    if(!userRole){ return }
    
    return userRole
}


export default grantBasicRoleTo;