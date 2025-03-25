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
    path: "/:pathMatch(.*)*", // Định nghĩa route khớp với tất cả các URL
    name: "notfound",
    component: NotFound, // Trỏ đến component NotFound
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
