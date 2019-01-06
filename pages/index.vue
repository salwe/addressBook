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
          <UsersList v-bind:selectUser="selectUser" v-bind:selectedUserId="selectedUserId" />
        </b-col>
        <b-col cols="8">
          <UserInfo v-bind:data="userInfo" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import UsersList from '~/components/UsersList.vue';
import UserInfo from '~/components/UserInfo.vue';

export default {
  components: {
    Logo,
    UsersList,
    UserInfo,
  },
  data() {
    return ({
      title: 'Address book',
      selectedUserId: null,
    });
  },
  methods: {
    selectUser(id) {
      this.selectedUserId = id;
    },
  },
  computed: {
    userInfo: function() {
      return this.$store.state.users.find(el => el.id === this.selectedUserId) || null;
    },
  }
};
</script>

<style>

</style>
