import { getAllProductsByName, ProductsCard, ProductsTitle } from '~/entities/products'

interface Props {
  params: {
    name: string
    subName: string
  }
}

export default async function ProductsSub({ params: { name, subName } }: Props) {
  const { products } = await getAllProductsByName(name)

  const items = products[subName]

  return (
    <div className="flex flex-col my-4 gap-y-4">
      <h1 className="font-bold text-xl">
        {ProductsTitle[name as keyof typeof ProductsTitle]}
      </h1>

      <section className="w-full mx-auto flex flex-wrap gap-y-4 sm:flex-row sm:gap-x-4">
        <ProductsCard name={name} subName={subName} products={items} />
      </section>
    </div>
  )
}
