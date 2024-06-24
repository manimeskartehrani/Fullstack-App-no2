
import { writable, get } from "svelte/store";

export const cartItems = writable<CartItems[]>([])

// add to card
export const addToCart = (id: string) => {
    let items = get(cartItems)
    let itemPosition = items.findIndex(
        (item) => {
            return item.id == id
        }
    )
    if (itemPosition !== -1) {
        //Item is already in cart
        cartItems.update(() => {
            let updatedItems = items.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
            return updatedItems

        })
    } else {
        // Item is not in the cart
        cartItems.update(() => {
            return [...items, { id: id, quantity: 1 }]
        })
    }
}
// remove from card
export const removeFromCart = (id: string) => {
    let items = get(cartItems)
    let itemPosition = items.findIndex(
        (item) => {
            return item.id == id
        }
    )
    // if number of item quantity in the cards is 1, it means remove the item entirely 
    if (items[itemPosition]?.quantity - 1 === 0) {
        items.splice(itemPosition, 1)
    }
    cartItems.update(() => {
        // if id is equal to id of the product we want then decrease the quantity by 1

        let updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        return updatedItems

    })

}






