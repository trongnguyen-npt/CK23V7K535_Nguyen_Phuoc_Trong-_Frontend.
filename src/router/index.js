import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import NotFound from "@/views/NotFound.vue"; // Import thêm NotFound component

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts/:id", // Định nghĩa route mới đến ContactEdit
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"), // Tải động ContactEdit component
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  
  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/ComtactAdd.vue"),
  },

  {
    path: "/:pathMatch(.*)*", // Định nghĩa route khớp với tất cả các URL không hợp lệ
    name: "notfound",
    component: NotFound, // Trỏ đến component NotFound
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
