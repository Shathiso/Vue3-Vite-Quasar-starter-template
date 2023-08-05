<script setup>
import {ref, inject} from "vue"
const $store = inject('store');
const $userStore = $store.userStore();
import { useQuasar } from 'quasar'


const $q = useQuasar()

let firstname = ref('');
let lastname = ref('');

function register(){
  let data = {
    firstname: firstname.value,
  }
  $userStore.register(data);
}

defineExpose({
  firstname,
  lastname
})

</script>

<template>
      <div class="h-full max-w-full flex flex-nowrap flex-col justify-center align-items-center text-center" style="align-items:center">
        <h1 class="text-3xl mb-8">Register</h1>

          <div class="flex align-items-center text-center shadow-md flex-nowrap flex-col px-10 pt-4 pb-10" style="max-width: 920px; width: 80%;">
              
              <!-- Firstname input -->
              <div class="relative mb-6">
                <q-input  class="pl-2"
                  v-model="firstname"
                  label="First name"
                 />
              </div>

              <!-- Lastname input -->
              <div class="relative mb-6">
                <q-input  class="pl-2"
                  v-model="lastname"
                  label="Last name"
                 />
              </div>

              <!-- Register button -->
              <div class="">
                <q-btn
                  type="button"
                  class="inline-block rounded bg-[#7197b7] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600"
                  label="Register"
                   />
              </div>
          </div>
        </div>
</template>


<style lang="scss" scoped>
  .my-custom-toggle {
    border: 1px solid #027be3
  }
</style>
