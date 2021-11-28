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
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { groupBy } from 'lodash';
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import { SimpleTeaser } from '@/components/ProjectStream';

export default function ThemenPage({
  preview,
  allProjects,
  allThemes,
}) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  const groupedProjects = groupBy(allProjects.entries, p => p.theme?.title || 'none');

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
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        {
          allThemes.entries.map(theme => {
            const { title, description } = theme;
            return (
              <Box key={title}>
                <Container>
                  <Box minHeight="100vh" display="flex" alignItems="center">
                    <Box>
                      <Typography align="center" variant="h4">
                        <ReactMarkdown>{description}</ReactMarkdown>
                      </Typography>
                      <Typography variant="h1" align="center">{title}</Typography>
                      {
                        groupedProjects[title]?.map(project => (
                          <React.Fragment key={project._id}>
                            <Link href={`/projects/${project._id}`} passHref>
                              <Button color="primary" variant="text" fullWidth align="center">{project.title}</Button>
                            </Link>
                          </React.Fragment>
                        ))
                      }
                    </Box>
                  </Box>
                </Container>
              </Box>
            );
          })
        }
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps({ preview = null }) {
  const allProjects = (await getCollectionEntries("project")) || [];
  const allThemes = (await getCollectionEntries("theme")) || [];
  return {
    props: { preview, allProjects, allThemes},
  };
}
