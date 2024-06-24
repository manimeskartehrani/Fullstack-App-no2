
const productsAPI = "https://fakestoreapi.com/"
// import type { PageLoad } from '../routes/$types'



// Helper function to access list of products
// export async function load() {
//     const response = await fetch(productsAPI + "products?limit=5")
//     const data = await response.json()
//     return data
// };
// export const getProductsList = async () => {
//     const response = await fetch(productsAPI + "products?limit=5")
//     const data = await response.json()
//     return data
// }

// export const getProductsId = async () => {
//     const response = await fetch(productsAPI + "products?limit=5")
//     const data = await response.json()
//     let pId: any = []
//     data.forEach((el: any) => {
//         pId.push(el.id)
//     });

//     return pId;
// }


// Helper function to get the information on all categories

// export const getProductsCategory = async () => {
//     const response = await fetch(productsAPI + "products/categories")
//     const data = await response.json()
//     return data
// }

// // Helper function to get the information on single product based on the id
// export const getProduct = async (id: string) => {
//     const response = await fetch(productsAPI + "products/" + id)
//     const data = await response.json()
//     return data
// }

// // Helper function to get the quantity of a products
// export const getCard = async () => {
//     const response = await fetch(productsAPI + "carts?limit=2")
//     const data = await response.json()
//     return data
// }
