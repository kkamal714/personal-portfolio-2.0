import React from 'react'
import CustomCard from '../CustomCard'
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb, SiFirebase } from 'react-icons/si'
import { Grid, IconButton } from '@material-ui/core'
import CustomLabel from '../CustomLabel'

import { makeStyles } from '@material-ui/core'
import CustomHeading from '../CustomHeading'
const useStyles = makeStyles((theme) => ({
  card: {
    padding: '20px 0px 20px 10px',

    [theme.breakpoints.up('md')]: {
      //
    },
    [theme.breakpoints.up('lg')]: {
      padding: '30px',
    },
  },
  icon: {
    paddingLeft: '15px',
    marginTop: '35px',
    cursor: 'pointer',
    fontSize: '48px',
    // color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    // textAlign: 'center',
    display: 'flex',
    margin: '0px auto',

    [theme.breakpoints.up('md')]: {
      marginTop: '15px',
      paddingLeft: '10px',
      fontSize: '30px',
    },
    '&:hover': {
      //   backgroundColor: theme.palette.primary.main,
      //   color: 'white',
      backgroundColor: theme.palette.primary.main,
      color: 'white',

      fontSize: '50px',
      [theme.breakpoints.down('md')]: {
        fontSize: '58px',
      },
    },
  },
  label: {
    color: 'black',
    margin: '7px 0px',
  },
  heading: {
    textAlign: 'center',
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    marginBottom: '10px',
    fontWeight: 'bolder',
  },
}))

export default function BioDataCard() {
  const classes = useStyles()
  const calculateAge = (birthday) => {
    var today = new Date()
    var birthDate = new Date(birthday)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }
  const bioData = [
    { heading: 'Name', label: 'Kamal Kumar Sha' },
    { heading: 'Age', label: calculateAge('1999/08/05') },
    { heading: 'Residence', label: 'India' },
    { heading: 'Address', label: 'Delhi' },
    // { heading: <FaAws />, label: 'AWS' },
  ]

  return (
    <CustomCard className={classes.card}>
      <CustomHeading heading="BIO-DATA" className={classes.heading} />
      {bioData.map((item, index) => (
        <Grid container>
          <Grid item xs={6}>
            <CustomLabel label={item.heading} className={classes.label} />
          </Grid>
          <Grid item xs={6}>
            <CustomLabel label={item.label} />
          </Grid>
        </Grid>
      ))}

      {/* {skills.map((item, index) => (
          <Grid item lg={4} key={index}>
            <IconButton color="inherit" className={classes.icon}>
              {item.icon}
            </IconButton>
            <CustomLabel label={item.label} className={classes.label} />
          </Grid>
        ))} */}
    </CustomCard>
  )
}
