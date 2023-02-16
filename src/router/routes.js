const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/LoginPage.vue") },
      {
        path: "/user",
        component: () => import("src/pages/client/UserPage.vue"),
      },
      {
        path: "/admin",
        component: () => import("src/pages/admin/AdminPage.vue"),
        children: [
          {
            path: "",
            redirect: "/order",
          },
          {
            path: "/order",
            component: () => import("src/pages/admin/OrderPage.vue"),
            meta: {
              page: "Buyurtmalar",
            },
          },
          {
            path: "/category",
            component: () => import("src/pages/admin/CategoryPage.vue"),
            meta: {
              page: "Bo'limlar",
            },
          },
          {
            path: "/product",
            component: () => import("src/pages/admin/ProductPage.vue"),
            meta: {
              page: "Mahsulotlar",
            },
          },
          {
            path: "/income",
            component: () => import("src/pages/admin/IncomePage.vue"),
            meta: {
              page: "Kirim qilish",
            },
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
