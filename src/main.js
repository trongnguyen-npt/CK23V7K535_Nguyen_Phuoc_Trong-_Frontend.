// Import style chính của dự án
import './assets/form.css';

// Import Vue và App
import { createApp } from 'vue';

import App from './App.vue';

// Import thư viện Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import thư viện Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from "./router";
// Tạo ứng dụng Vue và gắn vào phần tử #app
createApp(App).mount('#app');

 createApp(App).use(router).mount("#app");
