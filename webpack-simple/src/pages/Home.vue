<template>
  <div id="Home">
    <div>
      <router-link to="/login">登录</router-link>
      <router-link to="/mine">个人中心</router-link>
      <router-link to="/home">首页</router-link>
    </div>
    <img src="../assets/logo.png">
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  #Home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
