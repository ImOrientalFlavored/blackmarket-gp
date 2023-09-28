import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel } from "./index"

export const LoginModel = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  failedAttempts: z.number().int(),
  lockoutTime: z.date().nullish(),
  lastLogin: z.date().nullish(),
  userId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteLogin extends z.infer<typeof LoginModel> {
  user: CompleteUser
}

/**
 * RelatedLoginModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLoginModel: z.ZodSchema<CompleteLogin> = z.lazy(() => LoginModel.extend({
  user: RelatedUserModel,
}))
