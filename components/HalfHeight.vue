<template>
  <div class="half-height" v-bind:style="{ 'min-height': elementHeight }">
    <slot></slot>
  </div>
</template>

<script>

  // Wow! This is a lot of javascript
  // Here we try to prevent flickering and jumping of elements in mobile browsers that uses vh
  // Most mobile browsers have a status bar that pops in and out while scrolling up and down
  // That means that the vh height will change because of that behaviour
  // This script will give the elements a fixed min height in px and will only alter it if the orientation has changed

  export default {
    data: function(){
      return {
        elementHeight: '50vh',
        oldInnerWidth: 0,
        oldInnerHeight: 0
      };
    },
    mounted: function () {
      // Add resize event
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    beforeDestroy: function () {
      // Remove resize event
      window.removeEventListener('resize', this.handleResize)
    },
    methods:{
      handleResize: function(){
        // Only resize the height if the height and the width of the screen has changed.
        // Only if the width and height has changed the screen orientation has changed.
        if(window.innerWidth!==this.oldInnerWidth&&window.innerHeight!==this.oldInnerHeight){
          this.oldInnerWidth = window.innerWidth;
          this.oldInnerHeight = window.innerHeight;
          this.elementHeight = (window.innerHeight/2)+'px';
        }
      }
    }

  }

</script>


<style>

  .half-height{
    padding-top:50px;
    padding-bottom:50px;
    min-height:50vh;
  }

</style>
