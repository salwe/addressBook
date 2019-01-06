<template>
  <div v-if="data !== null">
    <p class="title">{{ data.name }} {{ data.surname }}</p>
    <p>Birthday: {{ data.birthday }}</p>
    <p>Phone: {{ data.phone }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
  };
</script>

<style lang="scss">
  p {
    margin: 0;
  }
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 15px;
  }
</style>