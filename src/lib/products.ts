export type Product = {
  id: number;
  name: string;
  category: string;
};

export const products: Product[] = [
  { id: 1, name: "react course", category: "react" },
  { id: 2, name: "angular course", category: "angular" },
  { id: 3, name: "vue course", category: "vue" },
  { id: 4, name: "node.js course", category: "node" },
  { id: 5, name: "python course", category: "python" },
];
