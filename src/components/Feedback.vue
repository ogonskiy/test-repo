<template>
  <div>
    <h2>Залиште ваш відгук</h2>
    <div id="new-comment-form" class="comment-form">
      <div class="form-group">
        <label for="comment-name">Ваше ім'я</label>
        <input
          type="text"
          name="comment-name"
          class="form-control"
          id="comment-name"
          required
          v-model="newComment.name"
        >
      </div>
      <div class="form-group">
        <label for="comment-text">Ваш коментар</label>
        <textarea
        class="form-control"
        id="comment-text"
        name="comment-text"
        rows="3"
        required
        v-model="newComment.text"
        ></textarea>
        <br>
        <button
          type="submit"
          class="btn btn-primary"
          @click="addNewComment"
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
    <div class="row comment-details">
      <carousel>
        <slide v-for="comment in comments" :key="comment.name">
          <div class="comment-info">
            <h2>{{ comment.name }}</h2>
            <p>{{ comment.text }}</p>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow'
import {Carousel, Slide} from 'vue-carousel'

export default {
  name: 'Feedback',
  data () {
    return {
      newComment: {
        name: '',
        text: ''
      },
      response: {
        status: false,
        text: ''
      },
      comments: []
    }
  },
  methods: {
    addNewComment () {
      // this.newService.index = this.services.length + 1
      this.$http.post('https://impression-shop.firebaseio.com/comments.json', this.newComment)
        .then(response => {
          this.response.status = true
          this.response.text = `Ваш коментар додано!`
          this.$store.dispatch('setModalWindow', this.response)

          this.newComment.name = ''
          this.newComment.text = ''
          this.loadComments()
        }, error => {
          this.response.status = false
          this.response.text = `Виникли деякі проблеми, спробуйте ще раз пізніше`
          console.log(error)
        })
    },
    loadComments () {
      this.$http.get('https://impression-shop.firebaseio.com/comments.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          const resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.comments = resultArray
        })
    }
  },
  computed: {
    modalWindow () {
      return this.$store.getters.modalWindow
    }
  },
  mounted () {
    this.loadComments()
  },
  components: {
    appModalWindow: ModalWindow,
    Carousel,
    Slide
  }
}
</script>

<style scoped>
  #new-comment-form {
    width: 600px;
    margin: 30px auto;
  }
  .comment-details {
    max-width: 600px;
    padding-left: calc(50% - 250px);
    margin: 30px auto;
  }
</style>
