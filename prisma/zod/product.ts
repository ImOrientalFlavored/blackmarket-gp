import * as z from "zod"
import * as imports from "../null"
import { Decimal } from "decimal.js"
import { Grade } from "@prisma/client"
import { CompleteCategory, RelatedCategoryModel, CompleteOrderDetail, RelatedOrderDetailModel, CompleteCartItem, RelatedCartItemModel, CompleteProductInventory, RelatedProductInventoryModel, CompleteProductImage, RelatedProductImageModel, CompleteUserReview, RelatedUserReviewModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

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

export const ProductModel = z.object({
  id: z.number().int(),
  productName: z.string(),
  productDesc: z.string(),
  shortDesc: z.string().nullish(),
  grade: z.nativeEnum(Grade).nullish(),
  sku: z.string().nullish(),
  price: z.number(),
  msrp: z.number().nullish(),
  size: z.string().nullish(),
  weight: z.number().nullish(),
  weightUnit: z.string().nullish(),
  features: jsonSchema,
  quantity: z.number().int().nullish(),
  soldQuantity: z.number().int().nullish(),
  isActive: z.boolean().nullish(),
  isAvailable: z.boolean().nullish(),
  slug: z.string().nullish(),
  imageUrl: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  categoryId: z.number().int(),
})

export interface CompleteProduct extends z.infer<typeof ProductModel> {
  category: CompleteCategory
  orderDetail: CompleteOrderDetail[]
  cartItem: CompleteCartItem[]
  productInventory: CompleteProductInventory[]
  productImage: CompleteProductImage[]
  reviews: CompleteUserReview[]
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() => ProductModel.extend({
  category: RelatedCategoryModel,
  orderDetail: RelatedOrderDetailModel.array(),
  cartItem: RelatedCartItemModel.array(),
  productInventory: RelatedProductInventoryModel.array(),
  productImage: RelatedProductImageModel.array(),
  reviews: RelatedUserReviewModel.array(),
}))
