import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainSection from '../components/MainSection/MainSection'
import RightSection from '../components/RightSection/RightSection'
import Sidebar from '../components/Sidebar/Sidebar'

const Home: NextPage = () => {
  return (
    <div className='flex gap-2'>
      <Sidebar />
      <MainSection />
      <RightSection/>
    </div>
  )
}

export default Home
