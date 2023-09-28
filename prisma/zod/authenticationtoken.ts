import * as z from "zod"
// import * as imports from "../null"
import { CompleteUser, RelatedUserModel } from "./index"

export const AuthenticationTokenModel = z.object({
  id: z.number().int(),
  token: z.string(),
  expiry: z.date().nullish(),
  userId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteAuthenticationToken extends z.infer<typeof AuthenticationTokenModel> {
  user: CompleteUser
}

/**
 * RelatedAuthenticationTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAuthenticationTokenModel: z.ZodSchema<CompleteAuthenticationToken> = z.lazy(() => AuthenticationTokenModel.extend({
  user: RelatedUserModel,
}))
