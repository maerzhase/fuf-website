import React, { useState } from "react";
import {
  getAllCollections,
  getCollectionEntries,
  getSingleton,
} from "@/api/api";
import Head from "next/head";
import { CMS_NAME } from "@/api/constants";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import { useMotionValue } from "framer-motion";
import ScrollIndicator from "@/components/ScrollIndicator";

const ProjectStream = dynamic(() => import("@/components/ProjectStream"), {
  ssr: false,
});

export default function Index({
  allCollections,
  preview,
  allEntries,
  startPage,
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentDirection, setCurrentDirection] = useState("down");
  const prog = useMotionValue(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data, direction }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress = ({ data, progress, direction, ...rest }) => {
    if (data === currentStepIndex) {
      prog.set(progress + 1 * currentStepIndex);
    }
  };

  return (
    <React.Fragment>
      <ScrollIndicator />
      <Layout>
        <Head>
          <title>Home - Frauen und Fiktion </title>
        </Head>
        <Container>
          <Box minHeight="100vh" display="flex" alignItems="center">
            <Typography align="center" variant="h3">
              <ReactMarkdown>{startPage.introText}</ReactMarkdown>
            </Typography>
          </Box>
        </Container>
        <ProjectStream
          currentStepIndex={currentStepIndex}
          currentStepProgress={prog}
          onStepEnter={onStepEnter}
          onStepProgress={onStepProgress}
          projects={allEntries.entries}
          currentDirection={currentDirection}
        />
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps({ preview = null }) {
  const allCollections = (await getAllCollections(preview)) || [];
  const allEntries = (await getCollectionEntries("project")) || [];
  const startPage = await getSingleton("Landinpage");
  return {
    props: {
      allCollections,
      preview,
      allEntries: {
        ...allEntries,
        entries: allEntries.entries.filter((t) => !t.hidden),
      },
      startPage,
    },
  };
}
