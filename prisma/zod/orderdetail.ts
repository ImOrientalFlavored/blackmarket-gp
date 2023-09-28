import * as z from "zod"
import * as imports from "../null"
import { Decimal } from "decimal.js"
import { CompleteProduct, RelatedProductModel, CompleteOrder, RelatedOrderModel } from "./index"

// Helper schema for Decimal fields
z
  .instanceof(Decimal)
  .or(z.string())
  .or(z.number())
  .refine((value) => {
    try {
      return new Decimal(value)
    } catch (error) {
      return false
    }
  })
  .transform((value) => new Decimal(value))

export const OrderDetailModel = z.object({
  id: z.number().int(),
  orderId: z.string(),
  productId: z.number().int(),
  quantity: z.number().int(),
  total: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteOrderDetail extends z.infer<typeof OrderDetailModel> {
  product: CompleteProduct
  order: CompleteOrder
}

/**
 * RelatedOrderDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderDetailModel: z.ZodSchema<CompleteOrderDetail> = z.lazy(() => OrderDetailModel.extend({
  product: RelatedProductModel,
  order: RelatedOrderModel,
}))
