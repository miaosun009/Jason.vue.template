import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);
const options: StoreOptions<any> = {
	state: {},
	actions: {},
	mutations: {},
	modules: {}
};
export default new Vuex.Store(options);
