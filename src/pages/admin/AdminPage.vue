<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="drawer ? 'close' : 'menu'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ link }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      class="bg-primary column text-white"
    >
      <div
        class="items-center justify-center column logo"
        style="height: 200px"
      >
        <div>ZOBOT</div>
        <div style="font-size: 15px">admin</div>
        <!-- <div style="font-size: 25px">ACADEMY</div> -->
      </div>
      <q-scroll-area class="flex" style="height: calc(100vh - 200px)">
        <div class="text-grey-5 text-subtitle1">
          <q-list>
            <q-item
              style="border-left: 2px solid transparent"
              v-for="item in drawerItems"
              :key="item.label"
              clickable
              v-ripple
              :to="item.to"
              :active="link === item.label"
              active-class="my-menu-link"
              @click="changeLocation(item.label)"
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>{{ item.label }}</q-item-section>
            </q-item>
            <q-item
              style="border-left: 2px solid transparent"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>
              <q-item-section>Чиқиш</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-accent">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { getDrawerItems } from "src/composable/drawerItems";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const route = useRoute();
    const drawerItems = getDrawerItems();
    var drawer = ref(false);
    //functions
    const link = ref(route.meta.page);
    function changeLocation(menu) {
      link.value = menu;
    }
    return {
      link,
      drawer,
      drawerItems,
      changeLocation,
      toggleLeftDrawer() {
        drawer.value = !drawer.value;
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.line {
  width: 70%;
  margin: 10px 0px;
  height: 3px;
  border-radius: 2px;
  background: white;
}
.my-menu-link {
  color: white;
  border-right: 2px solid white;
  border-left: 2px solid white !important;
}
</style>
