<template>
  <q-page class="flex flex-center">
    Foxglove Infra
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default defineComponent({
  name: 'IndexPage',
  // methods: {
  //   loginUser () {
  //   const email = 'nisarga@foxgloveteam.com'
  //   const password = 'teampassword'
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(auth.currentUser)
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  //   }
  // },
  // async mounted () {
  //   // await this.loginUser()
  //   // const auth = getAuth();
  //   // signOut(auth).then(() => {
  //   // }).catch((error) => {
  //   //   // An error happened.
  //   // });
  //   // console.log(auth.currentUser)
  // }
    beforeCreate () {
      const auth = getAuth()
      if (!auth.currentUser) {
        this.$router.push({ name: 'login' })
      }
    }
})
</script>
