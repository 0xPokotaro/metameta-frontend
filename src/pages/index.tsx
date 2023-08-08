import Layout from '@/components/Layout'
import Home from '@/views/Home'
import type { NextPageWithLayout } from '@/pages/_app'

const HomePage: NextPageWithLayout = () => {
    return <Home />
}

HomePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default HomePage
