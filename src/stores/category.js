import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    category: {
      title: "title",
    },
  }),
  getters: {},
  actions: {
    async createCategory() {
      console.log("log1");
      const response = await api.post("/category", this.category);
      if (response.status === 201) {
        console.log(response.data);
      }
    },
  },
});
