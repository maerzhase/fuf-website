import Container from "./container";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Button from "@mui/material/Button";

const LINKS = [
  {
    label: "instagram",
    href: "https://www.instagram.com/frauenundfiktion/",
    props: {
      target: "_blank",
    },
  },
  {
    label: "facebook",
    href: "https://www.facebook.com/frauenundfiktion/",
    props: {
      target: "_blank",
    },
  },
  {
    label: "datenschutz",
    href: "/datenschutz",
  },
  {
    label: "impressum",
    href: "/impressum",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 200,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Box
          mt={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          px={4}
          flexWrap="wrap"
        >
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} passHref>
              <Button
                component="a"
                {...l.props}
                size="small"
                variant="text"
                color="primary"
              >
                {l.label}
              </Button>
            </Link>
          ))}
          <br />
          <Typography
            variant="caption"
            style={{ height: 29, padding: "4px 5px" }}
          >
            &copy; {new Date().getFullYear()} Frauen und Fiktion
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
