import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GetOver from '../components/GetOver'
import ComingSoon from '../components/ComingSoon'
import BirdsGonnaBeHappy from '../components/BirdsGonnaBeHappy'
import { StillNotSure } from '../components/StillNotSure'
import Ebook from '../components/Ebook'
import LatestArticle from '../components/LatestArticle'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>

            <Hero />
            <GetOver />
            <ComingSoon />
            <BirdsGonnaBeHappy />
            <StillNotSure />
            <Ebook />
            <LatestArticle />

        </>
    )
}

export default Home