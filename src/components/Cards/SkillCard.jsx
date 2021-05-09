import React from 'react'
import CustomCard from '../CustomCard'
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb, SiFirebase } from 'react-icons/si'
import { Grid, IconButton } from '@material-ui/core'
import CustomLabel from '../CustomLabel'

import { makeStyles } from '@material-ui/core'
import CustomHeading from '../CustomHeading'
const useStyles = makeStyles((theme) => ({
  card: {
    padding: '20px 0px',

    [theme.breakpoints.up('md')]: {
      //
    },
    [theme.breakpoints.up('lg')]: {
      padding: '20px',
    },
  },
  icon: {
    paddingLeft: '15px',
    marginTop: '35px',
    cursor: 'pointer',
    // color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    // textAlign: 'center',
    display: 'flex',
    fontSize: '40px',
    margin: '0px auto',

    [theme.breakpoints.up('md')]: {
      marginTop: '15px',
      paddingLeft: '10px',
      fontSize: '48px',
    },
    '&:hover': {
      //   backgroundColor: theme.palette.primary.main,
      //   color: 'white',
      backgroundColor: theme.palette.primary.main,
      color: 'white',

      fontSize: '50px',
      [theme.breakpoints.down('md')]: {
        fontSize: '58px',
      },
    },
  },
  label: {
    textAlign: 'center',
  },
  heading: {
    textAlign: 'center',
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    marginBottom: '10px',
    fontWeight: 'bolder',
  },
}))

export default function SkillCard() {
  const classes = useStyles()
  const skills = [
    { icon: <FaReact />, label: 'REACT JS' },
    { icon: <FaNodeJs />, label: 'NODE JS' },
    { icon: <SiMongodb />, label: 'MONGODB' },
    { icon: <SiFirebase />, label: 'FIREBASE' },
    { icon: <FaAws />, label: 'AWS' },
  ]
  return (
    <CustomCard className={classes.card}>
      <CustomHeading heading="SKILLS" className={classes.heading} />
      <Grid container>
        {skills.map((item, index) => (
          <Grid item xs={6} md={4} key={index}>
            <IconButton color="inherit" className={classes.icon}>
              {item.icon}
            </IconButton>
            <CustomLabel label={item.label} className={classes.label} />
          </Grid>
        ))}
      </Grid>
    </CustomCard>
  )
}
