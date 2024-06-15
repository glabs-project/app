import Image from 'next/image'

import { getAllProductsByName } from '~/entities/products'
import { convertPriceStringToNumber } from '~/features/products/convertPrice'
import { Button, Carousel, CarouselContent, CarouselItem } from '~/shared/ui'

interface Props {
  params: {
    name: string
    subName: string
    productsName: string
  }
}

// TODO: fix render
export default async function ProductsAsCategoryById({
  params: { name, subName, productsName }
}: Props) {
  const { products } = await getAllProductsByName(name)

  const productsItems = products[subName]

  const [productsOfName] = productsItems.filter(
    (product) => product.name === decodeURIComponent(productsName)
  )

  return (
    <div className="w-11/12 h-full my-4 flex flex-col">
      <h1 className="font-medium text-2xl">{productsOfName.name}</h1>

      <div className="flex flex-col gap-y-8 sm:flex-row sm:gap-x-8">
        <div className="sm:my-6">
          <Carousel className="max-w-xs flex flex-row items-center justify-center px-2 py-4 border border-foreground rounded-md">
            <CarouselContent>
              {productsOfName.images.map((url, idx) => (
                <CarouselItem className="flex items-center justify-center" key={idx}>
                  <Image
                    src={
                      url ||
                      'https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k'
                    }
                    alt=""
                    width={250}
                    height={1}
                    priority
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="sm:my-6 flex flex-col">
          <h3 className="font-bold text-xl">Характеристики:</h3>
          <ul className="flex flex-col gap-y-1 items-start max-h-56 overflow-y-scroll">
            {productsOfName.characteristics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-lg sm:my-12 flex flex-col gap-y-2">
          <span className="font-medium text-4xl">{productsOfName.price}</span>
          <span className="bg-slate-300 w-fit p-1 rounded">
            + {Math.floor(convertPriceStringToNumber(productsOfName.price) * (5 / 100))}{' '}
            бонусов
          </span>
          <Button variant={'outline'}>
            <span className="text-xl">Купить сразу</span>
          </Button>
          <Button>
            <span className="text-xl">Отложить в корзину</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
