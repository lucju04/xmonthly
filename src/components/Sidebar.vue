<template>
  <div id="sidebar" class="sidebar">

      <div v-if="$route.path == '/'">
        {{ $route.path }}
      </div>

      <div v-if="$route.path == '/expenses'">
        {{ $route.path }}
      </div>

      <div v-if="$route.path == '/incomes'">
        {{ $route.path }}
      </div>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #sidebar {
    height: 100vh;
    background-color: #435566;
  }
</style>
