/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.up('md')]: {
      //
    },
    [theme.breakpoints.up('lg')]: {
      //
    },
  },
}))

export default ({ className, image }) => {
  const classes = useStyles()
  const renderClass = className ? `${className} ${classes.image}` : classes.image

  return <img src={image} alt="custom" className={renderClass} />
}
