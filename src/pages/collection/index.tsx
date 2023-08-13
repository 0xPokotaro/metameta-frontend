import Layout from '@/components/Layout'
import Collections from '@/views/Collection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { NextPageWithLayout } from '@/pages/_app'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

type Props = {}

const CollectionPage: NextPageWithLayout = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <Collections />
}

CollectionPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['collections'])),
  },
})

export default CollectionPage
