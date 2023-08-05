<script setup>
import { ref, inject } from 'vue'
import gsap from "gsap"

const $store = inject('store');
const $userStore = $store.userStore();

const miniState = ref(true)
const drawer = ref(false)

function logout () {
  $userStore.logout();
}

function drawerClick (e) {
  if (miniState.value) {
    miniState.value = false
    e.stopPropagation()
  }
}


  function animateHover(el) {
       let element = el.target;
      gsap.to(element, 0.25, {
       yPercent: 10, 
       color:'rgb(0, 176, 163)',
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
<template>
    <q-header class="bg-[#7197b7] w-full mb-10 shadow-sm" style="min-height: 50px;">
        <q-toolbar class="grid grid-cols-3 items-center" >
          <span class="col-span-1"></span>

          <q-toolbar-title class="col-span-1 text-center"><router-link to="/" class="text-white">App</router-link></q-toolbar-title>
          
          <span class="col-span-1">

            <span class=" justify-between z-20" id="nav-links" >
              <router-link 
                @mouseover.native="animateHover($event)" 
                @mouseleave.native="animateHoverOut($event)" 
                to="/login" 
                class=" text-white mr-8 transition-all hover:translate-y-2 no-underline  text-lg link" 
                id="link2">
                Login
              </router-link>
              <router-link 
                @mouseover.native="animateHover($event)" 
                @mouseleave.native="animateHoverOut($event)" 
                to="/register" 
                class=" text-white transition-all hover:translate-y-2 no-underline  text-lg link" 
                id="link3">
                Register
              </router-link>
            </span>
          </span>
          
        </q-toolbar>
    </q-header>
</template>

<style scoped>
  #nav-links a{
    text-shadow: -1px 1px 3px rgb(58 58 58 / 38%);
  }

  #nav-links .link:hover, a:hover{
    text-decoration:none;
  }
</style>