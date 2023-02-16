<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="">
      <q-page class="flex bg-primary flex-center">
        <q-card flat dark class="bg-primary column" style="width: 300px">
          <div class="logo flex justify-center">
            <div>ZERO ONE</div>
            <div>ROBOT</div>
          </div>
          <div class="text-center text-h6">Kirish</div>

          <q-card-section>
            <q-list>
              <q-item
                class="bg-accent justify-center rounded-borders q-ma-md"
                clickable
                v-ripple
                to="/owner"
              >
                <q-item-section class="text-center">
                  <div>Owner</div>
                </q-item-section>
              </q-item>
              <q-item
                class="bg-accent justify-center rounded-borders q-ma-md"
                clickable
                v-ripple
                to="/admin"
              >
                <q-item-section class="text-center">
                  <div>Admin</div>
                </q-item-section>
              </q-item>
              <q-item
                class="bg-accent rounded-borders q-ma-md"
                clickable
                v-ripple
                to="/user"
              >
                <q-item-section class="text-center">
                  <div>User</div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
