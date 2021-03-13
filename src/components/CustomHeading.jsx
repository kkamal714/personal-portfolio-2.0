/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.up('md')]: {
      //
    },
    [theme.breakpoints.up('lg')]: {
      //
    },
  },
}))

export default ({ className, heading }) => {
  const classes = useStyles()
  const renderClass = className ? `${className} ${classes.heading}` : classes.heading

  return <Typography className={renderClass}>{heading}</Typography>
}
