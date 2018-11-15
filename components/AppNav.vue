<template>
  <nav class="navbar navbar-expand absolute-top navbar-transparent " color-on-scroll="400">
      <div class="container navbar-wrap">
          <div class="navbar-translate">
              <a class="navbar-brand" href="../" rel="tooltip" title="Wanderer.ai" data-placement="bottom" data-original-title="">
                  Future Collision Coin
              </a>
          </div>
          <!-- <div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="/img/blurred-image-1.jpg">
            <ul class="navbar-nav  ml-auto">


              <li class="nav-item">
                <a class="nav-link" href="/">
                  <i class="now-ui-icons design_app"></i>
                  <span>Home</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/imprint">
                  <i class="now-ui-icons design_app"></i>
                  <span>Imprint</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/privacy-policy">
                  <i class="now-ui-icons design_app"></i>
                  <span>Privacy Policy</span>
                </a>
              </li>

              </ul>
          </div> -->
      </div>
  </nav>
</template>

<style>
  .absolute-top{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  @media screen and (max-width : 500px){
    .navbar-expand .navbar-nav .nav-link {
        padding-left: 0;
    }
    .navbar > .container{
        display: block;
    }
    .ml-auto, .mx-auto {
        margin-left: 0 !important;
    }
    .justify-content-end {
        -ms-flex-pack: start !important;
        -webkit-box-pack: start !important;
        justify-content: flex-start !important;
    }
  }

</style>
