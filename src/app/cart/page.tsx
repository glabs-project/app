'use client'

import { useEffect, useState } from 'react'

import Cookies from 'js-cookie'

export default function CartHome() {
  const cartStore = Cookies.get('cartItems')

  const [items, setItems] = useState<string[]>([])

  const getCookies = () => {
    return cartStore ? JSON.parse(cartStore) : []
  }

  useEffect(() => {
    setItems(getCookies())
  }, [])

  return (
    <section>
      <h1 className="font-semibold text-3xl">Корзина</h1>

      {items.map((item, index) => (
        item && <li key={index}>{item}</li>
      ))}
    </section>
  )
}
