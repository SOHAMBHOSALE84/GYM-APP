import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import FormPage from '../components/FormPage'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
        <Banner id="banner"/>
        <About id="about"/>
        <Services id="services"/>
        <FormPage id="formpage"/>

    </div>
  )
}
