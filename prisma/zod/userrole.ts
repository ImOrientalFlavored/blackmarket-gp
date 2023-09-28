import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteRole, RelatedRoleModel } from "./index"

export const UserRoleModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  roleId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUserRole extends z.infer<typeof UserRoleModel> {
  user: CompleteUser
  role: CompleteRole
}

/**
 * RelatedUserRoleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserRoleModel: z.ZodSchema<CompleteUserRole> = z.lazy(() => UserRoleModel.extend({
  user: RelatedUserModel,
  role: RelatedRoleModel,
}))
