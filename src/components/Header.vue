<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" id="site-logo" class="navbar-brand" href="\">Impression Shop</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown"
            @mouseover="showServiceList = true"
            @mouseleave="showServiceList = false">
          <router-link
            to="/services"
            activeClass="active"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            aria-haspopup="true"
          ><a>
            Наші послуги
          </a></router-link>
          <div
            class="dropdown-menu"
            :class="{show: showServiceList}"
          >
            <a href="/services/he" class="dropdown-item nav-link">Для нього</a>
            <a href="/services/she" class="dropdown-item nav-link">Для неї</a>
            <div class="dropdown-divider"></div>
            <a href="/services/both" class="dropdown-item nav-link">Для обох</a>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" activeClass="active"><a class="nav-link">Контакти</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/feedback" activeClass="active"><a class="nav-link">Відгуки</a></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showServiceList: false
    }
  }
}
</script>

<style scoped>
  .dropdown-menu {
    margin: 0 !important;
  }
</style>
