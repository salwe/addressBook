import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    users: [{
        id: 1,
        name: 'Adam',
        surname: 'Green',
        birthday: '',
        phone: '',
        groups: [1],
      }, {
        id: 2,
        name: 'Sara',
        surname: 'Brown',
        birthday: '',
        phone: '',
        groups: [3],
      }, {
        id: 3,
        name: 'Susan',
        surname: 'Red',
        birthday: '',
        phone: '',
        groups: [3],
      }, {
        id: 4,
        name: 'John',
        surname: 'White',
        birthday: '',
        phone: '',
        groups: [2, 3],
      },
    ],
  },
});

export default store;