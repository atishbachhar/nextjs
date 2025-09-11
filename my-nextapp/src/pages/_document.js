// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="author" content="" />

        {/* Local CSS from public/css */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />


        {/* Favicon */}
        <link rel="icon" href="/images/fevicon.png" type="image/gif" />

        {/* External libraries */}
        <link
          rel="stylesheet"
          href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Dancing+Script:400,700|Poppins:400,700&display=swap"
          rel="stylesheet"
        />      
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
          media="screen"
        />
        <link
          href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
