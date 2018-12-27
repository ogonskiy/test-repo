<template>
  <div>
    <div
      class="service-main-image"
      :style="{
      backgroundImage: `url(${service.images[0].url})`,
      backgroundPosition: `bottom`,
      backgroundSize: `cover`,
      height: `500px`
      }"
      >

      <h2>
        <span>
          {{ service.title }}
        </span>
      </h2>
    </div>
    <div class="service-details">
      <p>{{ service.details }}</p>
      <carousel>
        <slide v-for="image in service.images" :key="image.url">
          <div
            :style="{
              background: `url(${image.url})`,
              height: `300px`,
              backgroundSize: `cover`,
              backgroundPosition: `center`
              }"
          ></div>
        </slide>
      </carousel>
      <br>
      <h3>Нас можна знайти тут</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6347868625667!2d30.449400315697744!3d50.44790297947501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc26fd25e1e1%3A0xe9c8486538484580!2z0LLRg9C70LjRhtGPINCQ0LrQsNC00LXQvNGW0LrQsCDQr9C90LPQtdC70Y8sIDIwLCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1545680769718" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'

export default {
  name: 'ServiceItem',
  data () {
    return {
      id: +this.$route.params.id,
      service: ''
    }
  },
  created () {
    this.$http.get('https://impression-shop.firebaseio.com/services.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        let currentService = ''
        for (let key in data) {
          // services.push(data[key])
          if (data[key].index === this.id) {
            currentService = data[key]
          }
        }
        this.service = currentService
      })
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
  .service-main-image {
    > h2 {
      color: #fff !important;

      > span {
        background: rgba(0, 0, 0, 0.4);
        line-height: 500px;
      }
    }
  }
  .service-details {
    max-width: 600px;
    margin: 30px auto;
  }
</style>
