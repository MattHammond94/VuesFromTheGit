<template>
  <h1>Sign In</h1>
  <p><input type="text" placeholder="email" v-model="email"/></p>
  <p><input type="password" placeholder="password" v-model="password"/></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="logIn">Log In</button></p>
  <p><button @click="logInWithGoogle">Log In With Google</button></p>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  const email = ref("");
  const password = ref("");
  const errMsg = ref();
  const router = useRouter();

  const logIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Successfully logged in!")
        console.log(auth.currentUser)
        router.push('/feed');
      })
      .catch((error) => {
        console.log(error.code);
        // Firebase auth error codes passed through error.code
        // auth/invalid-email => If email is not valid
        // auth/user-not-found => User not been created/email spelt wrong
        // auth/wrong-password => Wrong password input
        // auth/user-disabled => User been banned

        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email has been located";
            break;
          case "auth/wrong-password":
            errMsg.value = "Password is incorrect";
            break;
          default: 
            errMsg.value = "Email or password was incorrect";
            break;
        }
      });
  };

  const logInWithGoogle = () => {

  };
</script>