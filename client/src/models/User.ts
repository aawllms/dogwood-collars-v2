import type { Product } from './Product'

export interface User {
    firstName?: string | null,
    lastName?: string | null,
    email: string,
    password: string,
    phoneNumber?: string | null,
    address?: string | null
    city?: string | null,
    state?: string | null,
    zipcode?: number | null,
    role: string,
    cartProducts: Product[]
}