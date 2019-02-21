<template>
  <div>

    <div v-if="step==0">
      <p>Here you can generate your FCC's. Use the slider to define your package size and price:</p>
    </div>

    <div v-if="step<5">
      <input type="range" min="1000" max="1000000" step="1000" v-model="packageSize">
      <p>Generate {{packageSize}} FCC's for {{totalPrice}}</p>
    </div>

    <div v-if="step==0">
      <button class="btn btn-success" @click="step = 1">Generate now</button>
    </div>

    <div v-if="step==1">
      <p class="">
          Please confirm: Are you sure? Colliding crypto addresses are very rare! The investment in possibly existing private future keys carries a high risk!
          You may lose your entire investment. Please read the <a href="#disclaimer">disclaimer</a>.
          You should consider donating your {{totalPrice}} instead to one of the great projects on
          <a target="_blank" href="https://www.betterplace.org">betterplace.org</a>.
      </p>
      <div role="group">
        <a target="_blank" href="https://www.betterplace.org" class="btn btn-success">Donate {{totalPrice}} to betterplace.org</a>
        <button class="btn btn-danger" @click="step = 2">I understand the risk! Generate my {{packageSize}} keys for {{totalPrice}}</button>
      </div>
    </div>

    <div v-if="step==2">
      <p>
        Did you know that Bitcoin transactions use a lot of electricity and massively drive climate change?
        Not only Bitcoins will collide in the future. We will also destroy this world.
        It would therefore make more sense to donate your money to an organization like
        <a target="_blank" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly">WWF</a> or
        <a href="https://my.seashepherd.org/donate" target="_blank">Sea Shepherd</a> which fight for the nature.
      </p>
      <div role="group">
        <a target="_blank" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly" class="btn btn-success">Donate {{totalPrice}} to WWF</a>
        <a target="_blank" href="https://my.seashepherd.org/donate" class="btn btn-success">Donate {{totalPrice}} to Sea Shepherd</a>
        <button class="btn btn-danger" @click="step = 3">That's sad. Generate my {{packageSize}} keys for {{totalPrice}} now!</button>
      </div>
    </div>

    <div v-if="step==3">
      <p>
        Also, be aware that crypto currencies will further increase the distinction between poor and rich people, as redistribution in democratic systems is not possible.
        It would be better to invest in organizations like <a target="_blank" href="https://www.welthungerhilfe.org/donate/">Welthungerhilfe</a> that defend against ever-increasing poverty.
      </p>
      <div role="group">
        <a target="_blank" href="https://www.welthungerhilfe.org/donate/" class="btn btn-success">Donate {{totalPrice}} to Welthungerhilfe</a>
        <button class="btn btn-danger" @click="step = 4">I don't care. Generate my {{packageSize}} keys for {{totalPrice}} now!</button>
      </div>
    </div>

    <div v-if="step==4">
      <p>
        The truth is we don't want your money. We will generate your keys for free.
        But you should at least think about signing a few petitions on <a href="https://www.change.org/en-GB" target="_blank">change.org</a> to make the world a little better.
      </p>
      <div role="group">
        <a target="_blank" href="https://www.change.org/en-GB" class="btn btn-success">Sign petitions on change.org</a>
        <button class="btn btn-danger" @click="generate()">Stop it! Generate my {{packageSize}} keys for {{totalPrice}} now!</button>
      </div>
    </div>

    <div v-if="step==5">
      <p>Generating your keys ...</p>
      <p>
        {{generatedBitcoinKeysCount}} / {{packageSize}} FCC's generated
      </p>
      <button class="btn btn-primary" @click="stop=true;downloadData()">Stop! That are enough keys</button>
      <p class="break">
        <span v-for="(item, index) in lastGeneratedBitcoinKeys" v-bind:key="index">
          {{ item }}
        </span>
      </p>
    </div>

    <div v-if="step==6">
      <p>
        Your data is ready for download. {{generatedBitcoinKeysCount}} keys generated.
        After you have downloaded the data you can check it periodically.
      </p>
      <div role="group">
        <button class="btn btn-primary" @click="downloadData()">Download your FCC package</button>
        <a class="btn btn-danger" href="#monitor">Check your FCC's now</a>
        <button class="btn btn-success" @click="step=0">Generate a new package</button>
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
        if(this.step<4){
          return (this.packageSize / 10000)+'$'
        }
        return 'free'
      },
      generatedBitcoinKeysCount: function () {
        return this.generatedBitcoinKeys.length
      },
      lastGeneratedBitcoinKeys: function () {
        var keys = [];
        var show = 5;
        if(this.generatedBitcoinKeys.length>=show){
          for(let i=1;i<=show;i++){
            keys.push(this.generatedBitcoinKeys[this.generatedBitcoinKeys.length-i])
          }
        }
        return keys;
      },
    },
    methods:{
      generate: function(){
        this.generatedBitcoinKeys = [];
        this.step=5
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
              component.step=6
            }
          }else{
            component.step=6
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
        // Verify generated addresses: https://bitcoinpaperwallet.com/bitcoinpaperwallet/generate-wallet.html# (Validate Tab)

        var randArr = new Uint8Array(32) // Create a typed array of 32 bytes (256 bits)
        window.crypto.getRandomValues(randArr) // Populate array with cryptographically secure random numbers

        // Some Bitcoin and Crypto methods don't like Uint8Array for input. They expect regular JS arrays.
        var privateKeyBytes = []
        for (var i = 0; i < randArr.length; ++i)
          privateKeyBytes[i] = randArr[i]

        // Hex string of our private key
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
