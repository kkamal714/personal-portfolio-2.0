/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import ProfileCard from '../components/ProfileCard'
import SkillCard from '../components/Cards/SkillCard'
import BioDataCard from '../components/Cards/BioDataCard'
const useStyles = makeStyles((theme) => ({
  root: {
    // flex: 1,
    // padding: '15px 25px 15px 15px',
    [theme.breakpoints.up('md')]: {
      padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      //
    },
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item md={1} lg={1} />
      <Grid item xs={12} md={10} lg={4}>
        <ProfileCard />
      </Grid>
      <Grid item md={1} lg={1} />

      <Grid item xs={12} md={10} lg={4}>
        <BioDataCard />
        <SkillCard />
      </Grid>
      <Grid item md={1} lg={2} />
    </Grid>
  )
}
