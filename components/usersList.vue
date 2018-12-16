<template>
  <ul>
    <li v-for="user in this.$store.state.users">
      {{ user.name }} {{ user.surname }}
    </li>
  </ul>
</template>

<style lang="scss">
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      border: solid 1px #ccc;
      padding: 5px 10px;
      margin-top: -1px;
      &:hover {
         cursor: pointer;
         background: #f5f5f5;
       }
    }
  }
</style>