import React from "react";
import { getImageSrc } from "@/api/constants";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  galleryContent: {
    width: "100%",
    height: `calc(100vh - ${theme.spacing(10)}px)`,
    transition: theme.transitions.create("transform"),
    transform: (props) =>
      props.isOpen ? "translate(-70%, 0)" : "translate(0, 0)",
  },
  galleryWrap: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    position: "relative",
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
  img: {
    width: "auto",
    height: "100%",
  },
  nextButton: {
    zIndex: 100,
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(50%, -100%)",
  },
}));

const Gallery = (props) => {
  const { project, isOpen, scrollToIndex } = props;
  const scrollContainerRef = React.useRef();
  const [trailer, setTrailer] = React.useState(null);
  const classes = useStyles({ isOpen });

  React.useEffect(() => {
    if (!trailer && project.trailer) {
      setTrailer(project.trailer);
    }
  }, []);

  React.useEffect(() => {
    if (
      scrollContainerRef.current &&
      scrollContainerRef.current.children?.[scrollToIndex]
    ) {
      const { offsetLeft } =
        scrollContainerRef.current.children?.[scrollToIndex];
      scrollContainerRef.current.scroll({
        left: offsetLeft,
        top: 0,
        behavior: "smooth",
      });
    }
  }, [scrollToIndex, scrollContainerRef]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      // TODO: This is a hack for a bug
      // https://github.com/mui/material-ui/issues/32251
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1);
    };
  }, [isOpen]);
  if (project.gallery.length === 0) return null;
  return (
    <>
      <div className={classes.galleryContent}>
        <div className={classes.galleryWrap} ref={scrollContainerRef}>
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
    </>
  );
};

export default Gallery;
