<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/temp">Temperatura</RouterLink>
        <RouterLink to="/co2">Co2</RouterLink>
        <RouterLink to="/metan">Metano</RouterLink>
        <RouterLink to="/no2">No2</RouterLink>
        <RouterLink to="/ice">Ghiaccio polare</RouterLink>
        <RouterLink to="/ocean">Riscaldamento marino</RouterLink>
      </nav>
    </header>
    <aside>
      <RouterView />
    </aside>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  min-width: 40vw;
}

main{
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}

aside{
  flex-grow: 1;
}

nav {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {

}
</style>
