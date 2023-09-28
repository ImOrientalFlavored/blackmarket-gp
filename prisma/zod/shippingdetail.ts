import * as z from "zod"
import * as imports from "../null"
import { CompleteAddress, RelatedAddressModel, CompleteShippingMethod, RelatedShippingMethodModel, CompleteOrder, RelatedOrderModel } from "./index"

export const ShippingDetailModel = z.object({
  id: z.number().int(),
  estimatedArrival: z.date(),
  shippingAddressId: z.number().int(),
  shippingMethodId: z.number().int(),
  orderId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteShippingDetail extends z.infer<typeof ShippingDetailModel> {
  shippingAddress: CompleteAddress
  shippingMethod: CompleteShippingMethod
  order: CompleteOrder
}

/**
 * RelatedShippingDetailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedShippingDetailModel: z.ZodSchema<CompleteShippingDetail> = z.lazy(() => ShippingDetailModel.extend({
  shippingAddress: RelatedAddressModel,
  shippingMethod: RelatedShippingMethodModel,
  order: RelatedOrderModel,
}))
