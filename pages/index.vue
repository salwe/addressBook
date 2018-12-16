<template>
  <section>
    <header class="py-3">
      <b-container>
        <h1>{{ title }}</h1>
      </b-container>
    </header>
    <b-container>
      <b-row>
        <b-col cols="4">
          <UsersList />
        </b-col>
        <b-col cols="8">User info</b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import UsersList from '~/components/UsersList.vue';

export default {
  components: {
    Logo,
    UsersList,
  },
  data() {
    return ({
      title: 'Address book',
    });
  },
  methods: {
    alertHi() {
      console.log(this.$store);
    },
  }
};
</script>

<style>

</style>
