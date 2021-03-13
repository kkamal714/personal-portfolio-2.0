/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.up('md')]: {
      //
    },
    [theme.breakpoints.up('lg')]: {
      //
    },
  },
}))

export default ({ text, className }) => {
  const classes = useStyles()
  const renderClass = className ? `${className} ${classes.button}` : classes.button
  return <Button className={renderClass}>{text}</Button>
}
