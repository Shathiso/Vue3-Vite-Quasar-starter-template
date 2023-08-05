<script setup>
import { inject } from 'vue'
import topNav from './sections/topNav.vue';

const $store = inject('store');
const $userStore = $store.userStore();

  function logout () {
    $userStore.logout();
  }

</script>

<template>
  <q-layout view="hHh Lpr lff"  style="" class="shadow-2 rounded-borders">
      <q-page-container class="min-h-[100vh]">
        <q-page>
          <section>
            <topNav />
          </section>
          
          <section class="mt-10">
            <router-view />
          </section>
        </q-page>
      </q-page-container>
    </q-layout>
</template>