export interface Book {
  id: number;
  title: string; 
  price: number;
  author: string;
  publication_year: number;
  genre: string;
  in_stock: boolean;
  stock_amount: number;
}

export const bookTableHeaders = [
  {
    id: 1,
    label: "Title",
  },
  {
    id: 2,
    label: "Price",
  },
  {
    id: 3,
    label: "Author",
  },
  {
    id: 4,
    label: "Publication Year",
  },
  {
    id: 5,
    label: "Genre",
  },
  {
    id: 6,
    label: "In stock?"
  },
  {
    id: 7,
    label: "Stock amount"
  }
]