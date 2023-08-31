export default interface Product {
  id: number;
  productId: number,
  productName: string,
  productDesc: string | null,
  productType: string | null,
  shortDesc?: string | null,
  sku: number | null,
  stockQty: number | null,
  price: number | null,
  msrp?: number | null,
  categoryId: number | null,
  size: string | null,
  weight?: number | null,
  weightUnit?: string | null,
  color?: string | null,
  material?: string | null,
  features?: any | null,
  productRating: number | null,
  isActive: boolean | null,
  createdAt: Date | null,
  updatedAt: Date | null;
}
