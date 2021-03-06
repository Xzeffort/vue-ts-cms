import { createStore, useStore as baseUseStore, Store } from 'vuex';
import loginModule from './login/login';
import { IRootState, State } from './type';
import { InjectionKey } from 'vue';
import systemModule from './system/system';
import { getPageListData } from '@/network/main/system/system';

const store = createStore<IRootState>({
  state: {
    entireDepartment: [],
    entireRole: [],
    entireMenu: [],
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    },
  },
  actions: {
    async getInitalAction({ commit }) {
      const depRes = await getPageListData('/department/list', { offset: 0, size: 1000 });
      const roleRes = await getPageListData('/role/list', { offset: 0, size: 1000 });
      const menus = await getPageListData('/menu/list', {});
      commit('changeEntireDepartment', depRes.data.list);
      commit('changeEntireRole', roleRes.data.list);
      commit('changeEntireMenu', menus.data.list);
    },
  },
  modules: {
    loginModule,
    systemModule,
  },
});

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin');
}

export function useStore() {
  return baseUseStore(key);
}

export const key: InjectionKey<Store<State>> = Symbol();

export default store;
