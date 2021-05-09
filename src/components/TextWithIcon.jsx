import { Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    // fontSize: '47px',
    cursor: 'pointer',
    color: '#242B2E',
    width: '50%',
    boxShadow: '0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    padding: '20px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      '&:hover': {
        fontSize: '19px',
      },
    },
  },
  large: {
    // [theme.breakpoints.down('md')]: {
    fontSize: '48px',
    // },
  },
}))
export default function TextWithIcon({ text, icon, file }) {
  const classes = useStyles()
  return (
    <Button startIcon={icon} className={classes.box}>
      <a href={file} target="_blank" rel="noreferrer" download style={{ textDecoration: 'none', color: 'inherit' }}>
        {text}
      </a>
    </Button>
  )
}
