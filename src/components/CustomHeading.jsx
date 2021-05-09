/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    // fontSize: '58px',

    fontSize: '32px',
    [theme.breakpoints.up('md')]: {},
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: '32px',
    //   // fontWeight: 400,
    // },
  },
}))

export default ({ className, heading }) => {
  const classes = useStyles()
  const renderClass = className ? `${className} ${classes.heading}` : classes.heading

  return <Typography className={renderClass}>{heading}</Typography>
}
