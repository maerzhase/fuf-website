import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "./Image";
import cx from "classnames";
import smoothscroll from "smoothscroll-polyfill";
if (global.window) {
  smoothscroll.polyfill();
}
const MOBILE_HEIGHT = "300px";

const useStyles = makeStyles((theme) => ({
  galleryContent: {
    width: "100%",
    height: (props) =>
      props.mobile ? MOBILE_HEIGHT : `calc(100vh - ${theme.spacing(10)}px)`,
    transition: theme.transitions.create("transform"),
    transform: (props) =>
      props.isOpen && !props.mobile ? "translate(-70%, 0)" : "translate(0, 0)",
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
      width: (props) =>
        `calc(((${props.mobile ? MOBILE_HEIGHT : "100vh"} - ${theme.spacing(
          12
        )}px) / 9) * 16)`,
      height: (props) =>
        `calc(${props.mobile ? MOBILE_HEIGHT : "100vh"} - ${theme.spacing(
          12
        )}px)`,
      maxWidth: "100vw",
    },
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
  const { project, isOpen, scrollToIndex, mobile, className } = props;
  const scrollContainerRef = React.useRef();
  const [trailer, setTrailer] = React.useState(null);
  const classes = useStyles({ isOpen, mobile });

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
      <div className={cx(classes.galleryContent, className)}>
        <div className={classes.galleryWrap} ref={scrollContainerRef}>
          {trailer && (
            <div
              className={classes.trailer}
              dangerouslySetInnerHTML={{ __html: trailer }}
            />
          )}
          {project.gallery?.map((img) => (
            <Image item={img} key={img.path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
