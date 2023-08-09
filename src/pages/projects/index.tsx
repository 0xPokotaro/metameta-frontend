import Layout from '@/components/Layout'
import Projects from '@/views/Projects'
import type { NextPageWithLayout } from '@/pages/_app'

const ProjectPage: NextPageWithLayout = () => {
  return <Projects />
}

ProjectPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default ProjectPage
