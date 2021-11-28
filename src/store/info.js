import axios from 'axios';

const info = {
  namespaced: true,
  state: {
    menu: null,
    contacts: null,
    reasons: null,
    services: null,
    objects: null,
    partners: null,
    customers: null,
    vehicles: null,
    vehiclesCategory: null,
    vacancies: null,
  },
  mutations: {
    SET_MENU(state, payload) {
      state.menu = payload
    },
    SET_CONTACTS(state, payload) {
      state.contacts = payload
    },
    SET_REASONS(state, payload) {
      state.reasons = payload
    },
    SET_SERVICES(state, payload) {
      state.services = payload
    },
    SET_OBJECTS(state, payload) {
      state.objects = payload
    },
    SET_PARTNERS(state, payload) {
      state.partners = payload
    },
    SET_CUSTOMERS(state, payload) {
      state.customers = payload
    },
    SET_VEHICLES(state, payload) {
      state.vehicles = payload
    },
    SET_VEHICLES_CATEGORY(state, payload) {
      state.vehiclesCategory = payload
    },
    SET_VACANCIES(state, payload) {
      state.vacancies = payload
    }
  },
  actions: {
    LOAD_MENU({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/menu?id=2').then(res => {
        commit('SET_MENU', res.data.data)
      }).catch(err => {
        console.log(err, 'load menu error');
      })
    },
    LOAD_MAIN_INFO({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/information').then(res => {
        commit('SET_CONTACTS', res.data.data.info)
        commit('SET_REASONS', res.data.data.main.fivep)
      }).catch(err => {
        console.log(err, 'load main info error');
      })
    },
    LOAD_SERVICES({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/services').then(res => {
        commit('SET_SERVICES', res.data.data)
      }).catch(err => {
        console.log(err, 'load services error');
      })
    },
    LOAD_OBJECTS({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/objects').then(res => {
        commit("SET_OBJECTS", res.data.data)
      }).catch(err => {
        console.log(err, 'load objects error');
      })
    },
    LOAD_PARTNERS({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/partners').then(res => {
        commit('SET_PARTNERS', res.data.data)
      }).catch(err => {
        console.log(err, 'load partners error');
      })
    },
    LOAD_CUSTOMERS({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/customers').then(res => {
        commit('SET_CUSTOMERS', res.data.data)
      }).catch(err => {
        console.log(err, 'load partners error');
      })
    },
    LOAD_VEHICLES({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/technique').then(res => {
        commit('SET_VEHICLES', res.data.data)
      }).catch(err => {
        console.log(err, 'load vehicles error');
      })
    },
    LOAD_VEHICLES_CATEGORY({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/vtechnique').then(res => {
        let result = res.data.data.map(item => {
          item.isActive = false
          return item
        })
        result[0].isActive = true
        commit('SET_VEHICLES_CATEGORY', result)
      }).catch(err => {
        console.log(err, 'load vehicles category error');
      })
    },
    LOAD_VACANCIES({ commit }) {
      axios.get('https://daf.webink.site/wp-json/daf/v1/get/vacancy').then(res => {
        commit("SET_VACANCIES", res.data.data)
      }).catch(err => {
        console.log(err, 'load vacancies error');
      })
    }
  },
  getters: {
    getMenu(state) {
      return state.menu
    },
    getContacts(state) {
      return state.contacts
    },
    getReasons(state) {
      return state.reasons
    },
    getServices(state) {
      return state.services
    },
    getObjects(state) {
      return state.objects
    },
    getPartners(state) {
      return state.partners
    },
    getCustomers(state) {
      return state.customers
    },
    getVehicles(state) {
      return state.vehicles
    },
    getVehiclesCategory(state) {
      return state.vehiclesCategory
    },
    getVacancies(state) {
      return state.vacancies
    },
    getSingleCatTechnique: (state) => (id) => {
      if (state.vehicles) {
        let arr = []
        state.vehicles.filter((item) => {
          if (item.cat) {
            item.cat.forEach((cat) => {
              if (cat.term_id === id) {
                arr.push(item);
              }
            });
          }
        });
        return arr
      }
    },
    getSingleServices: (state) => (slug) => {
      if (state.services) {
        return state.services.find(item => item.slug === slug)
      }
    }
  },
}

export default info