import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    users: [{
        id: 1,
        name: 'Adam',
        surname: 'Green',
        birthday: '12, April',
        phone: 5550001,
        groups: [1],
      }, {
        id: 2,
        name: 'Sara',
        surname: 'Brown',
        birthday: '30, December',
        phone: 5550002,
        groups: [3],
      }, {
        id: 3,
        name: 'Susan',
        surname: 'Red',
        birthday: '5, June',
        phone: 5550003,
        groups: [3],
      }, {
        id: 4,
        name: 'John',
        surname: 'White',
        birthday: '17, June',
        phone: 5550004,
        groups: [2, 3],
      },
    ],
  },
});

export default store;