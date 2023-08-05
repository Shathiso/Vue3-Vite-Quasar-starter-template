<script setup>
  import { ref, onMounted } from "vue"
  import heroImage from "../assets/images/heroImage.png"
  import gsap from "gsap"

  let hero_img_url = heroImage

  function source(src) {
    const baseUrl = location.protocol + "//" + location.host + '/';
    return baseUrl + src;
  }
</script>

<template>
  <div class="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-300 flex flex-row flex-wrap items-center w-full lg:flex-row min-h-screen relative" id="home-wrapper">
    <div class="w-full min-h-screen z-10 absolute" style="background-color:#7197b7" id="overlay-start"></div>
    <div class="w-full min-h-screen z-10 absolute" style="background-color:#7197b7" id="overlay-shrink"></div>
    
    <div class="w-6/12 mx-auto relative z-10 text-center" >
      <img :src="hero_img_url"  class="absolute h-auto z-10 -mt-40" />
      <h1 class="text-white relative font-semibold text-7xl z-20 mt--30" style="color:#7197b7" id="hero-text-top">Starter</h1>
      <h1 class="font-light relative text-6xl z-20 text-white mt-5" id="hero-text-bottom">Template</h1>
    </div>
  </div>
</template>
