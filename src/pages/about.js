import React, { useState } from "react";
import { getSingleton } from "@/api/api";
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ReactMarkdown from "@/components/Markdown";
import ScrollIndicator from "@/components/ScrollIndicator";

const useColumnStyles = makeStyles((theme) => ({
  left: {
    width: "50%",
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: 0,
    },
  },
  right: {
    width: "50%",
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  person: {
    display: "flex",
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const LeftColumn = (props) => {
  const classes = useColumnStyles();
  return <div className={classes.left} {...props} />;
};
const RightColumn = (props) => {
  const classes = useColumnStyles();
  return <div className={classes.right} {...props} />;
};

const Person = (props) => {
  const { person } = props;
  const classes = useColumnStyles();
  return (
    <div className={classes.person}>
      <LeftColumn>
        <Typography variant="h4">{person.name}</Typography>
        <Typography variant="h4" gutterBottom>
          {person.lastname}
        </Typography>
      </LeftColumn>
      <RightColumn>
        <Typography variant="body1">{person.abstract}</Typography>
      </RightColumn>
    </div>
  );
};

const Collaborator = (props) => {
  const { person } = props;
  return (
    <React.Fragment>
      <Typography variant="h4">
        {person.name} {person.lastname}
      </Typography>
      <Typography variant="body1">{person.position}</Typography>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  collaboratorWrapper: {
    flexWrap: "wrap",
  },
  collaboratorHeadline: {
    minWidth: "50%",
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
  collaborator: {
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(5),
  },
}));

export default function Index({ preview, aboutPage }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ScrollIndicator />
      <Layout>
        <Head>
          <title>About - Frauen und Fiktion</title>
        </Head>
        <Container>
          <Box minHeight="100vh" display="flex" alignItems="center" mt={8} mb={8}>
            <Typography variant="h4">
              <ReactMarkdown>{aboutPage.intro}</ReactMarkdown>
            </Typography>
          </Box>
          <Box>
            {aboutPage.team.map((p) => (
              <Person key={p._id} person={p} />
            ))}
            <Box className={classes.collaboratorWrapper} display="flex" mb={4}>
              <Typography variant="h3" className={classes.collaboratorHeadline}>
                Kollaborateu*innen
              </Typography>
              <div className={classes.collaborators}>
                {aboutPage.collaborators.map((c) => (
                  <div className={classes.collaborator} key={c._id}>
                    <Collaborator person={c} />
                  </div>
                ))}
              </div>
            </Box>
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps({ preview = null }) {
  const aboutPage = await getSingleton("about");
  return {
    props: { preview, aboutPage },
  };
}
