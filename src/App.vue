<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:ital,wght@1,300&display=swap");

// font-family: "Montserrat", sans-serif;
//  font-family: "Roboto", sans-serif;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #e6e4e4;
}
.container {
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  top: 6rem;
  display: block;
  position: relative;
  height: 100vh;
}
</style>
