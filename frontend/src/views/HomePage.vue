<template>
<div>
  <div class="head">
    <p>ยินดีต้อนรับ</p>
    <!-- search -->
    <div class="field has-addons-centered">
      <div class="control is-half">
        <input class="input" type="text" placeholder="Find a repository" />
      </div>
      <div class="control is-centered">
        <a class="button is-info"> Search </a>
      </div>
    </div>
  </div>
  <div class="container">
    
    <div class="columns is-multiline">
      <!-- brand -->
      <!-- v-for="value in phones" :key="value.id" -->
      <div class="brand mt-6 ml-5 mr-4">
        <div class="imgPhone">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-purple-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169055000"
          />
        </div>
        <div class="namePhone">
          <button class="button is-warning">iphone 11</button>
        </div>
      </div>
      <div class="brand mt-6 ml-5 mr-4">
        <div class="imgPhone">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-purple-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169055000"
          />
        </div>
        <div class="namePhone">
          <button class="button is-warning">iphone 11</button>
        </div>
      </div>
      <div class="brand mt-6 ml-5 mr-4">
        <div class="imgPhone">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-purple-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169055000"
          />
        </div>
        <div class="namePhone">
          <button class="button is-warning">iphone 11</button>
        </div>
      </div>
      <div class="brand mt-6 ml-5 mr-4">
        <div class="imgPhone">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-purple-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169055000"
          />
        </div>
        <div class="namePhone">
          <button class="button is-warning">iphone 11</button>
        </div>
      </div>
      <div class="brand mt-6 ml-5 mr-4">
        <div class="imgPhone">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-purple-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169055000"
          />
        </div>
        <div class="namePhone">
          <button class="button is-warning">iphone 11</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  background-color: blueviolet;
  width: 100%;
}

.imgPhone {
  width: 150px;
  height: 100px;
  margin: 10%;
}
.namePhone {
  padding-top: 30%;
  padding-left: 15%;
  margin: 10%;
}
.head {
  width: 100%;
  height: 10%;
  top: 9%;
  padding: 50px;
  background-color: #6d9886;
  text-align: center;
  font-size: xx-large;
  color: #f2e7d5;
}
</style>
