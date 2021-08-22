import React, { useState} from 'react';
import { getAllCollections, getCollectionEntries, getSingleton, getAllSingletons } from '@/api/api'
import { getHeroImageSrc } from '@/api/constants'
import Link from 'next/link'
import Box from '@material-ui/core/Box';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollama, Step } from 'react-scrollama';


const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    top: 0,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  headline: {
    position: 'absolute',
    top: '33%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    // opacity: props => props.isActive ? 1 - props.progress : 1,
  }
}));

const Teaser = React.forwardRef((props, ref) => {
  const { project, progress, isActive, currentStepIndex, index } = props;
  const classes = useStyles(props);
  const isVisible = currentStepIndex -1 < index;
  const nextActive = currentStepIndex > index ;
  const progVal = progress.toFixed(2);
  return (
    <Box ref={ref} className={classes.root}>
      <div className={classes.headline}>
      	<Link href={`/projects/${project._id}`}>
          <a>
	          <Typography  variant="h1">{project.title}</Typography>
	          <Typography  variant="h6">{project.theme.display} {progVal}</Typography>
          </a>
        </Link>
      </div>
      <Box
        // style={{transform: nextActive ? `translate(0, ${progVal * 100}%)` : 'translate(0,0)', opacity: nextActive ? 1 - progVal : 1 }}
      	width="100%"
      	component="img"
      	src={getHeroImageSrc(project.heroImage.path)}
      />
    </Box>
  );
});

Teaser.displayName = "Teaser";

const ProjectStream = props => {
	const {projects, currentStepIndex, currentStepProgress, onStepProgress, onStepEnter } = props
	return (
    <Scrollama
    	onStepEnter={onStepEnter}
    	onStepProgress={onStepProgress}
    	offset={1}
    >
      {projects.map((e,i) => 
      	<Step
      		key={i}
      		data={i}
      	>
      		<Teaser
      			index={i}
      			project={e}
      			currentStepIndex={currentStepIndex}
      			isActive={currentStepIndex === i}
      			progress={currentStepProgress} 
      		/>
      	</Step>
      )}
    </Scrollama>
	);
}

export default ProjectStream