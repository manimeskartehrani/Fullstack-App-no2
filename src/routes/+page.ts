
import type { PageData } from "./$types"

const productsAPI = "https://fakestoreapi.com/"


export const load: PageData = async ({ fetch }: any) => {
    const response = await fetch(
        productsAPI + "products?limit=5"
    )
    const products = await response.json()
    return { products }
}