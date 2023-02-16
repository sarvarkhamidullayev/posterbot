<template>
  <q-page>
    <q-scroll-area style="height: calc(100vh - 50px)">
      <q-bar reveal style="height: 60px" dark class="bg-primary">
        <q-input
          class="fit q-ma-none"
          color="white"
          v-model="category"
          label="Label"
        >
          <template v-if="category" v-slot:append>
            <q-btn
              class="bg-primary text-white"
              dense
              flat
              size="md"
              rounded
              icon="add"
            ></q-btn>
          </template>
        </q-input>
      </q-bar>
      <q-list>
        <q-item
          dark
          v-for="category in categories"
          :key="category.id"
          class="q-ma-sm rounded-borders bg-primary"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar color="accent" text-color="white">{{
              category.title.slice(0, 1)
            }}</q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1 text-weight-bold">
              <div class="cursor-pointer">
                {{ category.title }}
                <q-popup-edit
                  class="bg-primary"
                  v-model="category.title"
                  auto-save
                  v-slot="scope"
                >
                  <q-input
                    dark
                    v-model="scope.value"
                    dense
                    autofocus
                    counter
                    @keyup.enter="scope.set"
                  />
                </q-popup-edit>
              </div>
            </q-item-label>
            <q-item-label caption lines="2">
              Bo'limdagi mahsulotlar soni {{ category.products.length }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="more" color="white" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab persistent icon="add" direction="up" color="accent"> </q-fab>
    </q-page-sticky>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useTestStore } from "src/stores/test";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const { categories } = storeToRefs(useTestStore());
    const category = ref("");
    return {
      categories,
      category,
    };
  },
});
</script>
