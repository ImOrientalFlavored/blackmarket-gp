import * as z from "zod"
import * as imports from "../null"
import { CompleteUserAddress, RelatedUserAddressModel, CompletePaymentDetail, RelatedPaymentDetailModel, CompleteShippingDetail, RelatedShippingDetailModel } from "./index"

export const AddressModel = z.object({
  id: z.number().int(),
  street: z.string(),
  unit: z.string(),
  city: z.string(),
  zipcode: z.string(),
  state: z.string(),
  country: z.string(),
  planet: z.string().nullish(),
  solarSystem: z.string().nullish(),
  galaxy: z.string().nullish(),
  localGroup: z.string().nullish(),
  localCluster: z.string().nullish(),
  universe: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteAddress extends z.infer<typeof AddressModel> {
  userAddress: CompleteUserAddress[]
  paymentDetail: CompletePaymentDetail[]
  shippingDetail: CompleteShippingDetail[]
}

/**
 * RelatedAddressModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAddressModel: z.ZodSchema<CompleteAddress> = z.lazy(() => AddressModel.extend({
  userAddress: RelatedUserAddressModel.array(),
  paymentDetail: RelatedPaymentDetailModel.array(),
  shippingDetail: RelatedShippingDetailModel.array(),
}))
