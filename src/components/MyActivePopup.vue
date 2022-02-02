<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
    <div class="modal-content">
      <!-- <slot name=""/> -->
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Popup</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="TogglePopup()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="popup-content">Congrats!</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup"],

  // methods: {
  //     showModal() {
  //       this.$refs['my-modal'].show()
  //     },
  //     hideModal() {
  //       this.$refs['my-modal'].hide()
  //     },
  //     toggleModal() {
  //       // We pass the ID of the button that we want to return focus to
  //       // when the modal has hidden
  //       this.$refs['my-modal'].toggle('#toggle-btn')
  //     }
  //   }
};
</script>
