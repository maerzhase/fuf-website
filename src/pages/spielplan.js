import React, { useState} from 'react';
import { getAllCollections, getCollectionEntries, getSingleton, getAllSingletons } from '@/api/api'
import Head from 'next/head'
import Link from 'next/link'
import { CMS_NAME } from '@/api/constants'
import Layout from '@/components/layout';
import Container from '@/components/container'
import Box from '@material-ui/core/Box';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import dynamic from 'next/dynamic';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinkIcon from '@/icons/Link';
import { isBefore, parse } from 'date-fns';

const TypoCell = withStyles(theme => ({
  root: {
    ...theme.typography.button,
  },
}))(TableCell)

export default function Index({ preview, allEntries }) {
  const today = new Date();
  const [past, future] = allEntries.entries.reduce((acc, e) => {
    const date = parse(e.date, 'yyyy-MM-dd', new Date());
    if(isBefore(date, today)) {
      acc[0].push(e);
    } else {  
      acc[1].push(e);
    }
    return acc;
  }, [[], []]);
  console.log(past, future)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Box mt={10}>
            <Typography variant="h2">Spielplan</Typography>
            <TableContainer >
              <Table aria-label="simple table">
                <TableBody>
                  {future.map((date) => (
                    <TableRow key={date._id}>
                      <TypoCell>
                        {date.date}
                      </TypoCell>
                      <TypoCell>{date.title}</TypoCell>
                      <TypoCell>{date.location}</TypoCell>
                      <TypoCell><LinkIcon fontSize="small"/></TypoCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer >
              <Table aria-label="simple table">
                <TableBody>
                  {past.map((date) => (
                    <TableRow key={date._id}>
                      <TypoCell>
                        {date.date}
                      </TypoCell>
                      <TypoCell>{date.title}</TypoCell>
                      <TypoCell>{date.location}</TypoCell>
                      <TypoCell><LinkIcon fontSize="small"/></TypoCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allEntries = (await getCollectionEntries("event")) || []
  return {
    props: { preview, allEntries },
  }
}
