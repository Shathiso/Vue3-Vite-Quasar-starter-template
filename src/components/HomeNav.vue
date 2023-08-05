<template>
  <div class="absolute top-3 right-24 w-36 z-20 pb-2">

    <div class="flex flex-nowrap justify-between mt-4 z-20" id="nav-links" >
      <router-link 
        @mouseover.native="animateHover($event)" 
        @mouseleave.native="animateHoverOut($event)" 
        to="/login" 
        class=" mt-4 font-medium uppercase text-white mr-8 transition-all hover:translate-y-3 no-underline  text-2xl link" 
        id="link2">
        Login
      </router-link>
      <router-link 
        @mouseover.native="animateHover($event)" 
        @mouseleave.native="animateHoverOut($event)" 
        to="/register" 
        class=" mt-4 font-medium uppercase text-white transition-all hover:translate-y-3 no-underline  text-2xl link" 
        id="link3">
        Register
      </router-link>
    </div>
  </div>
  
</template>

<script setup>
import gsap from "gsap"


   function animateHover(el) {
        let element = el.target;
       gsap.to(element, 0.25, {
        yPercent: 10, 
        scale:1.1
      });
    }

    function animateHoverOut(el) {
        let element = el.target;
       gsap.to(element, 0.25, {
        yPercent: 0, 
        color:'white',
        scale: 1,
      });
    }

</script>

<style scoped>
  #nav-links a{
    text-shadow: -1px 1px 3px rgb(58 58 58 / 38%);
  }

  #nav-links .link:hover, a:hover{
    text-decoration:none;
  }
</style>