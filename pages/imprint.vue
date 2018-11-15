<template>

    <div>

      <header>

        <app-nav/>

        <half-height class="highlight-gray d-flex align-items-center">

           <div class="container hero-text">
             <h1>Imprint</h1>
           </div>

        </half-height>

      </header>

      <main>

        <div class="container text-spacing">

          <h2>Information provided according to Sec. 5 German Telemedia Act (TMG):</h2>
          <p>Christoph Stitz<br>
           SteamPixel Media<br>
          Erthalstraße 6<br>
          97074 Würzburg</p>

          <h2>Contact:</h2>
          <p>Telephone: 0931 417 282 21<br>
          Email: info@steampixel.de</p>

          <h2>VAT:</h2>
          <p>VAT Id number according to Sec. 27 a German Value Added Tax Act:<br>
          DE294503272</p>

          <h2>Information concerning professional indemnity insurance:</h2>
          <p>Name and residence of insurer:<br>
          Hiscox Europe Underwriting Limited<br>
          Zweigniederlassung für die Bundesrepublik Deutschland<br>
          Hauptbevollmächtigter: Robert Dietrich<br>
          <br>
          Arnulfstraße 31<br>
          80636 München<br>
          Tel.: +49 89 54 58 01 100<br>
          Fax: +49 89 54 58 01 199<br>
          E-Mail: hiscox.info@hiscox.de<br>
          Internet: www.hiscox.de</p>
          <p>Scope of insurance: Deutschland</p>

          <h2>Responsible for contents acc. to Sec. 55, para. 2 German Federal Broadcasting Agreement (RstV):</h2>
          <p>Christoph Stitz<br>
          Erthalstraße 6<br>
          97074 Würzburg</p>

          <h2>Dispute resolution</h2>
          <p>We do not take part in online dispute resolutions at consumer arbitration boards.</p>

          <h3>Liability for Contents</h3>
          <p>As service providers, we are liable for own contents of these websites according to Sec. 7, paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.</p>
          <p>Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.</p>

          <h3>Liability for Links</h3>
          <p>Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.</p>
          <p>The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.</p>

          <h3>Copyright</h3>
          <p>Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.<br> The commercial use of our contents without permission of the originator is prohibited.</p>
          <p>Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.</p>

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
