<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{username}}</div>
    <h2>{{skills}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你好',
      username: "攻城狮",
      skills: "我特会吹牛"
    }
  }
}
</script>
