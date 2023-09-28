import * as z from "zod"
import * as imports from "../null"
import { CompleteProduct, RelatedProductModel } from "./index"

export const ProductImageModel = z.object({
  id: z.number().int(),
  imageUrl: z.string(),
  productId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProductImage extends z.infer<typeof ProductImageModel> {
  product: CompleteProduct
}

/**
 * RelatedProductImageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductImageModel: z.ZodSchema<CompleteProductImage> = z.lazy(() => ProductImageModel.extend({
  product: RelatedProductModel,
}))
