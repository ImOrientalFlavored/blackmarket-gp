import * as z from "zod"
import * as imports from "../null"
import { Gender } from "@prisma/client"
import { CompleteUserAddress, RelatedUserAddressModel, CompleteSocialLink, RelatedSocialLinkModel, CompleteUser, RelatedUserModel } from "./index"

export const UserProfileModel = z.object({
  id: z.number().int(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  phone: z.string().nullish(),
  birthDate: z.date().nullish(),
  gender: z.nativeEnum(Gender).nullish(),
  photo: z.string().nullish(),
  bio: z.string().nullish(),
  userId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUserProfile extends z.infer<typeof UserProfileModel> {
  userAddress: CompleteUserAddress[]
  socialLinks: CompleteSocialLink[]
  user: CompleteUser
}

/**
 * RelatedUserProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserProfileModel: z.ZodSchema<CompleteUserProfile> = z.lazy(() => UserProfileModel.extend({
  userAddress: RelatedUserAddressModel.array(),
  socialLinks: RelatedSocialLinkModel.array(),
  user: RelatedUserModel,
}))
