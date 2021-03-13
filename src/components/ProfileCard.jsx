import { Avatar, Box, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomImage from './CustomImage'
import CodeImage from '../assets/images/background.jpg'
import ProfilePic from '../assets/images/profile-pic-2.jpeg'
import CustomHeading from './CustomHeading'
import CustomLabel from './CustomLabel'
import { Call, CloudDownload, Facebook, GitHub, Instagram, LinkedIn, WhatsApp } from '@material-ui/icons'
import TextWithIcon from './TextWithIcon'
import Resume from '../assets/docs/cv.pdf'
import CustomCard from './CustomCard'

const useStyles = makeStyles((theme) => ({
  image: {
    clipPath: 'polygon(100% 0%, 100% 75%, 50% 100%, 0% 75%, 0% 0%)',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      //
      height: '320px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '250px',
    },
  },
  profile: {
    display: 'grid',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
    top: '-180px',
    [theme.breakpoints.up('md')]: { top: '-108px' },
  },
  profileImage: {
    margin: '0px auto',
    display: 'flex',
    width: theme.spacing(40),
    height: theme.spacing(40),
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(19),
      height: theme.spacing(19),
    },
  },
  icon: {
    paddingLeft: '15px',
    marginTop: '35px',
    cursor: 'pointer',
    fontSize: '48px',
    [theme.breakpoints.up('md')]: {
      marginTop: '15px',
      paddingLeft: '10px',
      fontSize: '20px',
    },
    '&:hover': {
      color: theme.palette.primary.main,
      fontSize: '30px',
      [theme.breakpoints.down('md')]: {
        fontSize: '58px',
      },
    },
  },
  link: {
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  getIcon: {
    paddingTop: '2px',
    '&:hover': {
      fontSize: '28px',
    },
  },
  heading: {
    margin: '10px 0px 10px 0px',
    [theme.breakpoints.up('md')]: { margin: 0 },
  },
}))

export default function ProfileCard() {
  const classes = useStyles()
  return (
    <CustomCard>
      <Box>
        <CustomImage image={CodeImage} className={classes.image} />
        <div className={classes.profile}>
          <Avatar src={ProfilePic} className={classes.profileImage} />
          <CustomHeading heading="Kamal Kumar Sha" className={classes.heading} />
          <CustomLabel label="Full Stack Developer" />
          <Box>
            <a href="https://github.com/kkamal714" target="_blank" rel="noreferrer" className={classes.link}>
              <GitHub className={classes.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/kamal-kumar-sha-107a75155/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LinkedIn className={classes.icon} />
            </a>
            <a href="https://www.instagram.com/sirf.kamal/" target="_blank" rel="noreferrer" className={classes.link}>
              <Instagram className={classes.icon} />
            </a>
            <a href="https://www.facebook.com/kamal.sirf" target="_blank" rel="noreferrer" className={classes.link}>
              <Facebook className={classes.icon} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+917053617608"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <WhatsApp className={classes.icon} />
            </a>
          </Box>
        </div>
        <Box display="flex">
          <TextWithIcon text="GET CV" icon={<CloudDownload className={classes.getIcon} />} file={Resume} />
          <TextWithIcon text="CONTACT ME" icon={<Call className={classes.getIcon} />} />
        </Box>
      </Box>
    </CustomCard>
  )
}
