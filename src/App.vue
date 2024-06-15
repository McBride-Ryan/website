<template>
  <RouterView />
</template>

<script >
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      show: false,
      content: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.controlNavbar);
    window.addEventListener("scroll", this.controlContent);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.controlNavbar);
    window.removeEventListener("scroll", this.controlContent);
  },
  methods: {
    controlNavbar() {
      if (window.scrollY > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    controlContent() {
      if (window.scrollY > 100) {
        this.content = true;
      } else {
        this.content = false;
      }
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
