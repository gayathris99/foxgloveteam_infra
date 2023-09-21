<template>
  <q-page class="flex flex-center" v-if="!isUser">
    <q-card>
      <q-card-section>
        <div class="fw-700 fs-24 text-primary">Login</div>
        <div class="q-mt-md">
          <q-form @submit.prevent.stop="onLogin">
            <q-input square outlined v-model="email" label="Email" class="fs-16" :rules="[val => !!val || 'Email is required']"/>
            <q-input square outlined v-model="password" label="Password" type="password" class="q-mt-sm fs-16" :rules="[val => !!val || 'Password is required']"/>
            <div class="flex flex-center">
              <q-btn label="Login" color="primary" type="submit" class="fw-700 q-mt-md"></q-btn>
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<script>
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: '',
      isUser: true
    }
  },
  methods: {
    async onLogin (e) {
      e.preventDefault()
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(auth.currentUser)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.$q.notify({
            message: errorMessage,
            color: "red",
            position: "top"
          });
        });
    }
  },
  beforeCreate () {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isUser = true
        this.$router.push({ name: 'home' })
      } else {
        this.isUser = false
        // this.$router.push({ name: 'login' })
      }
    });
  }
  // mounted () {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const uid = user.uid;
  //       console.log(user)
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });

  // }
}
</script>
<style lang="scss" scoped>
.q-page {
  background: #004953;
}
.q-card {
  min-width: 300px;
}
.q-input {
  width: 400px;
}
.q-btn {
  width: 100%;
}
</style>
