<template>
  <div class="modal-window" :class="classOfModal">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'ModalWindow',
  props: ['status'],
  mixins: [clickaway],
  computed: {
    classOfModal () {
      return {
        'background-green': this.status,
        'background-red': !this.status
      }
    }
  }
}
</script>

<style lang="scss">
  .modal-window {
    position: absolute;
    top: 300px;
    left: 30%;
    text-align: center;
    width: 40%;
    padding: 0 10px;
    z-index: 3;
    background-color: white;
    border-radius: 10px;

    > div {
      max-width: 300px;
      margin: 20px auto;
      padding: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      color: white;
    }
  }
  .background-green {
    border: 1px solid rgb(0, 100, 100);

    > div {
      background-color: rgba(0, 100, 100, 0.6);
    }
  }
  .background-red {
    border: 1px solid rgb(100, 10, 0);

    > div {
      background-color: rgba(100, 10, 0, 0.6);
    }
  }
</style>
