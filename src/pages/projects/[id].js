import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import { getProjectById, getCollectionEntries } from "@/api/api";
import Typography from "@material-ui/core/Typography";
import { getImageSrc } from "@/api/constants";
import { makeStyles } from "@material-ui/core/styles";
import SliderArrowLarge from "@/icons/SliderArrowLarge";
import IconButton from "@material-ui/core/IconButton";
import ReactMarkdown from "react-markdown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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
  nextButton: {
    position: "absolute",
    top: "50vh",
    right: 0,
    zIndex: 100,
    transform: "translate(50%,-50%)",
    outline: "1px solid currentColor",
  },
}));

export default function Post({ project, preview }) {
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [itemIndex, setItemIndex] = React.useState(0);
  const classes = useStyles({ isGalleryOpen });

  const handleToggleIsGalleryOpen = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  const hasTrailer = !!project.trailer;
  const maxIndex = project.gallery.length + (hasTrailer ? 1 : 0);

  const handleClickNextButton = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (itemIndex < maxIndex - 1) {
      setItemIndex(itemIndex + 1);
    } else {
      setItemIndex(0);
    }
  };

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
          <IconButton
            variant="outlined"
            className={classes.nextButton}
            onClick={handleClickNextButton}
          >
            <ArrowRightIcon />
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
            <Gallery
              project={project}
              isOpen={isGalleryOpen}
              scrollToIndex={itemIndex}
            />
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
