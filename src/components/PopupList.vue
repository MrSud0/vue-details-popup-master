<template>
  <div>
    <div class="row align-items-center">
      <div class="col">
        <h1>Popup Manager</h1>
      </div>
      <div class="col col-lg-3">
        <div class="row">
          <div class="col">
            <button class="btn btn-secondary-outline bi bi-plus-square-dotted" @click="popup('add')"> Add </button>
          </div>
          <div class="col">
            <button
              class="btn btn-secondary-outline bi bi-pencil"
              @click="popup('edit')"
              :disabled="this.$store.getters.selectedPopup.id == -1"
            >
              Edit
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-secondary-outline bi bi-trash"
              @click="deleteRow"
              :disabled="this.$store.getters.selectedPopup.id == -1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">load_after</th>
              <th scope="col">scrolling</th>
              <th scope="col">exit_after</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="popup in this.$store.getters.popups" :key="popup.id" @click="selectRow(popup)" :class="{ 'table-primary': isSelected(popup.id) }">
              <td scope="row">{{ popup.name }}</td>
              <td>{{ popup.load_after }}</td>
              <td>{{ popup.scrolling }}</td>
              <td>{{ popup.exit_after }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.min.js";
import { createEmptyPopup } from "@/utils.js";

import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "PopupList",
  methods: {
    selectRow(p) {
      this.$store.dispatch("selectPopup", p);
    },
    isSelected(id) {
      return id == this.$store.getters.selectedPopup.id;
    },
    deleteRow() {
      this.$store.dispatch("deletePopup", this.$store.getters.selectedPopup.id);
    },
    popup(action) {
      if (action === "add") {
        this.$store.dispatch("selectPopup", createEmptyPopup());
      }
      console.log($("#exampleModal"));
      $("#exampleModal").modal("show");
    },
  },
};
</script>
