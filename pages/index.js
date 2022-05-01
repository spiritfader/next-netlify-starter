import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
          Now i've added a line of text. I really think this will be quite nice. A fantastic start.
          Added a new line for more testing purposes, deploy preview maybe??
        </p>
      </main>

      <Footer />
    </div>
  )
}
