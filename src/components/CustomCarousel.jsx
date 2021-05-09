import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Hidden, IconButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  arrow: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    '&:hover': { backgroundColor: 'white', color: theme.palette.primary.main },
  },
  nextArrow: {
    position: 'absolute',
    padding: '12px',
    fontSize: '28px',
    display: 'block',
    height: '50px',
    width: '50px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    right: '-7%',
    top: '44%',
  },
  prevArrow: {
    left: '-7%',
  },
}))

export default function CustomCarousel({ children }) {
  const classes = useStyles()

  const NextArrow = ({ onClick }) => {
    return (
      <Hidden mdDown>
        <IconButton className={`${classes.nextArrow} ${classes.arrow}`} onClick={onClick} color="inherit">
          <IoIosArrowForward />
        </IconButton>
      </Hidden>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <Hidden mdDown>
        <IconButton
          className={`${classes.arrow} ${classes.nextArrow} ${classes.prevArrow}`}
          onClick={onClick}
          color="inherit"
        >
          <IoIosArrowBack />
        </IconButton>
      </Hidden>
    )
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    swipe: true,
    autoplay: true,
    // arrows: arrows ? false : true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    // responsive: [
    //   {
    //     breakpoint: 1700,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       arrows: false,
    //     },
    //   },
    // ],
  }

  return <Slider {...settings}>{children}</Slider>
}
