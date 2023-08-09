import Layout from '@/components/Layout'
import Collections from '@/views/Collections'
import type { NextPageWithLayout } from '@/pages/_app'

const CollectionPage: NextPageWithLayout = () => {
  return <Collections />
}

CollectionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default CollectionPage
