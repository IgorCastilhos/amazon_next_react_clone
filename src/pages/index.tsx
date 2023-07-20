import Banner from '@/components/banner/Banner'
import Products from '@/components/products/Products'

interface Props {
  productData: ProdutProps
}

export default function Home({ productData }: Props) {
  return (
    <main>
      <div className={`mx-auto max-w-screen-2xl`}>
        <Banner />
        <div className="md:-mt020 relative z-20 mb-10 lgl:-mt-32 xl:-mt-60">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech')
  const productData = await res.json()
  return { props: { productData } }
}
