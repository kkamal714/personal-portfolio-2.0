import React from 'react'
import { Card, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: { marginTop: '20px', borderRadius: '40px' },
  },
}))

export default function CustomCard({ children }) {
  const classes = useStyles()
  return <Card className={classes.root}>{children}</Card>
}
