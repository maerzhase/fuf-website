import React from "react";
import { getCollectionEntries } from "@/api/api";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { groupBy } from "lodash";
import ReactMarkdown from "react-markdown";
import { getImageSrc } from "@/api/constants";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core";
import ScrollIndicator from "@/components/ScrollIndicator";

const useBoxStyles = makeStyles((theme) => ({
  iconButton: {
    marginRight: theme.spacing(2),
    transform: (props) =>
      props.showDescription ? "translate(0, 0%)" : "translate(0, 0%)",
  },
  description: {
    // position: "absolute",
    //  bottom: 0,
    "& > p": {
      margin: 0,
      marginBottom: theme.spacing(4),
    },
  },
}));
const ThemeBox = (props) => {
  const { theme, groupedProjects } = props;
  const { title, description } = theme;
  const [showDescription, setShowDescription] = React.useState(false);
  const [activeProject, setActiveProject] = React.useState(null);

  const classes = useBoxStyles({ showDescription });
  const handleToggleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  const createMouseEnterHandler = (project) => () => {
    setActiveProject(project);
  };
  const createMouseLeaveHandler = (project) => () => {
    setActiveProject(null);
  };
  return (
    <Box key={title} style={{ position: "relative" }}>
      <Container>
        <Box
          style={{ zIndex: 1, position: "relative" }}
          minHeight="100vh"
          display="flex"
          alignItems="center"
        >
          <Box
            width="100%"
            maxWidth={850}
            margin="auto"
            display="flex"
            justifyContent="center"
          >
            <Box>
              <IconButton
                className={classes.iconButton}
                onClick={handleToggleShowDescription}
              >
                {showDescription ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            </Box>
            <Box>
              <Box position="relative">
                {!showDescription && (
                  <Typography variant="h1" align="center">
                    {title}
                  </Typography>
                )}
                {showDescription && (
                  <Typography variant="h5" className={classes.description}>
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </Typography>
                )}
              </Box>
              {groupedProjects[title]?.map((project) => (
                <React.Fragment key={project._id}>
                  <Link href={`/projects/${project._id}`} passHref>
                    <Button
                      onMouseEnter={createMouseEnterHandler(project)}
                      onMouseLeave={createMouseLeaveHandler(project)}
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
        </Box>
      </Container>
      {groupedProjects[title]?.map((project) => (
        <Fade
          timeout={{ enter: 1000, exit: 1000 }}
          key={project._id}
          in={activeProject === project}
          direction="up"
        >
          <Box
            style={{
              zIndex: 0,
              pointerEvents: "none",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${getImageSrc(
                project?.gallery?.[0]?.path
              )})`,
              backgroundSize: "cover",
            }}
          />
        </Fade>
      ))}
    </Box>
  );
};

export default function ThemenPage({ preview, allProjects, allThemes }) {
  const groupedProjects = groupBy(
    allProjects.entries,
    (p) => p.theme?.title || "none"
  );

  return (
    <React.Fragment>
      <ScrollIndicator />
      <Layout>
        <Head>
          <title>Themen - Frauen und Fiktion </title>
        </Head>
        {allThemes.entries.map((theme) => {
          return (
            <ThemeBox
              key={theme.title}
              groupedProjects={groupedProjects}
              theme={theme}
            />
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
    props: {
      preview,
      allProjects,
      allThemes: {
        ...allThemes,
        entries: allThemes.entries.filter((t) => !t.hidden),
      },
    },
  };
}
