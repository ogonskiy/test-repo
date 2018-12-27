<template>
  <label class="image-wrap">
    <div>
      +
      <input
        type="file"
        class="form-control"
        @change="loadTextFromFile"
      >
    </div>
  </label>
</template>

<script>
export default {
  methods: {
    loadTextFromFile (ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()

      reader.onload = e => this.$emit('load', e.target.result)
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-wrap {
    height: 100px;
    width: 100px;
    margin: auto;
    cursor: pointer;
    border: 1px solid #007bff;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;

    > div {
      text-align: center;
      padding: 10px;
      line-height: 10px;
      border-radius: 8px;
      background: #007bff;
      color: #fff;
      height: 30px;
      width: 30px;
      margin: 35px 0 0 35px;

      > input {
        display: none !important;
      }
    }
  }
</style>
