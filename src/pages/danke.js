import React from "react";
import { getSingleton } from "@/api/api";
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";

export default function NewsletterThankyouPage({ page, preview }) {
  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Newsletter Anmeldung - Frauen und Fiktion</title>
        </Head>
        <Container>
          <Box mt={10} sx={{ minHeight: "50dvh" }}>
            <Typography variant="h3">Newsletter Anmeldung</Typography>
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
  const page = await getSingleton("danke");
  return {
    props: { page, preview },
    revalidate: 10,
  };
}
