import List from '../../listings/List'
import { ListProps } from '../../listings/dtos'


function Index (p: ListProps) {
  const { updatedAt } = p
  return List({updatedAt})
}

export default Index

export async function getStaticProps() {
  return {
    props: {
      updatedAt: new Date().toISOString(),
    },
    // Interval in seconds for rebuilding / caching page when serving requests
    revalidate: 1,
  }
}