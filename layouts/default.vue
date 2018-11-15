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

  .disclaimer {
    font-size:0.8rem;
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
  }

  a.btn {
    text-decoration: none;
  }

  /* Make button group breakable */
  /* .btn-group {
    display: flex;
  } */

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
