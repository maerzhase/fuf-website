import React from "react";
import { getCollectionEntries } from "@/api/api";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { groupBy } from "lodash";
import ReactMarkdown from "react-markdown";

export default function ThemenPage({ preview, allProjects, allThemes }) {
  const groupedProjects = groupBy(
    allProjects.entries,
    (p) => p.theme?.title || "none"
  );

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Themen - Frauen und Fiktion </title>
        </Head>
        {allThemes.entries.map((theme) => {
          const { title, description } = theme;
          return (
            <Box key={title}>
              <Container>
                <Box minHeight="100vh" display="flex" alignItems="center">
                  <Box>
                    <Typography align="center" variant="h4">
                      <ReactMarkdown>{description}</ReactMarkdown>
                    </Typography>
                    <Typography variant="h1" align="center">
                      {title}
                    </Typography>
                    {groupedProjects[title]?.map((project) => (
                      <React.Fragment key={project._id}>
                        <Link href={`/projects/${project._id}`} passHref>
                          <Button
                            color="primary"
                            variant="text"
                            fullWidth
                            align="center"
                          >
                            {project.title}
                          </Button>
                        </Link>
                      </React.Fragment>
                    ))}
                  </Box>
                </Box>
              </Container>
            </Box>
          );
        })}
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps({ preview = null }) {
  const allProjects = (await getCollectionEntries("project")) || [];
  const allThemes = (await getCollectionEntries("theme")) || [];
  return {
    props: { preview, allProjects, allThemes },
  };
}
