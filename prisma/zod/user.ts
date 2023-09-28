import * as z from "zod"
import * as imports from "../null"
import { CompleteAuthenticationToken, RelatedAuthenticationTokenModel, CompleteUserProfile, RelatedUserProfileModel, CompleteUserReview, RelatedUserReviewModel, CompleteCart, RelatedCartModel, CompleteLogin, RelatedLoginModel, CompleteUserRole, RelatedUserRoleModel, CompletePaymentMethod, RelatedPaymentMethodModel, CompleteOrder, RelatedOrderModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const UserModel = z.object({
  id: z.number().int(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  preference: jsonSchema,
  balance: z.number().int(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  authenticationToken?: CompleteAuthenticationToken | null
  profile?: CompleteUserProfile | null
  authoredReviews: CompleteUserReview[]
  cart?: CompleteCart | null
  login?: CompleteLogin | null
  roles: CompleteUserRole[]
  paymentMethod: CompletePaymentMethod[]
  orders: CompleteOrder[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  authenticationToken: RelatedAuthenticationTokenModel.nullish(),
  profile: RelatedUserProfileModel.nullish(),
  authoredReviews: RelatedUserReviewModel.array(),
  cart: RelatedCartModel.nullish(),
  login: RelatedLoginModel.nullish(),
  roles: RelatedUserRoleModel.array(),
  paymentMethod: RelatedPaymentMethodModel.array(),
  orders: RelatedOrderModel.array(),
}))
