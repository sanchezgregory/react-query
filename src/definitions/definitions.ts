export interface Product {
    id: string,
    title: string,
    price: number,
    category: string,
    description: string
}

export interface User {
    id: number,
    name: string,
    email: string
}

export interface Product {
    id: string;
    title: string;
    price: number;
  }
  
export type ApiData<T> = T[]