import Container from "./container";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import Button from "@material-ui/core/Button";

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
        <Box mt={10} display="flex" alignItems="center" width="100%">
          <Box flexGrow={1} display="flex" alignItems="center">
            <Typography variant="subtitle1">
              {" "}
              &copy; {new Date().getFullYear()} Frauen und Fiktion
            </Typography>
          </Box>
          <Box>
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
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
