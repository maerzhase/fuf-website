import React, { useState } from "react";
import { getSingleton } from "@/api/api";
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";

export default function Index({ page, preview }) {
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

export async function getStaticProps({ preview = null }) {
  const page = await getSingleton("datenschutz");
  return {
    props: { page, preview },
    revalidate: 10,
  };
}
