import React from 'react'
import Hero from './subcomponent/Hero'
import Hero1 from './subcomponent/Hero1'
import Service from "./subcomponent/Service.jsx"
import Desktop from "./subcomponent/Desktop.jsx"
import Privacy from "./subcomponent/Privacy.jsx"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Hero1/>
        <Service/>
        <Desktop/>
        <Privacy/>
    </div>
  )
}

export default Home