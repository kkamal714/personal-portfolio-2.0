import React from 'react'
import CustomCard from '../CustomCard'
import CustomImage from '../CustomImage'
import Image1 from '../../assets/images/food_ordering.png'
import { Box, Grid, makeStyles } from '@material-ui/core'
import CustomHeading from '../CustomHeading'
import CustomLabel from '../CustomLabel'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    objectFit: 'contain',
    [theme.breakpoints.up('md')]: {
      //
    },
    [theme.breakpoints.up('lg')]: {
      height: '278px',
    },
  },
  heading: {
    textAlign: 'center',
    textDecoration: 'underline',
    fontSize: '20px',
    marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      fontSize: '32px',
      marginTop: '0px',
    },
    [theme.breakpoints.up('lg')]: {
      //
    },
  },
  root: {
    // textAlign: 'center',
    // textDecoration: 'underline',

    [theme.breakpoints.up('md')]: {
      //
    },
    [theme.breakpoints.up('lg')]: {
      //
      margin: '30px 0px 20px 0px',
      //   borderRadius: 'px',
    },
  },
  card: {
    padding: '25px',
    borderRadius: '0px',
  },
  //   heading2: {
  //     textAlign: 'center',
  //     textDecoration: 'underline',

  //     [theme.breakpoints.up('md')]: {
  //       fontSize: '40px',
  //     },
  //   },
}))

export default function ProjectsCard({ project }) {
  const classes = useStyles()
  return (
    <CustomCard className={classes.root}>
      {/* <CustomHeading heading="Work" className={classes.heading2} /> */}

      <Grid container className={classes.card}>
        <Grid item xs={12} md={6}>
          <CustomImage image={project.image} className={classes.image} />
        </Grid>
        <Grid item md={1} />
        <Grid item xs={12} md={5}>
          <CustomHeading heading={project.name} className={classes.heading} />
          <br />

          <CustomLabel label={project.description} />
          <br />

          <Box display="flex">
            <CustomLabel label="Technologies Used : " />
            <CustomLabel label={project.technologies} />
          </Box>
          <br />

          <a href={project.link} target="_blank" rel="noreferrer">
            {' '}
            View Here{' '}
          </a>
          {/* <Grid container>
            <Grid item lg={6}>
              <CustomLabel label="Technologies Used : " />
            </Grid>
            <Grid item lg={6}>
              <CustomLabel label="React Js" />
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </CustomCard>
  )
}
