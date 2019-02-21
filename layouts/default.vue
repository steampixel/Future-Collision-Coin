<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>

  /* Fonts */
  body {
    color: #000;
  }

  h1, h2, h3, h4, h5, h6{
    text-transform: uppercase;
    margin-bottom:25px;
  }

  p {
    margin-bottom: 25px;
  }

  @media screen and (min-width : 900px){
    h1, h2, h3, h4, h5, h6{
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }

  .supersize {
    font-size: 10rem;
  }

  .disclaimer {
    font-size:0.8rem;
  }

  /* Links */
  a {
    color: #000;
    text-decoration: underline;
  }

  a:hover {
    color: #000;
  }

  /* Navigation */
  nav a {
    color: #fff;
  }

  nav a:hover {
    color: #fff;
  }

  /* Buttons */
  .btn {
    border-radius: 0;
    width:100%;
    margin-bottom:5px;
    white-space: normal;
  }

  a.btn {
    text-decoration: none;
  }

  @media screen and (min-width : 500px){
    .btn{
      width:auto;
    }
  }

  /* hideoverflow */
  .break {
    word-break: break-all;
  }

  /* Spaces */
  /* .text-spacing{
    padding-top:50px;
  }
  .text-spacing > p, .text-spacing > ul{
    margin-bottom: 50px;
  } */

  /* Spacing */
  .has-margin-bottom-1 {
    margin-bottom:1rem;
  }
  .has-margin-bottom-2 {
    margin-bottom:2rem;
  }
  .has-margin-bottom-4 {
    margin-bottom:4rem;
  }

  /* hero image */
  .cover-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    position: relative;
  }

  .full-hight-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100% ;
    position: relative;
  }

  /* hero text */
  .hero-text {
    text-align: center;
    color: white;
  }

  .hero-text h1{
    font-size: 3rem;
  }

  .hero-text h2{
    font-weight: normal;
    font-size: 1rem;
  }

  @media screen and (min-width : 900px){
    .hero-text h1{
      font-size: 5rem;
    }
    .hero-text h2{
      font-size: 2rem;
    }
  }

  /* highlight section */
  .highlight{
    color: #fff;
  }
  .highlight a {
    color: #fff;
  }

  .highlight a:hover {
    color: #fff;
  }

  .highlight-gray{
    background-color: #111;
  }

  /*
    smooth scrolling
  */
  html {
    scroll-behavior: smooth;
  }

</style>
