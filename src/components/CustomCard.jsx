import React from 'react'
import { Card, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '40px',
    margin: '15px',
    [theme.breakpoints.up('md')]: { margin: '20px 0px 0px 0px', borderRadius: '40px' },
  },
}))

export default function CustomCard({ children }) {
  const classes = useStyles()
  return <Card className={classes.root}>{children}</Card>
}
