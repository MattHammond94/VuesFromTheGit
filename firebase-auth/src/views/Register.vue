<template>
  <h1>Create account</h1>
  <p><input type="text" placeholder="email" v-model="email"/></p>
  <p><input type="password" placeholder="password" v-model="password"/></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { 
    getAuth, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
  } from "firebase/auth";
  const email = ref("");
  const password = ref("");
  const router = useRouter();

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Successfully registered new user!")
        console.log(auth.currentUser)
        router.push('/feed');
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      })
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
     .then((result) => {
      console.log(result.user);
      router.push("/feed");
     })
     .catch((error) => {

     });
  };
</script>