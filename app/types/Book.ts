export interface Book {
  id: string;
  title: string;
  description?: string;
  productType?: "physical" | "digital" | "physical & digital";
  price: number;
  noOfStock: number;
  imageUrl: string;
}
