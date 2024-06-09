import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { type ProductsItems } from '../../model'

import { Button, Carousel, CarouselContent, CarouselItem } from '~/shared/ui'

interface Props {
  products: ProductsItems[keyof ProductsItems]
}

export const ProductsCard: FC<Props> = ({ products }) => {
  return products.map((item, index) => (
    <div
      key={index}
      className="max-w-xs max-h-[848px] flex flex-col p-4 border rounded-md border-foreground"
    >
      <Carousel className="w-full h-full max-w-xs mx-auto flex flex-row items-center justify-center px-2 py-4">
        <CarouselContent>
          {item.images.map((url, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
              <Image src={url} alt="" priority width={150} height={1} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col gap-y-2">
        <span className="font-medium max-w-sm max-h-12 overflow-y-auto">
          {item.name}
        </span>
        <span className="font-bold">{item.price} руб.</span>
        <Link className="flex flex-col" href={`/${item.name}`}>
          <Button>Просмотреть</Button>
        </Link>
      </div>
    </div>
  ))
}
