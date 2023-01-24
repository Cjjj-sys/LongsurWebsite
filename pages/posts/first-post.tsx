import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/layout"

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>First POst</title>
      </Head>
      <Image 
        src="/gun1.png"
        height={144}
        width={344}
        />
      <h1>First Page!</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  )
}

export default FirstPost