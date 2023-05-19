import React from 'react'
import Navbar from './Navbar'
import Card from './card'
import Footer from './Footer'
import Carousel from './carousel'



export default function Home() {
   
    return (
        <div>
            <div><Navbar></Navbar></div>
           
            <div><Carousel/></div>
            <div className='m-3 d-flex'><Card/>
            <Card/>
            <Card/>
            <Card/></div>
            <div><Footer/></div>
           
        </div>
    )
}
