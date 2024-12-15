import { IProduct, MANUFACTURERS } from "../types/products.types.ts";

export function generateProductData(customData?: Partial<IProduct>): IProduct {
  return {
    name: "Test Product" + Date.now(),
    manufacturer: MANUFACTURERS.APPLE,
    amount: 10,
    price: 999,
    notes: "Test notes",
    ...customData,
  };
}