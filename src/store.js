import Vue from "vue";
import Vuex from "vuex";
import { createEmptyPopup } from "./utils.js";

// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
  state: {
    nextId: 1,
    name: "",
    selectedPopup: createEmptyPopup(),
    popups: []
  },
  
  mutations: {
    initialiseStore(state) {
     
      if (localStorage.getItem('popup_list')){
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('popup_list')))
        )
        state.popups = JSON.parse(localStorage.getItem('popup_list'))
      }
    },
    
    ADD_POPUP(state, popup) {
      popup.id = state.nextId++;
      state.popups.push(popup);
      state.selectedPopup = popup;
      localStorage.setItem('popup_list', JSON.stringify(state.popups));
    },
    SELECT_POPUP(state, popup) {
      state.selectedPopup = popup;

    },
    DELETE_POPUP(state, id) {
      if (state.selectedPopup.id == id) {
        state.selectedPopup = createEmptyPopup();
      }
      state.popups = state.popups.filter((p) => p.id != id);
    },
    UPDATE_POPUP(state, popup) {
      var store_p = state.popups.find((p) => p.id == popup.id);
      if (store_p != null) {
        store_p.name = popup.name;
        store_p.load_after = popup.load_after;
        store_p.scrolling = popup.scrolling;
        store_p.exit_after = popup.exit_after;
      }
    },
  },
  actions: {

    addPopup(context, popup) {
      context.commit("ADD_POPUP", popup);
    },
    selectPopup(context, popup) {
      context.commit("SELECT_POPUP", popup);
    },
    deletePopup(context, id) {
      context.commit("DELETE_POPUP", id);
    },
    updatePopup(context, popup) {
      context.commit("UPDATE_POPUP", popup);
    },
  },
  getters: {
    popups(state) {
      return state.popups;
    },
    selectedPopup(state) {
      return state.selectedPopup;
    },
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    // toggleModal() {
    //   // We pass the ID of the button that we want to return focus to
    //   // when the modal has hidden
    //   this.$refs['my-modal'].toggle('#toggle-btn')
    // }
  },
});
