import * as z from "zod"
import * as imports from "../null"
import { CompleteCart, RelatedCartModel, CompleteProduct, RelatedProductModel, CompletePromotion, RelatedPromotionModel } from "./index"

export const CartItemModel = z.object({
  id: z.number().int(),
  cartId: z.number().int(),
  productId: z.number().int(),
  quantity: z.number().int(),
  promotionId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteCartItem extends z.infer<typeof CartItemModel> {
  cart: CompleteCart
  product: CompleteProduct
  Promotion?: CompletePromotion | null
}

/**
 * RelatedCartItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCartItemModel: z.ZodSchema<CompleteCartItem> = z.lazy(() => CartItemModel.extend({
  cart: RelatedCartModel,
  product: RelatedProductModel,
  Promotion: RelatedPromotionModel.nullish(),
}))
