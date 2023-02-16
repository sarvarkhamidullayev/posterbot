import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useTestStore = defineStore("test", {
  state: () => ({
    categories: [
      {
        id: 1,
        title: "Mix",
        products: [1, 2, 3],
      },
      {
        id: 2,
        title: "Kraska",
        products: [2, 3, 4, 5, 6],
      },
      {
        id: 3,
        title: "Lak",
        products: [1, 2, 3, 6],
      },
      {
        id: 4,
        title: "Salafan",
        products: [5, 6],
      },
      {
        id: 1,
        title: "Mix",
        products: [1, 2, 3],
      },
      {
        id: 2,
        title: "Kraska",
        products: [2, 3, 4, 5, 6],
      },
      {
        id: 3,
        title: "Lak",
        products: [1, 2, 3, 6],
      },
      {
        id: 4,
        title: "Salafan",
        products: [5, 6],
      },
      {
        id: 1,
        title: "Mix",
        products: [1, 2, 3],
      },
      {
        id: 2,
        title: "Kraska",
        products: [2, 3, 4, 5, 6],
      },
      {
        id: 3,
        title: "Lak",
        products: [1, 2, 3, 6],
      },
      {
        id: 4,
        title: "Salafan",
        products: [5, 6],
      },
      {
        id: 1,
        title: "Mix",
        products: [1, 2, 3],
      },
      {
        id: 2,
        title: "Kraska",
        products: [2, 3, 4, 5, 6],
      },
      {
        id: 3,
        title: "Lak",
        products: [1, 2, 3, 6],
      },
      {
        id: 4,
        title: "Salafan",
        products: [5, 6],
      },
    ],
    products: [
      {
        id: 1,
        title: "70",
        category: "Mix",
        description: "70 li mix qanaqir nmagadir ishlatishadida endi",
        measure: "kg",
        price: 13000,
      },
      {
        id: 2,
        title: "Oq veber",
        category: "Kraska",
        description: "Oppoqina qanaqir kraska nmagadir ishlatishadida endi",
        measure: "piece",
        price: 32000,
      },
      {
        id: 3,
        title: "Yaltiroq lak",
        category: "Lak",
        description: "Hammayoqdi yaltiratishsa kereda endi",
        measure: "piese",
        price: 26000,
      },
      {
        id: 4,
        title: "Ikki qavatli",
        category: "Salafan",
        description: "Salafandi nimagayam ishlatishardi endi",
        measure: "meter",
        price: 8000,
      },
    ],
  }),
  getters: {},
  actions: {
    async createProduct(image) {
      console.log(image);
      const response = await api.post("/upload", image);
      if (response.status === 201) {
        console.log(response.data);
      }
    },
  },
});
