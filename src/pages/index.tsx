import Layout from '@/components/Layout'
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <>
    <Layout>
      {page}
    </Layout>
    </>
  )
}

export default Home
