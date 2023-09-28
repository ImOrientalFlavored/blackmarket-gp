import * as z from "zod"
import * as imports from "../null"
import { CompleteUserProfile, RelatedUserProfileModel } from "./index"

export const SocialLinkModel = z.object({
  id: z.number().int(),
  userProfileId: z.number().int(),
  socialProvider: z.string(),
  socialUrl: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteSocialLink extends z.infer<typeof SocialLinkModel> {
  UserProfile: CompleteUserProfile
}

/**
 * RelatedSocialLinkModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSocialLinkModel: z.ZodSchema<CompleteSocialLink> = z.lazy(() => SocialLinkModel.extend({
  UserProfile: RelatedUserProfileModel,
}))
