<template>
  <q-page class="" v-if="isUser">
    <q-header class="q-py-sm q-px-md row items-center justify-between">
      <div class="row items-center justify-between q-gutter-md">
        <img src="~assets/favicon-128x128.png" width="50"/>
        <div class="fs-20 fw-700">Foxglove Team Infra</div>
      </div>
      <q-btn class="fw-700" label="logout" style="background-color:white; color:#004953" @click="onLogout"></q-btn>
    </q-header>
    <q-page-container class="no-padding q-mt-xl">
      <div v-for="(instance, id) in instances" :key="id" class="q-px-lg">
        <div class="row items-center q-my-lg q-gutter-x-lg text-primary">
          <div class="fw-700 fs-18" style="width:200px"><span class="fs-14">{{id+1}}).</span> {{instance.name}}</div>
          <div class="fw-500 fs-14"  style="width:200px">{{instance.currentStatus}}</div>
          <q-btn label="Start" color="primary" class="fw-600"></q-btn>
          <q-btn label="Stop" color="primary" class="fw-600"></q-btn>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      isUser: false,
      instances: [
        {
          name: 'Instance 1',
          currentStatus: 'Running'
        },
        {
          name: 'Instance 2',
          currentStatus: 'Stopped'
        },
        {
          name: 'Instance 3',
          currentStatus: 'Stopped'
        },
        {
          name: 'Instance 4',
          currentStatus: 'Running'
        },
      ]
    }
  },
  methods: {
    onLogout () {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.$router.push({ name: 'login' })
    }).catch((error) => {
      // An error happened.
      this.$q.notify({
        message: error.message,
        color: "red",
        position: "top"
      });    });
    }
  },
  beforeCreate () {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isUser = true
      } else {
        this.$router.push({ name: 'login' })
      }
    });
  }
})
</script>
