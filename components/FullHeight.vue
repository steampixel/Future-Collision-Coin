<template>
  <!--v-bind:style="{ 'height': elementHeight }"-->
  <div class="full-height">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    // data: function(){
    //   // return {
    //   //   elementHeight: '100vh',
    //   //   oldInnerWidth: 0,
    //   //   oldInnerHeight: 0
    //   // };
    // },
    // mounted: function () {
    //   // Add resize event
    //   // window.addEventListener('resize', this.handleResize)
    //   // this.handleResize();
    // },
    // beforeDestroy: function () {
    //   // Remove resize event
    //   // window.removeEventListener('resize', this.handleResize)
    // },
    // methods:{
    //   handleResize: function(){
    //     // Only resize the height if the height and the width of the screen has changed.
    //     // Only if the width and height has changed the screen orientation has changed.
    //     // if(window.innerWidth!==this.oldInnerWidth&&window.innerHeight!==this.oldInnerHeight){
    //     //   this.oldInnerWidth = window.innerWidth;
    //     //   this.oldInnerHeight = window.innerHeight;
    //     //   this.elementHeight = window.innerHeight+'px';
    //     // }
    //   }
    // }

  }

</script>


<style>

.full-height{
  min-height:100vh;
  padding-top: 50px;
  padding-bottom:50px;
}

/*
.full-height{
  padding-top:100px;
  padding-bottom:100px;
  height:auto !important;
}

@media screen and (min-width : 600px){
  .full-height{
    height:100vh !important;
    position: relative;
  }
}
*/

</style>
