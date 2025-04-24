import React from 'react'
import Header from './Header/Header'
import MainHeader from './Header/MainHeader'
import TechnoHireWork from './TechnoHireWork/TechnoHireWork'
import RecentJob from './RecentJobs/RecentJob'
import TopCompanies from './TopCompanies/TopCompanies'
import Footer from './Footer/Footer'
import PopularCategory from './PopularCategory/PopularCategory'
import PostAJob from './PostAJob/PostAJob'



const Home = () => {
  return (
    <div>
<Header/>
<MainHeader/>
<PostAJob/>
<PopularCategory/>
<TechnoHireWork/>
<RecentJob/>
<TopCompanies/>
<Footer/>
    </div>
  )
}

export default Home
