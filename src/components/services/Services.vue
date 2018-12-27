<template>
  <div class="services-wrap">
    <h1>Services page</h1>
    <button
      class="btn-dark"
      @click="showAddServiceForm = !showAddServiceForm"
    >
      Добавити нову послугу
    </button>
    <div
      class="container"
      v-if="showAddServiceForm"
    >
      <div id="new-service-form" class="contact-form">
        <div class="form-group">
          <label for="new-service-name">Назва нової послуги</label>
          <input
            type="text"
            name="service-name"
            class="form-control"
            id="new-service-name"
            placeholder="напр. Стрибок з парашутом"
            required
            v-model="newService.title"
          >
        </div>
        <div class="form-group">
          <label for="new-service-name">Зображення для послуги</label>
          <br>
          <div class="row">
            <div
              v-for="image in newService.images"
              :key="image.url"
              class="col-sm-2"
            >
              <div class="image-container">
                <img
                  :src="image.url"
                  width="100%"
                  height="100%"
                >
              </div>
            </div>
            <div class="col-sm-2">
              <app-image-reader @load="addNewServiceImage"></app-image-reader>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="service-category">Оберіть категорію послуги <br></label>
          <select
            class="form-control"
            id="service-category"
            name="sex"
            v-model="newService.sex"
          >
            <option value="he">Для нього</option>
            <option value="she">Для неї</option>
            <option value="both">Для обох</option>
          </select>
        </div>
        <div class="form-group">
          <label for="details">Вкажіть деталі послуги
            <br><small>(не менше 10 символів)</small>
          </label>
          <textarea
            class="form-control"
            id="details"
            name="details"
            rows="3"
            required
            v-model="newService.details"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click="addNewService"
        >
          Відправити
        </button>
      </div>
    </div>
    <app-modal-window
      :status="modalWindow.status"
      v-if="modalWindow.text != ''"
    >
      <span>{{ modalWindow.text }}</span>
    </app-modal-window>

    <router-view/>

    <br>
    <div class="row">
      <div
        v-for="service in services"
        :key="service.title"
        class="service-wrap col-md-6"
      >
        <div>
          <router-link
            class="service-item"
            :to="'/' + service.index.toLocaleString()"
          >
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
            <div class="service-info">
              <h2>{{ service.title }}</h2>
              <p>{{ service.details }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow'
import ImageReader from '@/components/ImageReader'
import {Carousel, Slide} from 'vue-carousel'

export default {
  name: 'Services',
  data () {
    return {
      showAddServiceForm: false,
      newService: {
        title: '',
        images: [],
        sex: '',
        details: '',
        index: Number
      },
      response: {
        text: '',
        status: true
      },
      category: window.location.pathname.split('/').pop(),
      services: []
    }
  },
  methods: {
    addNewService () {
      this.newService.index = this.services.length + 1
      this.$http.post('https://impression-shop.firebaseio.com/services.json', this.newService)
        .then(response => {
          this.response.status = true
          this.response.text = `Нова послуга "${this.newService.title}" добавлена!`
          this.$store.dispatch('setModalWindow', this.response)

          this.newService.title = ''
          this.newService.images = ''
          this.newService.sex = ''
          this.newService.details = ''
          console.log(response)
        }, error => {
          this.response.status = false
          this.response.text = `Виникли деякі проблеми, спробуйте ще раз пізніше`
          console.log(error)
        })
    },
    addNewServiceImage (url) {
      this.newService.images.push({
        url
      })
    }
  },
  computed: {
    modalWindow () {
      return this.$store.getters.modalWindow
    }
  },
  mounted () {
    this.$http.get('https://impression-shop.firebaseio.com/services.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const resultArray = []
        const doFilter = this.category === 'services'
        for (let key in data) {
          if (doFilter || data[key].sex === this.category) {
            resultArray.push(data[key])
          }
        }
        this.services = resultArray
      })
  },
  components: {
    appModalWindow: ModalWindow,
    appImageReader: ImageReader,
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
  .services-wrap {
    max-width: 900px;
    margin: 30px auto 30px;
  }

  #new-service-form {
    margin: 30px;
  }
  .image-container {
    max-height: 100px;
    overflow: hidden;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

    > img {
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
    }
  }
  .service-wrap {
    padding-top: 10px;

    > div {
      background-color: #f5f5f5;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
  }
  .service-info {
    padding: 15px;

    > p {
      max-height: 37px;
      overflow: hidden;
    }
  }
  .service-item {
    color: #2c3e50 !important;
    display: block;

    &:hover {
      text-decoration: unset !important;
    }

    > section {
      height: 345px;
    }
  }
  .impression-header {
    text-align: left;
  }
</style>
