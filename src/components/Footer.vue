<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-header">Impression Shop - місце, де продаються мрії</div>
      <div class="row">
        <div class="col-sm-4">
          <small>Ви можете знайти нас за адресою:</small> <br>
          м. Київ, вул. Академіка Янгеля, 20
        </div>
        <div class="col-sm-4">
          <small><a href="tel:380961234567">+(380)96-123-45-67</a></small><br>
          <small><a href="tel:380961234567">+(380)73-123-45-67</a></small><br>
          <small><a href="tel:380961234567">+(380)66-123-45-67</a></small>
        </div>
        <div class="col-sm-4">© 2018 Copyright: ImpressionShop.com</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">

  footer {
    bottom: 0;
    width: 100%;
    padding: 30px 0;
    line-height: 20px;
    background-color: #f5f5f5;
    text-align: center
  }

  .footer-header {
    margin: 20px;
  }

  .contact-form {
    text-align: left;
  }
</style>
