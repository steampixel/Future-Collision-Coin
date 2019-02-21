<template>
  <div>

    <!-- <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true" @vdropzone-file-added="loadFile"></dropzone> -->

    <span class="upload-btn-wrapper" v-if="step!='check'">
      <button class="btn btn-danger">Upload and check FCC file</button>
      <input class="btn" type="file" @change="loadFile">
    </span>

    <p v-if="step=='check'">Checking {{ticks}} / {{linesCount}}</p>
    <p v-if="step=='check'" class="break">{{currentCheckKey}}</p>

    <p v-if="step=='done'">
      Sorry! No collisions found :-( Come back in a few years, ask your grandson to do so,
      buy more key packages or finally make a donation to
      <a target="_blank" href="https://www.welthungerhilfe.org/donate/">Welthungerhilfe</a>,
      <a href="https://www.betterplace.org" target="_blank">betterplace.org</a>,
      <a target="_blank" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly">WWF</a> or
      <a href="https://my.seashepherd.org/donate" target="_blank">Sea Shepherd</a>.
    </p>

    <p v-if="step=='fileError'">
      Sorry! The file format is not supported or the file is corrupt. Please try another package.
    </p>

  </div>
</template>

<script>

  // import Dropzone from 'nuxt-dropzone'
  // import 'nuxt-dropzone/dropzone.css'

  export default {
    components:{
      // Dropzone
    },
    data: function(){
      return {
        step:'start',
        ticks: 0,
        lines: 0,
        currentCheckKey:'',
        options: {
          url:'https://foo.bar',
          parallelUploads: 1,
          uploadMultiple: false,
          // maxFiles: 1,
          acceptedFiles: '.fcc.keys'
        }
      }
    },
    computed:{
      linesCount: function(){
        return this.lines.length;
      }
    },
    mounted() {
      // Everything is mounted and you can access the dropzone instance
      // const instance = this.$refs.el.dropzone
    },
    methods:{
      loadFile: function(ev){
        var component = this;
        const file = ev.target.files[0];
        const reader = new FileReader();

        reader.onload = event => {
          component.check(event.target.result);
        };

        reader.readAsText(file);

      },
      check: function(contents){
        this.step = 'check'
        this.ticks = 0
        this.lines = contents.split("\n")
        var component = this
        // Do not use a normal for loop here because it will block the browser ui and vue reactivity!
        // Use timeout instead
        function nextTick() {

          // Heavy code goes here...
          if(component.lines[component.ticks].length==64){

            // Just display the address
            component.currentCheckKey = component.lines[component.ticks]

            // Do not really check the address because it makes no difference if we check it or not

            // Init next tick
            component.ticks++;
            if (component.ticks < component.lines.length) {
                setTimeout(nextTick, 0);
            }else{
              component.step='done'
            }

          }else{
            component.step = 'fileError'
          }

        }

        nextTick()

      }
    }

  }

</script>


<style>

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}



/* dropzone */
/* .vue-dropzone {
  border: 0;
  font-family: inherit;
  letter-spacing: inherit;
  color: inherit;
}

dropzone {
  min-height: 100px;
  border: 0;
  background: white;
  background-color: transparent;
  padding: 0;
} */


</style>
