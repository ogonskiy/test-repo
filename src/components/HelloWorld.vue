<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div class="container">
      <div class="footer-header">Ми знаємо, ви хочете<br>
        <small>(заповніть форму і наш менеджер зв'яжеться з вами в лічені секунди)</small>
      </div>
      <form method="post" action="/serviceRequest" id="contact-form" class="contact-form">
        <div class="form-group">
          <label for="email">Ваш емейл</label>
          <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" required>
        </div>
        <div class="form-group">
          <label for="service-category">Оберіть категорію послуги <br><small>(так наш менеджер зможе швидше опрацювати ваші дані)</small></label>
          <select class="form-control" id="service-category" name="service-category">
            <option>Для нього</option>
            <option>Для неї</option>
            <option>Для обох</option>
          </select>
        </div>
        <div class="form-group">
          <label for="details">Вкажіть конкретну послугу та інші деталі (якщо потрібно)
            <br><small>(не менше 10 символів)</small>
          </label>
          <textarea class="form-control" id="details" name="details" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Відправити</button>
      </form>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hello {
  margin: 60px 0;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
