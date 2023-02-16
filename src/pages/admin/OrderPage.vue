<template>
  <q-page class="">
    <q-scroll-area style="height: calc(100vh - 50px)">
      <q-list>
        <q-item
          dark
          v-for="contact in 30"
          :key="contact.id"
          class="q-ma-sm rounded-borders bg-primary"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar color="accent" text-color="white"> C </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1 text-weight-bold"
              >contact.name</q-item-label
            >
            <q-item-label caption lines="2"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis possimus veritatis, ex repellat vel voluptates quasi
              eveniet eum provident cupiditate esse magnam exercitationem
              laudantium iste repellendus sit reprehenderit distinctio dolores.
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="more" color="white" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
});
</script>
