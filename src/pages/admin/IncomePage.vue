<template>
  <q-page class="flex justify-center">
    <q-card flat class="bg-accent q-pa-md" dark style="width: 350px">
      <q-form @submit="createPro" enctype="multipart/form-data">
        <q-input
          class="q-my-sm"
          outlined
          color="white"
          v-model="product.title"
          label="Mahsulot nomi"
        >
          <template v-if="product.title" v-slot:append>
            <q-icon
              name="cancel"
              @click.stop.prevent="product.title = null"
              class="cursor-pointer"
            />
          </template>
        </q-input>

        <q-input
          color="white"
          outlined
          v-model="product.description"
          label="Mahsulot haqida"
          class="q-my-sm"
        >
          <template v-if="product.description" v-slot:append>
            <q-icon
              name="cancel"
              @click.stop.prevent="product.description = null"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <q-select
          square
          outlined
          v-model="product.category"
          transition-show="flip-up"
          transition-hide="flip-down"
          class="q-my-sm"
          :options="['Mix', 'Bolta', 'Salafan']"
          label="Bo'lim"
        />
        <q-select
          square
          outlined
          v-model="product.measure"
          transition-show="flip-up"
          transition-hide="flip-down"
          class="q-my-sm"
          :options="['kg', 'meter', 'piece']"
          label="O'lchov birligi"
        />
        <q-input
          type="number"
          color="white"
          outlined
          v-model="product.price"
          label="Mahsulot narxi"
          class="q-my-sm"
        >
          <template v-if="product.price" v-slot:append>
            <span style="font-size: 20px">so'm</span>
            <q-icon
              name="cancel"
              @click.stop.prevent="product.price = null"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <q-file
          color="white"
          clearable
          outlined
          v-model="file"
          accept="image/*"
          label="Rasmni tanlang"
        />
        <q-btn label="Upload" type="submit" />
      </q-form>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import { useProductStore } from "src/stores/product";
import { useCategoryStore } from "src/stores/category";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const { createProduct } = useProductStore();
    const { createCategory } = useCategoryStore();
    const { product, file } = storeToRefs(useProductStore());
    const { category } = storeToRefs(useCategoryStore());

    const createPro = () => {
      createProduct();
    };

    return {
      product,
      file,
      createPro,
      category,
    };
  },
});
</script>
