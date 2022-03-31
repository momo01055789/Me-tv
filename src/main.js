import { createApp } from "vue";
// import { createStore } from 'vuex'
import App from "./App.vue";
// import Vue from 'vue'
import router from "./router";
// import Store from '../src/store'

createApp(App).use(router).mount("#app");
// createApp(App).use(Store)
// new Vue({
//     el: '#app',
//     router,
//     Store,
//     render: h => h(App)
//   })
// const app = createApp(App).mount("#app");
// // const vuestore = createStore(Store);
// // app.use(vuestore);
// app.use(router);
