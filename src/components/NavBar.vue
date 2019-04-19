<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">xMonthly</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">Dépenses</router-link>
      <router-link :to="{ name: 'event-create' }">Revenus</router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  #nav {
    border: 1px blue solid;
    width: 230px;
    height: 100vh;;
  }
  #nav a {
      border: 1px red solid;
      display: block;
      padding: 10px 10px 10px 0px;
      width:220px;
  }

</style>
