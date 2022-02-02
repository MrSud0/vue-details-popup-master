<template>
  <div id="app" class="container mt-2">
    <popup-list />
    <add-popup-details />
    <my-active-popup />
    <!-- <button type="button" class="btn btn-primary" @click="() => TogglePopup('buttonTrigger')">Open Popup</button> -->
    <!-- <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
        <h2>My Button Popup</h2>
      </Popup> -->
    <!-- <Popup v-if="popupTriggers.timedTrigger" :TogglePopup="() => TogglePopup('timedTrigger')">
        <h2>My Timed Popup</h2>
      </Popup> -->
      <!-- <main>
    <MyActivePopup v-if="popupTriggers.timedTrigger" :TogglePopup="() => TogglePopup('timedTrigger')">
      <h2>My Timed Popup</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </MyActivePopup>
      </main> -->
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";

// import Vuex from "vuex";
// import Vue from "vue";
import { ref } from "vue";

import PopupList from "./components/PopupList.vue";
import AddPopup from "./components/AddPopup.vue";
import MyActivePopup from "./components/MyActivePopup.vue";

export default {
  name: "app",
  store,
  beforeCreate(){
    this.$store.commit('initialiseStore');
  },
  components: {
    "popup-list": PopupList,
    "add-popup-details": AddPopup,
    "my-active-popup": MyActivePopup,
  },

  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: true,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    setTimeout(() => {
      popupTriggers.value.timedTrigger = true;
    }, 3000);

    return {
      MyActivePopup,
      popupTriggers,
      TogglePopup,
    };
  },
};
</script>
