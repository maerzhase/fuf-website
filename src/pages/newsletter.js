import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NewsletterForm from "@/components/NewsletterForm";

export default function ImpressumPage({ page, preview }) {
  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Newsletter - Frauen und Fiktion</title>
        </Head>
        <Container>
          <Box mt={10} align="center" sx={{ minHeight: "60dvh" }}>
            <Typography variant="h2">Newsletter</Typography>
            <Box
              display="flex"
              flexDirection="column"
              mt={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NewsletterForm />
            </Box>
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}
