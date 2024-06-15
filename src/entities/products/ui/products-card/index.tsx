'use client'

import { FC, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { type ProductsItems } from '../../model'

import { ArchiveIcon } from '@radix-ui/react-icons'
import Cookies from 'js-cookie'
import { Button, Carousel, CarouselContent, CarouselItem } from '~/shared/ui'

interface Props {
  name: string
  subName: string
  products: ProductsItems[keyof ProductsItems]
}

// TODO: Actual cookies - im think bad solution, need rework later
export const ProductsCard: FC<Props> = ({ name, subName, products }) => {
  const [items, setItems] = useState<string[]>([])

  const handleAddCart = (item: string) => {
    setItems((prev) => [...prev, item])

    Cookies.set('cartItems', JSON.stringify(items), { expires: 3 })

    console.log(Cookies.get('cartItems'))
  }

  return products.map((item, index) => (
    <div
      key={index}
      className="max-w-xs max-h-[848px] flex flex-col p-4 border rounded-md border-foreground"
    >
      <Carousel className="w-full h-full max-w-xs mx-auto flex flex-row items-center justify-center px-2 py-4">
        <CarouselContent>
          {item.images.map((url, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <Image
                src={
                  url ||
                  'https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k'
                }
                alt="image"
                priority
                width={150}
                height={1}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col gap-y-2">
        <span className="font-medium max-w-sm max-h-12 overflow-y-auto">
          {item.name}
        </span>
        <span className="font-bold">{item.price} руб.</span>
        <div className="flex flex-row items-center justify-between space-x-2">
          <Link
            className="flex flex-col"
            href={`/products/${name}/${subName}/${item.name}`}
          >
            <Button>Просмотреть</Button>
          </Link>

          <Button
            onClick={() => handleAddCart(item.name)}
            variant={'outline'}
            className="gap-x-2"
          >
            <ArchiveIcon width={26} height={26} />
            <span>В корзину</span>
          </Button>
        </div>
      </div>
    </div>
  ))
}
