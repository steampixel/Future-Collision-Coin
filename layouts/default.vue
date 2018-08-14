<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>

  /* Fonts */
  body {
    color: #000;
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5, h6{
    text-transform: uppercase;
  }

  h2{
    font-size: 2rem;
    font-weight: bold;
  }

  @media screen and (max-width : 700px){
    body {
      font-size: 1.5rem;
    }

    h2{
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width : 400px){
    body {
      font-size: 1rem;
    }

    h2{
      font-size: 1rem;
    }
  }

  /* Links */
  a {
    color: #000;
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

  /* Spaces */
  .text-spacing{
    padding-top:50px;
  }
  .text-spacing > p, .text-spacing > ul{
    margin-bottom: 50px;
  }

  /* hero image */
  .cover-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    position: relative;
  }

  .background-filter{
    background-color: rgba(0,0,0,.6);
    height:100%;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .hero-text h1{
    font-size: 5rem;
  }

  .hero-text h2{
    font-weight: normal;
  }

  @media screen and (max-width : 650px){
    .hero-text h1{
      font-size: 3rem;
    }
    .hero-text h2{
      font-size: 1rem;
    }
  }

  @media screen and (max-width : 360px){
    .hero-text h1{
      font-size: 2rem;
    }
    .hero-text h2{
      font-size: 0.7rem;
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



</style>
