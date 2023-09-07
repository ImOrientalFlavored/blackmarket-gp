enum Grade{
  SSSSS = "SSSSS", //All
  SSSS = "SSSS", //Multi-universal
  SSS = "SSS", //
  SS = "SS", //
  A = "A", //
  B = "B", //
  C = "C", //
  D = "D", //
  E = "E", //
  F = "F", //
  G = "G", //
  H = "H", //
  I = "I", //
  J = "J", //
  K = "K", //
  L = "L", //
  M = "M", //
  N = "N", //
  O = "O", //
  P = "P", //
  Q = "Q", //
  R = "R", //
  S = "S", //
  T = "T", //
  U = "U", //
  V = "V", //
  W = "W", //
  X = "X", //
  Y = "Y", //
  Z = "Z", //a meter
}
export default interface Product {
  id: number;
  productName: string,
  productDesc: string,
  price: number,
  categoryId: number,
  productRating: number,
  isActive: boolean,
  isAvailable: boolean,
  createdAt: Date,
  updatedAt: Date;
  shortDesc?: string,
  grade?: Grade,
  sku?: string,
  msrp?: number,
  size?: string,
  weight?: number,
  weightUnit?: string,
  slug?: string,
  imageUrl?: string,
  features?: object,
  orderDetail:[],
  cartItem:[],
  productInventory: [],
  productImage:[],
  reviews:[]
}