export interface Product {
    id: number,
    title: string,
    price: number
}

export interface User {
    id: number,
    name: string,
    email: string
}

export interface Product {
    id: number;
    title: string;
    price: number;
  }
  
export type ApiData<T> = T[]