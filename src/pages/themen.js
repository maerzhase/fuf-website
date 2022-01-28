import React from "react";
import { getCollectionEntries } from "@/api/api";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Container from "@/components/container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { groupBy } from "lodash";
import ReactMarkdown from "react-markdown";
import { getImageSrc } from "@/api/constants";
import Slide from '@material-ui/core/Slide';

const ThemeBox = (props) => {
  const { theme, groupedProjects } = props;

  const { title, description } = theme;
  const [activeProject, setActiveProject] = React.useState(null);
  console.log(groupedProjects);
  const createMouseEnterHandler = (project) => () => {
    setActiveProject(project);
  }
  const createMouseLeaveHandler = (project) => () => {
    setActiveProject(null);
  }
  return (
    <Box key={title} style={{position: 'relative' }}>
      <Container>
	<Box style={{zIndex: 1, position: 'relative', }} minHeight="100vh" display="flex" alignItems="center">
          <Box>
            <Typography align="center" variant="h4">
              <ReactMarkdown>{description}</ReactMarkdown>
            </Typography>
            <Typography variant="h1" align="center">
              {title}
            </Typography>
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
      </Container>
            {groupedProjects[title]?.map((project) => (
		<Slide in={activeProject === project} direction="up">
                <Box
		  style={{
		    zIndex: 0, 
		    pointerEvents:'none', 
		    position: 'fixed',
		    top: 0,
		    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${getImageSrc(
                      project?.gallery?.[0]?.path
		    )})`,
		    backgroundSize: 'cover' 
                  }}
		/>
		</Slide>
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
      <Layout>
        <Head>
          <title>Themen - Frauen und Fiktion </title>
        </Head>
        {allThemes.entries.map((theme) => {
          return <ThemeBox groupedProjects={groupedProjects} theme={theme} />;
        })}
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps({ preview = null }) {
  const allProjects = (await getCollectionEntries("project")) || [];
  const allThemes = (await getCollectionEntries("theme")) || [];
  return {
    props: { preview, allProjects, allThemes },
  };
}
