import React, { useState } from "react";
import {
  getAllCollections,
  getCollectionEntries,
  getSingleton,
  getAllSingletons,
} from "@/api/api";
import Head from "next/head";
import Link from "next/link";
import { CMS_NAME } from "@/api/constants";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";

export default function Index({ page, preview }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress = ({ progress, ...rest }) => {
    setStepProgress(progress);
  };

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Datenschutz - Frauen und Fiktion</title>
        </Head>
        <Container>
          <Box mt={10}>
            <Typography variant="h1">Datenschutz</Typography>
            <Typography>
              <ReactMarkdown>{page.content}</ReactMarkdown>
            </Typography>
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps({ preview = null }) {
  const page = await getSingleton("datenschutz");
  return {
    props: { page, preview },
  };
}
