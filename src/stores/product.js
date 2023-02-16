import { defineStore } from "pinia";
import { Loading, Notify } from "quasar";
import { api } from "src/boot/axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    file: null,
    products: [],
    product: {
      id: 1,
      title: "70",
      category: "Mix",
      description: "70 li mix qanaqir nmagadir ishlatishadida endi",
      measure: "kg",
      price: 13000,
    },
  }),
  actions: {
    async createProduct() {
      try {
        Loading.show({
          message: "Iltimos biroz kuting...",
          delay: 4,
        });
        const formData = new FormData();
        formData.append("image", this.file);
        formData.append("title", this.product.title);
        formData.append("category", this.product.category);
        formData.append("description", this.product.description);
        formData.append("measure", this.product.measure);
        formData.append("price", this.product.price);
        const response = await api.post("/product", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response.status === 201) {
          console.log(response.data);
        }
        if (response.status === 209) {
          throw new Error(response.data);
        }
      } catch (error) {
        console.log(error.message);
        Notify.create({
          type: "negative",
          message: error.message,
        });
      } finally {
        Loading.hide();
      }
    },
  },
});
