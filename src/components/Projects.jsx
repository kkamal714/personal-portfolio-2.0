import React from 'react'
import ProjectsCard from './Cards/ProjectsCard'
import CustomCarousel from '../components/CustomCarousel'
import Food from '../assets/images/food_ordering.png'
import Covid from '../assets/images/covid.png'
import BasketBall from '../assets/images/basketball.png'
import Todo from '../assets/images/todo.png'
import Aggarwal from '../assets/images/aggarwal.png'
import Mahasukh from '../assets/images/mahasukh.png'

export default function Projects() {
  const projects = [
    {
      image: Aggarwal,
      name: 'Aggarwal Stores Web App',
      description: 'A Grocery Store',
      technologies: 'React Js,Bootstrap',
      link: 'https://aggarwal-stores.vercel.app/',
    },
    {
      image: Mahasukh,
      name: 'Mahasukh Tea Web App',
      description: 'A Tea Shop',
      technologies: 'React Js,Material-UI',
      link: 'https://mahasukh-tea.vercel.app/',
    },
    {
      image: Food,
      name: 'Food Ordering Web App',
      description: 'A Food Delivery Web App',
      technologies: 'React Js,Material-UI',
      link: 'https://food-ordering-ded9tj2lw-kkamal714.vercel.app/',
    },
    {
      image: Covid,
      name: 'Covid-19 India',
      description: 'Covid Records',
      technologies: 'React Js,Material-UI',
      link: 'https://covid19-india.vercel.app/',
    },
    {
      image: BasketBall,
      name: 'BasketBall Website',
      description: 'For BasketBall Players',
      technologies: 'React Js,Bootstrap',
      link: 'https://basketball-website-challenge.vercel.app/',
    },
    {
      image: Todo,
      name: 'Todo App',
      description: 'To Make Todo',
      technologies: 'React Js,Material-UI,Redux',
      link: 'https://todo-react-redux-omega.vercel.app/',
    },
  ]

  return (
    <div>
      <CustomCarousel>
        {projects.map((item, index) => (
          <ProjectsCard project={item} key={index} />
        ))}
        {/* <ProjectsCard /> */}
      </CustomCarousel>
    </div>
  )
}
