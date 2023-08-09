import Layout from '@/components/Layout'
import Collections from '@/views/Collections/edit'
import type { NextPageWithLayout } from '@/pages/_app'

const CollectionEditPage: NextPageWithLayout = () => {
  return <Collections />
}

CollectionEditPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default CollectionEditPage
