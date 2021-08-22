import React, { useState} from 'react';
import { getAllCollections, getCollectionEntries, getSingleton, getAllSingletons } from '@/api/api'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '@/api/constants'
import Layout from '@/components/layout';
import Container from '@/components/container'
import Box from '@material-ui/core/Box';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
const ProjectStream = dynamic(() => import('@/components/ProjectStream'), { ssr: false });

export default function Index({ allCollections, preview, allEntries, startPage }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress = ({ progress, ...rest }) => {
    setStepProgress(progress);
  }

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Box minHeight="100vh" display="flex" alignItems="center">
            <Typography align="center" variant="h2"><ReactMarkdown>{startPage.introText}</ReactMarkdown></Typography>
          </Box>
        </Container>
        <ProjectStream
          currentStepIndex={currentStepIndex}
          currentStepProgress={stepProgress}
          onStepEnter={onStepEnter}
          onStepProgress={onStepProgress}
          projects={allEntries.entries}
        />
      </Layout>
    </React.Fragment>
  )
}

export async function getStaticProps({ preview = null }) {
  const allCollections = (await getAllCollections(preview)) || []
  const allEntries = (await getCollectionEntries("project")) || []
  const startPage = await getSingleton("Landinpage")
  return {
    props: { allCollections, preview, allEntries, startPage },
  }
}
