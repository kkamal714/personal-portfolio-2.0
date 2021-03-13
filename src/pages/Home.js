/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
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

  return <div className={classes.root}>{/*  */}</div>
}
