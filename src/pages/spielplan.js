import React from "react";
import { getCollectionEntries } from "@/api/api";
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import LinkIcon from "@/icons/Link";
import { isBefore, parse, format } from "date-fns";
import { de } from "date-fns/locale";
import { groupBy, orderBy } from "lodash";
import Link from "next/link/";
import Collapse from "@material-ui/core/Collapse";

const TypoCell = withStyles((theme) => ({
  root: (props) => ({
    ...(theme.typography[props.variant] || theme.typography.button),
    color: theme.palette.text[props.color] || "inherit",
    "& a": {
      textTransform: "uppercase",
    },
  }),
}))(TableCell);

const useRowStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: (props) =>
      theme.palette.text[props.color] || theme.palette.text.primary,
    transition: theme.transitions.create("color"),
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  interactive: {
    cursor: "pointer",
  },
  collapseSize: {
    minWidth: "100%",
  },
}));

const toDate = (date) => {
  const [year, month, day] = date.split("-");
  return new Date(year, month - 1, day);
};

const useFormatedDate = (date) => {
  const d = toDate(date);
  return format(d, "d MMM yyyy", { locale: de });
};

const ProjectLink = (props) => {
  const { project, children } = props;
  if (!project) return <React.Fragment>{children}</React.Fragment>;
  return (
    <Link
      target="_blank"
      href="/projects/[id]"
      as={`/projects/${project?._id}`}
      passHref
    >
      <Button color="primary" variant="text" style={{ wordBreak: "break-all" }}>
        {children}
      </Button>
    </Link>
  );
};

const MobileRow = (props) => {
  const { date } = props;
  const formatedDate = useFormatedDate(date.date);
  return (
    <Box
      mb={5}
      py={1}
      borderBottom={1}
      color="grey.700"
      width="100%"
      display="flex"
      flexDirection="column"
    >
      <Typography
        color="textPrimary"
        variant="subtitle2"
        component="div"
        style={{ marginLeft: 8, textTransform: "uppercase" }}
      >
        {formatedDate}
      </Typography>
      <Typography color="textPrimary" variant="h5" component="div">
        <ProjectLink project={date.project}>{date.title}</ProjectLink>
      </Typography>
      <Typography
        color="textPrimary"
        variant="subtitle1"
        component="div"
        style={{ marginLeft: 8, textTransform: "uppercase" }}
      >
        {date.location}
      </Typography>
      {date.link && (
        <Button
          style={{ marginLeft: "auto" }}
          size="small"
          href={date.link}
          target="_blank"
          endIcon={<LinkIcon fontSize="small" />}
          variant="text"
          color="primary"
        >
          Tickets
        </Button>
      )}
    </Box>
  );
};

const DateRow = (props) => {
  const { date, color, open } = props;
  const classes = useRowStyles(props);
  const formatedDate = useFormatedDate(date.date);
  return (
    <TableRow className={classes.root}>
      <Collapse in={open} unmountOnExit>
        <TypoCell width="20%">{formatedDate}</TypoCell>
        <TypoCell width="35%">
          <ProjectLink project={date.project}>{date.title}</ProjectLink>
        </TypoCell>
        <TypoCell width="45%" style={{ wordBreak: "break-all" }}>
          {date.location}
        </TypoCell>
        <TypoCell>
          {date.link && (
            <Button
              href={date.link}
              target="_blank"
              endIcon={<LinkIcon style={{ fontSize: 12 }} />}
              variant="text"
              color="primary"
            >
              Tickets
            </Button>
          )}
        </TypoCell>
      </Collapse>
    </TableRow>
  );
};

const YearGroup = (props) => {
  const { year, dates } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useRowStyles();
  const handleClickYearRow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <TableRow onClick={handleClickYearRow} className={classes.interactive}>
        <TypoCell color={isOpen ? "primary" : "secondary"} variant="h3">
          {year}
        </TypoCell>
        <TypoCell />
        <TypoCell />
        <TypoCell />
      </TableRow>
      {dates.map((date) => (
        <DateRow key={date._id} date={date} color="primary" open={isOpen} />
      ))}
    </React.Fragment>
  );
};

const YearGroupMobile = (props) => {
  const { year, dates } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClickYearRow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Box mb={5} onClick={handleClickYearRow}>
        <Typography
          color={isOpen ? "textPrimary" : "textSecondary"}
          variant="h3"
        >
          {year}
        </Typography>
      </Box>
      <Collapse in={isOpen}>
        {dates.map((date) => (
          <MobileRow key={date._id} date={date} />
        ))}
      </Collapse>
    </React.Fragment>
  );
};
export default function Index({ preview, allEntries, future, pastByYear }) {
  const classes = useRowStyles({});

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Spielplan - Frauen und Fiktion </title>
        </Head>
        <Container>
          <Box mt={10}>
            <Box mb={4}>
              <Typography variant="h2">Spielplan</Typography>
            </Box>
            <TableContainer className={classes.desktop}>
              <Table aria-label="simple table">
                <TableBody>
                  {future.map((date) => (
                    <DateRow key={date._id} date={date} open />
                  ))}
                  {pastByYear &&
                    pastByYear.map(([year, dates]) => (
                      <YearGroup key={year} year={year} dates={dates} />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box className={classes.mobile}>
              {future.map((date) => (
                <MobileRow key={date._id} date={date} />
              ))}
              {pastByYear &&
                pastByYear.map(([year, dates]) => (
                  <YearGroupMobile key={year} year={year} dates={dates} />
                ))}
            </Box>
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps({ preview = null }) {
  const today = new Date();
  const allEntries = (await getCollectionEntries("event")) || [];

  const [past, future] = allEntries.entries.reduce(
    (acc, e) => {
      const date = parse(e.date, "yyyy-MM-dd", new Date());
      if (isBefore(date, today)) {
        acc[0].push(e);
      } else {
        acc[1].push(e);
      }
      return acc;
    },
    [[], []]
  );

  const sortedFuture = orderBy(future, (d) => toDate(d.date), "desc");

  const groupedPast = groupBy(past, (p) => p.date.split("-")[0]);

  const pastByYear = Object.keys(groupedPast)
    .reverse()
    .map((year) => [
      year,
      orderBy(groupedPast[year], (d) => toDate(d.date), "desc"),
    ]);

  return {
    props: { preview, pastByYear, future: sortedFuture },
  };
}
