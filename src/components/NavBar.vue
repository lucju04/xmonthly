<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">xMonthly</router-link>
    <nav>
      <router-link :to="{ name: 'expenses' }">Dépenses</router-link>
      <router-link :to="{ name: 'incomes' }">Revenus</router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#nav {
  height: 100vh;
  background-color: #435566;
}
#nav a {
  display: block;
  padding: 10px 10px 10px 20px;
  width: 220px;
  text-decoration: none;
  color: #4dba87;
}

#nav a:hover {
  color: #ffffff;
}
</style>
