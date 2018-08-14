<template>

    <div>

      <header>

        <app-nav/>

        <half-height class="highlight-gray">

             <div class="hero-text">
               <h1>Disclaimer</h1>
             </div>

        </half-height>

      </header>

      <main>

        <div class="container text-spacing">
          <h2>Never use the generated keys for real transactions</h2>
          <p>
            This service will generate real private bitcoin keys. But the cryptographic random source for the generator is not very trustworthy.
            It is made for speed and not for security.
            Furthermore the generation of keys in the browser is not save as they could get grabbed through malware or other attacks.
            So never use the generated keys for real transactions!
          </p>

          <h2>This is not a real service</h2>
          <p>
            As you have already supposed this is not a real service. It will not realy check your bitcoin keys.
            This is because the collision of bitcoin adresses is very rare. The collision is so unlikely that it would be more likely that our check function contains an error.
            Therefore, we decided to leave it empty. That's safer and will lead to the same result.
          </p>
        </div>

      </main>

      <app-footer />

    </div>

</template>

<script>

import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'
import HalfHeight from '~/components/HalfHeight.vue'

export default {
  components: {
    AppNav, AppFooter, HalfHeight
  }
}

</script>

<style>


</style>
