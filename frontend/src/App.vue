<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
  <!-- <App> -->
</template>

<script>

</script>

<style>

body{
  background-color:#000 ;
}
#app{
  width: 100%;
}
</style>
