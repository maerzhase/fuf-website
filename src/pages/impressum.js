import React from "react";
import { getSingleton } from "@/api/api";
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import BKUMHH_IMG from "../public/Logo-BKM-Hamburg-weiss.svg";

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
            <Box display="flex" flexDirection="column" mt={8}>
              <Typography variant="body2">
                Diese Website wurde gefördert von: Freie Und Hansestadt Hamburg,
                Behörde für Kultur und Medien.
              </Typography>
              <Box maxWidth={300} mt={2}>
                <Image
                  src={BKUMHH_IMG}
                  alt="Logo Freie Und Hansestadt Hamburg, Behörde für Kultur und Medien"
                />
              </Box>
            </Box>
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
