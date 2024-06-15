interface Props {
  info: React.ReactNode
  additionals: React.ReactNode
}

export default function ProductsWithNameLayout({ info, additionals }: Props) {
  return (
    <section className="flex flex-col space-y-4">
      {info}
      {additionals}
    </section>
  )
}
