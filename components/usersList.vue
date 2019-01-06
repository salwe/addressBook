<template>
  <ul>
    <li v-for="user in this.$store.state.users" @click="selectUser(user.id)" v-bind:class="{ selected: selectedUserId === user.id}">
      {{ user.name }} {{ user.surname }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      selectUser: Function,
      selectedUserId: Number,
    }
  }
</script>

<style lang="scss">
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      border: solid 1px #ccc;
      padding: 5px 10px;
      margin-top: -1px;
      &.selected,
      &:hover {
         cursor: pointer;
         background: #f5f5f5;
       }
    }
  }
</style>