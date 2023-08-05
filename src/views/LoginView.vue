<script setup>
import {ref, inject, watch, computed} from "vue"
import { storeToRefs} from "pinia"

const $store = inject('store');
const $userStore = $store.userStore();


let email = ref('');
let password = ref('');
let rememberMe = ref('');

const fieldsNotFilled  = computed(() => {
  return (!email.value || !password.value) ? true : false;
});

function login(){
  $userStore.login(email.value, password.value);
}

defineExpose({
  email,
  password,
  rememberMe
})

</script>

<template>
      <div class="h-full max-w-full flex flex-nowrap flex-col justify-center align-items-center text-center" style="align-items:center">
        <h1 class="text-3xl mb-8">Login</h1>

          <div class="flex align-items-center text-center shadow-md flex-nowrap flex-col px-10 pt-4 pb-10" style="max-width: 920px; width: 80%;">
                <!-- Email input -->
              <div class="relative mb-6">
                <q-input  class="pl-2"
                  v-model="email"
                  label="Email"
                  :rules="[val => !!val || 'Field is required']"
                 />
              </div>

              <!-- Password input -->
              <div class="relative mb-6">
                <q-input type="password" v-model="password" class="pl-2" label="Password"
                :rules="[val => !!val || 'Field is required']"
                   />
              </div>

              <div class="mb-6">
                <!--Forgot password link-->
                <a href="#!" class="text-red">Forgot password?</a>
              </div>

              <!-- Login button -->
              <div class="">
                <q-btn
                  type="button"
                  class="inline-block rounded bg-[#7197b7] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  label="Login"
                  :disabled="fieldsNotFilled"
                  :title="fieldsNotFilled ? 'Please ensure all fields have a value': 'Login'"
                  @click="login()"
                   />
              </div>
          </div>
        </div>
</template>


<style lang="scss" scoped>

</style>
