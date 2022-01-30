import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import Layout from "@/components/Layout";
import { getProjectById, getCollectionEntries } from "@/api/api";
import Head from "next/head";
import { CMS_NAME } from "@/api/constants";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { getImageSrc } from "@/api/constants";
import { makeStyles } from "@material-ui/core/styles";
import SliderArrowLarge from "@/icons/SliderArrowLarge";
import IconButton from "@material-ui/core/IconButton";
import ReactMarkdown from "react-markdown";

const GALLERY_HEIGHT = "100vh";
const SCROLLBAR_HEIGHT = 10;
const PROJECT_CONTENT_WIDTH = 0.8;

const perc = (val) => `${val * 100}%`;

const useStyles = makeStyles((theme) => ({
  iconWrap: {
    position: "relative",
  },
  root: {
    paddingTop: theme.spacing(10),
    overflowX: "hidden",
  },
  title: {},
  content: {
    display: "flex",
    alignItems: "flex-start",
    // position: 'relative',
    // overflow: 'hidden',
    // minHeight: GALLERY_HEIGHT
    // overflowX: 'hidden',
  },
  textContent: {
    position: "relative",
    paddingRight: theme.spacing(4),
    minWidth: "70%",
    maxWidth: "70%",
  },
  galleryContent: {
    width: "100%",
    height: `calc(100vh - ${theme.spacing(10)}px)`,
    transition: theme.transitions.create("transform"),
    transform: (props) =>
      props.isGalleryOpen ? "translate(-70%, 0)" : "translate(0, 0)",
  },
  galleryWrap: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    "-webkit-overflow-scrolling": "touch",
    display: "flex",
    height: "100%",
    backgroundColor: theme.palette.common.black,
    "& > *": {
      marginRight: theme.spacing(2),
    },
  },
  trailer: {
    height: "100%",
    width: "100%",
    "& > iframe": {
      width: `calc(((100vh - ${theme.spacing(12)}px) / 9) * 16)`,
      height: `calc(100vh - ${theme.spacing(12)}px)`,
      maxWidth: "100vw",
    },
  },
  galleryToggle: {
    position: "absolute",
    top: "50vh",
    left: (props) => (props.isGalleryOpen ? "0%" : "70%"),
    transition: theme.transitions.create(["transform", "left"]),
    transform: (props) =>
      props.isGalleryOpen
        ? "translate(-50%,-50%) rotate(0deg)"
        : "translate(-50%,-50%) rotate(180deg)",
    zIndex: 100,
  },
  sliderArrowLarge: {
    fontSize: 70,
  },
  img: {
    width: "auto",
    height: "100%",
  },
}));

export default function Post({ project, preview }) {
  const router = useRouter();
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [trailer, setTrailer] = React.useState(null);
  const classes = useStyles({ isGalleryOpen });

  const handleToggleIsGalleryOpen = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  React.useEffect(() => {
    if (!trailer && project.trailer) {
      setTrailer(project.trailer);
    }
  }, []);

  if (!project) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <React.Fragment>
      <Layout preview={preview}>
        <Container className={classes.iconWrap}>
          <IconButton
            className={classes.galleryToggle}
            onClick={handleToggleIsGalleryOpen}
          >
            <SliderArrowLarge
              fontSize="large"
              className={classes.sliderArrowLarge}
            />
          </IconButton>
        </Container>
        <Container className={classes.root}>
          <div className={classes.content}>
            <div className={classes.textContent}>
              <Typography className={classes.title} variant="h2">
                {project.title}
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                <ReactMarkdown>{project.abstract}</ReactMarkdown>
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                <ReactMarkdown>{project.subtitle}</ReactMarkdown>
              </Typography>
              <Typography variant="body1" component="div">
                <ReactMarkdown>{project.credits}</ReactMarkdown>
              </Typography>
            </div>
            <div className={classes.galleryContent}>
              <div className={classes.galleryWrap}>
                {trailer && (
                  <div
                    className={classes.trailer}
                    dangerouslySetInnerHTML={{ __html: trailer }}
                  />
                )}
                {project.gallery?.map((img) => (
                  <img
                    key={img.path}
                    className={classes.img}
                    src={getImageSrc(img.path)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const project = await getProjectById(params.id);

  return {
    props: {
      preview,
      project: project.entries[0],
    },
  };
}

export async function getStaticPaths() {
  const allEntries = (await getCollectionEntries("project")) || [];
  return {
    paths: allEntries.entries?.map((post) => `/projects/${post._id}`) || [],
    fallback: true,
  };
}
