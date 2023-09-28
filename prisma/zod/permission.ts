import * as z from "zod"
import * as imports from "../null"
import { AccessType } from "@prisma/client"
import { CompleteRolePermission, RelatedRolePermissionModel } from "./index"

export const PermissionModel = z.object({
  id: z.number().int(),
  resource: z.string(),
  accessType: z.nativeEnum(AccessType),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompletePermission extends z.infer<typeof PermissionModel> {
  roles: CompleteRolePermission[]
}

/**
 * RelatedPermissionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPermissionModel: z.ZodSchema<CompletePermission> = z.lazy(() => PermissionModel.extend({
  roles: RelatedRolePermissionModel.array(),
}))
