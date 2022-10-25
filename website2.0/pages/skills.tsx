import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Skills: NextPage = () => {
  return (
    <div className="w-full flex-auto mx-auto">
      <Head>
        <title>SKILLS - TS INDUSTRY</title>
        <meta name="brief introduction of my skills" content="Created using next, react, typescript" />
        <link rel="icon" href="/grayscale_nobuffer.png" />
      </Head>
      <div className="absolute top-1/4 left-10 w-max flex flex-col">
        <p className="font-mono font-bold text-8xl">Skills!</p>
        <div className="flex flex-row" >
          <Image src="/typescript.svg" width="250" height="250"/>
          <Image src="/react.svg" width="250" height="250"/>
          <Image src="/javascript.svg" width="250" height="250"/>
          <Image src="/next-js.svg" width="250" height="250"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
