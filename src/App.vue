<template>
  <div id="app" >
    <div class="header-label">
      Тестовый стенд
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-label {
  padding: 25px;
  background: #f8b1b1;
  font-size: 20px;
  color: white;
}
</style>
