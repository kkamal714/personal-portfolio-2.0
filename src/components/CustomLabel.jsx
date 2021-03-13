/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '35px',
    [theme.breakpoints.up('md')]: {
      fontSize: '15px',
      //
    },
    [theme.breakpoints.up('lg')]: {
      //
    },
  },
}))

export default ({ className, label }) => {
  const classes = useStyles()
  const renderClass = className ? `${className} ${classes.label}` : classes.label

  return <Typography className={renderClass}>{label}</Typography>
}
