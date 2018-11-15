<template>
  <div>

    <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true" @vdropzone-file-added="loadFile"></dropzone>

    <div v-if="step=='check'">
      Checking {{ticks}} / {{linesCount}}<br/>
      {{currentCheckKey}}
    </div>

    <div v-if="step=='done'">
      Sorry! No collisions were found :-( Come back in a few years, ask your grandson to do so,
      buy more key packages or finally make a donation to
      <a target="_blank" href="https://www.welthungerhilfe.org/donate/">Welthungerhilfe</a>,
      <a href="https://www.betterplace.org" target="_blank">betterplace.org</a>,
      <a target="_blank" href="https://act.greenpeace.org/page/33188/donate/">Greenpeace</a> or
      <a href="https://my.seashepherd.org/donate" target="_blank">Sea Shepherd</a>.
    </div>

    <div v-if="step=='fileError'">
      Sorry! The file format is not supported or the file is corrupt. Please try another package.
    </div>

  </div>
</template>

<script>

  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'

  export default {
    components:{
      Dropzone
    },
    data: function(){
      return {
        step:'start',
        ticks: 0,
        lines: 0,
        currentCheckKey:'',
        options: {
          url: "http://httpbin.org/anything"
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
      const instance = this.$refs.el.dropzone
    },
    methods:{
      loadFile: function(file){
        var component = this;
        var reader = new FileReader();
        reader.addEventListener("loadend", function(event) {
          component.check(event.target.result);
          //console.log(event.target.result);
        });
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

            // Do not check the address because it makes no difference if we check it or not

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



</style>
