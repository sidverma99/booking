import React from 'react'
import "./home.css"
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import ProportyList from '../../components/proportyList/ProportyList'
import FeaturedProporties from '../../components/featuredProporties/FeaturedProporties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse Property Type</h1>
        <ProportyList/>
        <h1 className="homeTitle">Homes Guest Love</h1>
        <FeaturedProporties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home