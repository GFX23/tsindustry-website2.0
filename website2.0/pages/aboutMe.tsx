import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const AboutMe: NextPage = () => {
  return (
    <div className="w-full flex-auto mx-auto">
      <Head>
        <title>ABOUT ME - TS INDUSTRY</title>
        <meta name="brief introduction of my skills" content="Created using next, react, typescript" />
        <link rel="icon" href="/grayscale_nobuffer.png" />
      </Head>
      <div className="absolute top-1/4 left-10 w-max">
        <p className="font-mono font-bold text-8xl">About Me!</p>
        <p className="text-2xl font-medium underline">I'am Thomas - Web Developer</p>
      </div>
    </div>
  )
}

export default AboutMe