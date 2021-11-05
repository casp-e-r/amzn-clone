import Head from 'next/head'
import Banner from '../src/Components/Banner'
import Feed from '../src/Components/Feed'
import Navbar from '../src/Components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Banner/>
      <Feed/>
    </div>
  )
}
