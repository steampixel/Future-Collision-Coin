<template>
  <div>

    <div v-if="step<3">
      <input type="range" min="1000" max="1000000" step="1000" v-model="packageSize"><br/>
      Generate {{packageSize}} FCCs for {{totalPrice}}$
    </div>

    <div v-if="step==0">
      <button class="btn btn-primary" @click="step = 1">Generate now</button>
    </div>

    <div v-if="step==1">
      <div class="alert alert-danger">
        Are you Sure? Colliding crypto addresses are very rare. The investment in possibly existing private future keys carries a high risk. You may loose your entire investment.
        Please read the <a href="/disclaimer">disclaimer</a>. You should consider to donate your {{totalPrice}}$ instead to one of the great projects on
        <a target="_blank" href="https://www.betterplace.org">betterplace.org</a>.
      </div>
      <div class="btn-group" role="group">
        <a target="_blank" href="https://www.betterplace.org" class="btn btn-success">Donate on betterplace.org</a>
        <button class="btn btn-danger" @click="step = 2">I understand the risk! Generate my {{packageSize}} keys for {{totalPrice}}$</button>
      </div>
    </div>

    <div v-if="step==2">
      <div class="alert alert-danger">
        The truth is we dont't want your money. We will generate your keys for free.
        But you should seriously consider making a donation to a <a href="https://www.betterplace.org" target="_blank">betterplace.org</a> project instead of making uncertain investments.
      </div>
      <div class="btn-group" role="group">
        <a target="_blank" href="https://www.betterplace.org" class="btn btn-success">Donate on betterplace.org</a>
        <button class="btn btn-danger" @click="generate()">Stop it! Generate my {{packageSize}} keys for {{totalPrice}}$ now!</button>
      </div>
    </div>

    <div v-if="step==3">
      Generating...
      {{lastGeneratedBitcoinKeys}}
      {{generatedBitcoinKeysCount}} / {{packageSize}} keys generated
      <button class="btn btn-primary" @click="stop=true">Stop! Thats enough</button>
    </div>

    <div v-if="step==4">
      Your data is ready for download. {{generatedBitcoinKeysCount}} keys generated.
      <div class="btn-group" role="group">
        <button class="btn btn-success" @click="downloadData()">Download your package for free</button>
        <button class="btn btn-primary" @click="step=0">Generate a new package</button>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    data: function(){
      return {
        packageSize: 500000,
        step: 0,
        stop: false,
        generatedBitcoinKeys: []
      }
    },
    computed: {
      totalPrice: function () {
        if(this.step>1){
          return 0;
        }
        return this.packageSize / 10000
      },
      generatedBitcoinKeysCount: function () {
        return this.generatedBitcoinKeys.length
      },
      lastGeneratedBitcoinKeys: function () {
        var string = '';
        var show = 5;
        if(this.generatedBitcoinKeys.length>=show){
          for(let i=1;i<=show;i++){
            string = string+this.generatedBitcoinKeys[this.generatedBitcoinKeys.length-i]+' ';
          }
        }
        return string;
      },
    },
    methods:{
      generate: function(){
        this.generatedBitcoinKeys = [];
        this.step=3
        this.stop=false
        var component = this

        var ticks = 0

        // Do not use a normal for loop here because it will block the browser ui and vue reactivity!
        // Use timeout instead
        function nextTick() {

          // Heavy code goes here...
          let bitcoinPrivateKey = component.generateBitcoinPrivateKey();
          component.generatedBitcoinKeys.push(bitcoinPrivateKey)

          // Init next tick
          ticks++;
          if (ticks < component.packageSize) {
            if(!component.stop){
              setTimeout(nextTick, 0);
            }else{
              component.step=4
            }
          }else{
            component.step=4
          }
        }

        nextTick()

      },
      toHexString: function(byteArray) {
        return Array.from(byteArray, function(byte) {
          return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('')
      },
      generateBitcoinPrivateKey: function(){
        // http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript
        // Verifizierung hier möglich: https://walletgenerator.net/#

        var randArr = new Uint8Array(32) //create a typed array of 32 bytes (256 bits)
        window.crypto.getRandomValues(randArr) //populate array with cryptographically secure random numbers

        //some Bitcoin and Crypto methods don't like Uint8Array for input. They expect regular JS arrays.
        var privateKeyBytes = []
        for (var i = 0; i < randArr.length; ++i)
          privateKeyBytes[i] = randArr[i]

        //if you want to follow the step-by-step results in this article, comment the
        //previous code and uncomment the following
        //var privateKeyBytes = Crypto.util.hexToBytes("1184CD2CDD640CA42CFC3A091C51D549B2F016D454B2774019C2B2D2E08529FD")

        //hex string of our private key
        //var privateKeyHex = Crypto.util.bytesToHex(privateKeyBytes).toUpperCase()
        var privateKeyHex = this.toHexString(privateKeyBytes).toUpperCase()
        return privateKeyHex
      },
      downloadData(){

        let exportData = this.generatedBitcoinKeys.join("\n");

        // Trigger download
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(exportData));
        element.setAttribute('download', this.generatedBitcoinKeys.length+'.fcc.keys');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);


      }
    }

  }

</script>


<style>



</style>
