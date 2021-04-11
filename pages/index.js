import { Form } from '@/components/index.js'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saiba o quanto você ganha para 💩</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
    </>
  )
}
