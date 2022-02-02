import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap-icons/font/bootstrap-icons.css";

Vue.config.productionTip = false;

new Vue({
  store: store,
  // beforeCreate() { this.$store.commit('initialiseStore');},

  // mounted(){
  //   if (localStorage.popups) {
  //     // this.popups = localStorage.popups;
  //     this.store = JSON.parse(localStorage.store);
  //   }
  // },
  // watch: {
  //   store:{
  //     handler(newPopups){
  //       // console.log('Update')
  //       // localStorage.popups = newPopups;
  //       localStorage.store = JSON.stringify(newPopups);
  //     },
  //     deep: true
  //   }
  // },
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
