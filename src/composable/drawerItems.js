export function getDrawerItems() {
  return [
    {
      icon: "schedule",
      label: "Buyurtmalar",
      to: "/order",
      children: [],
    },
    {
      icon: "category",
      label: "Bo'limlar",
      to: "/category",
      children: [],
    },
    {
      icon: "payments",
      label: "Mahsulotlar",
      to: "/product",
      children: [],
    },
    {
      icon: "storefront",
      label: "Kirim qilish",
      to: "/income",
      children: [],
    },

    // {
    //   icon: "people_alt",
    //   label: "Бошқарувчилар",
    //   to: "/administrators",
    //   children: [],
    // },
    // {
    //   icon: "manage_accounts",
    //   label: "Аккаунт",
    //   to: "/account",
    //   children: [],
    // },
  ];
}
