import * as z from "zod"
import * as imports from "../null"
import { Decimal } from "decimal.js"
import { CompleteShippingDetail, RelatedShippingDetailModel } from "./index"

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

export const ShippingMethodModel = z.object({
  id: z.number().int(),
  name: z.string(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteShippingMethod extends z.infer<typeof ShippingMethodModel> {
  shippingDetail: CompleteShippingDetail[]
}

/**
 * RelatedShippingMethodModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedShippingMethodModel: z.ZodSchema<CompleteShippingMethod> = z.lazy(() => ShippingMethodModel.extend({
  shippingDetail: RelatedShippingDetailModel.array(),
}))
