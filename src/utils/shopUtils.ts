import { CartItemProps } from "../context/CartContext";

export function priceToLocaleString(price: number) {
    return price.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
    })
  }


export const sumItems = (cart:  CartItemProps[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0)
}

export const calcTotalPrice = (cart: CartItemProps[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
} 