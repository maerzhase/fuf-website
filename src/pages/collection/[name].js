import { getCollectionEntries, getAllCollections } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants';
import Link from 'next/link'
import Layout from '@/components/layout';
import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HeroPost from '@/components/hero-post'
import Header from '@/components/header';

export default function Index({ allEntries, title, preview }) {
  const entries = allEntries?.entries;
  const heroPost = entries[0]
  const morePosts = entries.slice(1)
  console.log(heroPost);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Box width="100%">
          <Typography variant="h1">{heroPost.title}</Typography>
          <Box width="100%" component="img" src={`https://cockpit.m3000.io/storage/uploads/${heroPost.heroImage.path}`} />
          <Typography variant="h2" style={{whiteSpace: 'pre-wrap'}}>{heroPost.abstract}</Typography>
          <Typography variant="body1" style={{whiteSpace: 'pre-wrap'}}>{heroPost.subtitle}</Typography>
          <Typography variant="body2" style={{whiteSpace: 'pre-wrap'}}>{heroPost.credits}</Typography>
        </Box>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const { name: title } = params;
  const allEntries = (await getCollectionEntries(title)) || []
  return {
    props: { allEntries, preview, title },
  }
}

export async function getStaticPaths() {
  const allCollections = await getAllCollections()
  return {
    paths: allCollections?.map((c) => `/collection/${c}`) || [],
    fallback: true,
  }
}