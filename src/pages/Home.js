/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import ProfileCard from '../components/ProfileCard'
const useStyles = makeStyles((theme) => ({
  root: {
    // flex: 1,

    [theme.breakpoints.up('md')]: {
      //
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
      <Grid item md={10} lg={4}>
        <ProfileCard />
      </Grid>
      {/* <Grid item md={10} lg={4}>
        Showase Card
      </Grid> */}
      <Grid item md={1} lg={2} />
    </Grid>
  )
}
