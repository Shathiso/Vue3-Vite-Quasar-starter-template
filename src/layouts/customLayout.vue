<script setup>
  import topNav from "./sections/topNav.vue"
</script>

<template>
  <q-layout>
    <q-page-container class="pt-0">
    <q-page>
      <topNav  class="absolute bg-transparent"/>

      <section>
        <router-view />
      </section>

    </q-page>
  </q-page-container>
  </q-layout>
</template>