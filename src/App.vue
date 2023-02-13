<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="62" height="62" />
      <div class="logo-message">
        <HelloWorld msg="The Shop" />
      </div>
    </RouterLink>
  </header>

  <RouterView />

  <footer>
    <p>Scandiweb Test Assigment - Junior Web Developer &copy; 2023</p>
  </footer>
</template>

<style lang="sass" scoped>

main
  min-height: 80vh

header
  padding: 2rem
  display: flex
  flex-direction: row
  background-color: var(--blanc-de-blanc)

  .logo
    margin-inline-end: 1rem

header a
  display: flex
  flex-direction: row
  background-color: var(--blanc-de-blanc)
  text-decoration: unset
  color: var(--santorin-blue)

.logo-message
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

footer
  min-height: 10vh
  padding: 2rem 
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: var(--blanc-de-blanc)
  border-block-start: 6px solid var(--santorin-blue)

</style>
