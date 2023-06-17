'use Client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './components/NavBar'
import Footer from './components/Footer'
import Charac from './components/Characteristics'
import Form from './components/Form'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Nav/>
    <Form/>
    <Charac/>
    <Footer/>
    </>
  )
}
