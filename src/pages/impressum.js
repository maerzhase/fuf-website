import React from "react";
import { getSingleton } from "@/api/api";
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";

export default function ImpressumPage({ page, preview }) {
  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Impressum - Frauen und Fiktion</title>
        </Head>
        <Container>
          <Box mt={10}>
            <Typography variant="h1">Impressum</Typography>
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
  const page = await getSingleton("impressum");
  return {
    props: { page, preview },
  };
}
