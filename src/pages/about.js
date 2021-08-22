import React, { useState} from 'react';
import { getAllCollections, getCollectionEntries, getSingleton, getAllSingletons } from '@/api/api'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '@/api/constants'
import Layout from '@/components/layout';
import Container from '@/components/container'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'

const LeftColumn = props => <Box width={0.5} mr={4} {...props}/>
const RightColumn = props => <Box width={0.5} ml={4} {...props}/>

const Person = (props) => {
  const { person } = props;
  return (
    <Box display="flex" mb={12}>
      <LeftColumn>
        <Typography variant="h3">{person.name}</Typography>
        <Typography variant="h3">{person.lastname}</Typography>
      </LeftColumn>
      <RightColumn>
        <Typography variant="body1">{person.abstract}</Typography>
      </RightColumn>
    </Box>
  );
}

const Collaborator = (props) => {
  const { person } = props;
  return (
    <Box mb={12}>
      <Typography variant="h3">{person.name} {person.lastname}</Typography>
      <Typography variant="body1">{person.position}</Typography>                    
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  collaboratorHeadline: {
    wordBreak: 'break-all',
  },
}));

export default function Index({  preview, aboutPage }) {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Box minHeight="100vh" display="flex" alignItems="center">
            <Typography variant="h4"><ReactMarkdown>{aboutPage.intro}</ReactMarkdown></Typography>
          </Box>
          <Box>
            {
              aboutPage.team.map(p => <Person key={p._id} person={p} />)
            }
            <Box display="flex" mb={4}>
              <LeftColumn>
                <Typography variant="h3" className={classes.collaboratorHeadline}>Kolaborateur*innen</Typography>
              </LeftColumn>
              <RightColumn>
                {
                  aboutPage.collaborators.map(c => <Collaborator key={c._id} person={c} />)
                }
              </RightColumn>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const aboutPage = await getSingleton("about")
  return {
    props: {  preview, aboutPage },
  }
}
