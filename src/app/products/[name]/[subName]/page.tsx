import { getAllProductsByName, ProductsCard } from '~/entities/products'

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
    <div className="w-full flex flex-col sm:flex-row my-4">
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:grid-cols-auto-fill md:grid-cols-minmax-min-10rem-full-1fr transition">
        <ProductsCard products={items} />
      </section>
    </div>
  )
}
