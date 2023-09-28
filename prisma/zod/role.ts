import * as z from "zod"
import * as imports from "../null"
import { CompleteUserRole, RelatedUserRoleModel, CompleteRolePermission, RelatedRolePermissionModel } from "./index"

export const RoleModel = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteRole extends z.infer<typeof RoleModel> {
  users: CompleteUserRole[]
  permissions: CompleteRolePermission[]
}

/**
 * RelatedRoleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoleModel: z.ZodSchema<CompleteRole> = z.lazy(() => RoleModel.extend({
  users: RelatedUserRoleModel.array(),
  permissions: RelatedRolePermissionModel.array(),
}))
