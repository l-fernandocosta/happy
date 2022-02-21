import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyClass extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet"></link>
        </Head>
        <Main/>
        <NextScript/>
      </Html>
    )
  }
}