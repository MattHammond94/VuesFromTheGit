import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { initializeApp } from "firebase/app";

// Styling:
import './assets/main.css'

const firebaseConfig = {
  apiKey: "AIzaSyD1FpXNk29UCTKqiB-MUXsfOMdg4Q7NxN8",
  authDomain: "vue-auth-1-cf956.firebaseapp.com",
  projectId: "vue-auth-1-cf956",
  storageBucket: "vue-auth-1-cf956.appspot.com",
  messagingSenderId: "195761474351",
  appId: "1:195761474351:web:bfd2c714397bebf9bd2fda"
};

initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)
app.mount('#app')
