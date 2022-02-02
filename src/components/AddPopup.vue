<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <form>
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Create your Popup
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <fieldset>
              <input type="hidden" id="id" :value="selectedPopup.id" />

              <div class="form-group">
                <label for="name">Name</label>
                <input
                  class="form-control"
                  type="text"
                  id="name"
                  :value="selectedPopup.name"
                />
              </div>

              <div class="form-group">
                <label for="load_after">load_after</label>
                <input
                  class="form-control"
                  type="number"
                  id="load_after"
                  :value="selectedPopup.load_after"
                />
              </div>

              <div class="form-group">
                <label for="scrolling">scrolling</label>
                <input
                  class="form-control"
                  type="number"
                  id="scrolling"
                  :value="selectedPopup.scrolling"
                />
              </div>
              <div class="form-group">
                <label for="exit_after">exit_after</label>
                <input
                  class="form-control"
                  type="number"
                  id="exit_after"
                  :value="selectedPopup.exit_after"
                />
              </div>
            </fieldset>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="savePopup"
              data-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PopupDetails",
  methods: {
    savePopup(event) {
      let id = event.target.form["id"].value;

      const p = {
        id: id,
        name: event.target.form["name"].value,
        load_after: event.target.form["load_after"].value,
        scrolling: event.target.form["scrolling"].value,
        exit_after: event.target.form["exit_after"].value,
      };

      if (id == -1) {
        this.$store.dispatch("addPopup", p);
        // localStorage.popupData = JSON.stringify(p);
       
        // this.p = JSON.parse(localStorage.popupData);
      } else {
        this.$store.dispatch("updatePopup", p);
      }
    },
  },
  computed: {
    ...mapState({
      selectedPopup: (state) => state.selectedPopup,
    }),
  },
};
</script>
