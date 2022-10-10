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
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ReactMarkdown from "react-markdown";
import { PlayIcon } from "@/icons/Play";
import { CloseIcon } from "@/icons/Close";
import { GalleryIcon } from "@/icons/Gallery";

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
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
      maxWidth: "100%",
      paddingRight: 0,
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
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  nextButton: {
    position: "absolute",
    top: "50vh",
    right: 0,
    zIndex: 100,
    transform: "translate(0%,-50%)",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  itemWrapper: {
    borderTop: `1px solid ${theme.palette.grey[800]}`,
    borderBottom: `1px solid ${theme.palette.grey[800]}`,
  },
  item: {
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "default",
    },
    height: 200,
    //borderBottom: `1px solid ${theme.palette.grey[800]}`,
    borderRight: `1px solid ${theme.palette.grey[800]}`,
    "&:nth-child(3n+3)": {
      borderRight: "none",
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  hideMobile: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  hideDesktop: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const ITEM_TEXT = {
  trailer: "Trailer ansehen",
  image: "Galerie ansehen",
};

const ITEM_ICON = {
  trailer: PlayIcon,
  image: GalleryIcon,
};

export default function Post({ project, preview }) {
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [itemIndex, setItemIndex] = React.useState(0);
  const classes = useStyles({ isGalleryOpen });

  const handleToggleIsGalleryOpen = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  const hasTrailer = !!project?.trailer;
  const maxIndex = project?.gallery.length + (hasTrailer ? 1 : 0);

  const handleClickNextButton = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (itemIndex < maxIndex - 1) {
      setItemIndex(itemIndex + 1);
    } else {
      setItemIndex(0);
    }
  };

  const itemActions = React.useMemo(() => {
    return {
      trailer: () => {
        setIsGalleryOpen(true);
        setItemIndex(0);
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      },
      image: () => {
        setIsGalleryOpen(true);
        setItemIndex(1);
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      },
    };
  }, []);

  const specialItems = React.useMemo(() => {
    const items = [];
    if (hasTrailer) {
      items.push({
        label: "trailer",
        item: project.trailer,
      });
    }
    if (project?.gallery) {
      items.push({
        label: "image",
        item: project.gallery,
      });
    }
    return items;
  }, [project]);

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
            {isGalleryOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <SliderArrowLarge fontSize="large" />
            )}
          </IconButton>
          <IconButton
            className={classes.nextButton}
            onClick={handleClickNextButton}
          >
            <SliderArrowLarge fontSize="large" />
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
              <Gallery
                mobile
                className={classes.hideDesktop}
                project={project}
                isOpen={isGalleryOpen}
                scrollToIndex={itemIndex}
              />
              <Typography variant="h6" gutterBottom component="div">
                <ReactMarkdown>{project.subtitle}</ReactMarkdown>
              </Typography>
              <Typography variant="body1" component="div" color="textSecondary">
                <ReactMarkdown>{project.credits}</ReactMarkdown>
              </Typography>
            </div>
            <Gallery
              className={classes.hideMobile}
              project={project}
              isOpen={isGalleryOpen}
              scrollToIndex={itemIndex}
            />
          </div>

          <Grid className={classes.itemWrapper} container spacing={0}>
            {specialItems.map((i) => {
              const Icon = ITEM_ICON[i.label];
              return (
                <Grid
                  key={i.label}
                  className={classes.item}
                  onClick={itemActions[i.label]}
                  item
                  xs={4}
                >
                  <Typography variant="subtitle2" align="center">
                    {project.title}
                  </Typography>
                  <Typography variant="h5" align="center">
                    {ITEM_TEXT[i.label]}
                  </Typography>

                  <Box mt={2}>
                    <Icon />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
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
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allEntries = (await getCollectionEntries("project")) || [];
  return {
    paths: allEntries.entries?.map((post) => `/projects/${post._id}`) || [],
    fallback: true,
  };
}
