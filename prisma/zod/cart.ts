import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteCartItem, RelatedCartItemModel } from "./index"

export const CartModel = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteCart extends z.infer<typeof CartModel> {
  user: CompleteUser
  cartItems: CompleteCartItem[]
}

/**
 * RelatedCartModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCartModel: z.ZodSchema<CompleteCart> = z.lazy(() => CartModel.extend({
  user: RelatedUserModel,
  cartItems: RelatedCartItemModel.array(),
}))
