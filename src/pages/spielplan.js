import React, { useState } from "react";
import {
  getAllCollections,
  getCollectionEntries,
  getSingleton,
  getAllSingletons,
} from "@/api/api";
import Head from "next/head";
import Link from "next/link";
import { CMS_NAME } from "@/api/constants";
import Layout from "@/components/layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LinkIcon from "@/icons/Link";
import { isBefore, parse, format } from "date-fns";
import { de } from "date-fns/locale";
import { groupBy, orderBy } from "lodash";

const TypoCell = withStyles((theme) => ({
  root: (props) => ({
    ...(theme.typography[props.variant] || theme.typography.button),
    color: theme.palette.text[props.color] || "inherit",
  }),
}))(TableCell);

const useRowStyles = makeStyles((theme) => ({
  root: {
    color: (props) =>
      theme.palette.text[props.color] || theme.palette.text.primary,
    transition: theme.transitions.create("color"),
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  mobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}));

const toDate = (date) => {
  const [year, month, day] = date.split("-");
  return new Date(year, month, day);
};

const useFormatedDate = (date) => {
  const d = toDate(date);
  return format(d, "d. MMMM yyyy", { locale: de });
};

const MobileRow = (props) => {
  const { date, isPast } = props;
  const classes = useRowStyles(props);
  const formatedDate = useFormatedDate(date.date);
  return (
    <Box mb={5} py={1} borderBottom={1} color="grey.700" width="100%" display="flex" flexDirection="column">
      <Typography color="textPrimary" variant="subtitle1" component="div">{formatedDate}</Typography>
      <Typography color="textPrimary" variant="h5" component="div">{date.title}</Typography>
      <Typography  variant="subtitle1" component="div">{date.location}</Typography>
      <Button
        style={{marginLeft: 'auto'}}
        size="small"
        href={date.link}
        target="_blank"
        endIcon={<LinkIcon fontSize="inherit" />}
        color={isPast ? 'secondary' : 'default'}
      >
        Tickets
      </Button>
    </Box>
  )
}

const DateRow = (props) => {
  const { date, color } = props;
  const classes = useRowStyles(props);
  const formatedDate = useFormatedDate(date.date);
  return (
    <TableRow className={classes.root}>
      <TypoCell width="25%" variant="body1">
        {formatedDate}
      </TypoCell>
      <TypoCell width="40%">{date.title}</TypoCell>
      <TypoCell width="35%">{date.location}</TypoCell>
      <TypoCell width="40px">
        <Button
          href={date.link}
          target="_blank"
          endIcon={<LinkIcon fontSize="inherit" />}
          color={color}
        >
          Tickets
        </Button>
      </TypoCell>
    </TableRow>
  );
};

export default function Index({ preview, allEntries }) {
  const today = new Date();
  const classes = useRowStyles({});
  const [showPast, setShowPast] = React.useState(false);
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

  const groupedPast = groupBy(past, (p) => p.date.split("-")[0]);

  const pastByYear = Object.keys(groupedPast)
    .reverse()
    .map((year) => [
      year,
      orderBy(groupedPast[year], (d) => toDate(d.date), "desc"),
    ]);

  const handleToggleArchive = () => {
    setShowPast(!showPast);
  };
  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Box mt={14}>
            <Box mb={4}>
              <Typography variant="h2">Spielplan</Typography>
            </Box>
            <TableContainer className={classes.desktop}>
              <Table aria-label="simple table">
                <TableBody>
                  {future.map((date) => (
                    <DateRow key={date._id} date={date} />
                  ))}
                  {showPast &&
                    pastByYear &&
                    pastByYear.map(([year, dates]) => {
                      return (
                        <React.Fragment key={year}>
                          <TableRow>
                            <TypoCell color="secondary" variant="h3">
                              {year}
                            </TypoCell>
                            <TypoCell />
                            <TypoCell />
                            <TypoCell />
                          </TableRow>
                          {dates.map((date) => (
                            <DateRow
                              key={date._id}
                              date={date}
                              color="secondary"
                            />
                          ))}
                        </React.Fragment>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box className={classes.mobile}>
            {future.map((date) => (
              <MobileRow key={date._id} date={date} />
            ))}
            {showPast &&
                pastByYear &&
                pastByYear.map(([year, dates]) => {
                  return (
                    <React.Fragment key={year}>
                      <Box mb={5}>
                        <Typography color="textSecondary" variant="h3">
                          {year}
                        </Typography>
                      </Box>
                      {dates.map((date) => (
                        <MobileRow
                          key={date._id}
                          date={date}
                          isPast
                        />
                      ))}
                    </React.Fragment>
                  );
                })}
            </Box>
            <Box mt={4}>
              <Button
                onClick={handleToggleArchive}
                variant="outlined"
                fullWidth
              >
                {showPast ? "Hide" : "Show"} Archive
              </Button>
            </Box>
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export async function getStaticProps({ preview = null }) {
  const allEntries = (await getCollectionEntries("event")) || [];
  return {
    props: { preview, allEntries },
  };
}
