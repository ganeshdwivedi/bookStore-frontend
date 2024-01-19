import React from 'react'
import Hero from '../components/Hero'
import GetOver from '../components/GetOver'
import ComingSoon from '../components/ComingSoon'
import BirdsGonnaBeHappy from '../components/BirdsGonnaBeHappy'
import { StillNotSure } from '../components/StillNotSure'
import Ebook from '../components/Ebook'
import LatestArticle from '../components/LatestArticle'

const Home = () => {
    return (
        <>

            <Hero />
            <BirdsGonnaBeHappy />
            <GetOver />
            <ComingSoon />
            <StillNotSure />
            <Ebook />
            <LatestArticle />

        </>
    )
}

export default Home