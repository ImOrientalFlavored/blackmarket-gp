import * as z from "zod"
import * as imports from "../null"
import { CompleteUserProfile, RelatedUserProfileModel, CompleteAddress, RelatedAddressModel } from "./index"

export const UserAddressModel = z.object({
  id: z.number().int(),
  userProfileId: z.number().int(),
  addressId: z.number().int(),
  isDefault: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUserAddress extends z.infer<typeof UserAddressModel> {
  userProfile: CompleteUserProfile
  address: CompleteAddress
}

/**
 * RelatedUserAddressModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserAddressModel: z.ZodSchema<CompleteUserAddress> = z.lazy(() => UserAddressModel.extend({
  userProfile: RelatedUserProfileModel,
  address: RelatedAddressModel,
}))
