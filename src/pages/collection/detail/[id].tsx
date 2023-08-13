import Layout from '@/components/Layout'
import Collection from '@/views/Collection/detail'
import type { NextPageWithLayout } from '@/pages/_app'

const CollectionDetailPage: NextPageWithLayout = () => {
  return <Collection />
}

CollectionDetailPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default CollectionDetailPage
