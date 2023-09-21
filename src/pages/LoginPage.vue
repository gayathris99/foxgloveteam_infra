<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="fw-700 fs-24 text-primary">Login</div>
        <div class="q-mt-md">
          <q-input square outlined v-model="email" label="Email" class="fs-16" />
          <q-input square outlined v-model="password" label="Password" type="password" class="q-mt-md fs-16"/>
          <div class="flex flex-center">
            <q-btn label="Login" color="primary" class="fw-700 q-mt-lg"></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

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
