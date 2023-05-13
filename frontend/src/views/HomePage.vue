<template>
  <div>
    <div class="head">
      <p>ยินดีต้อนรับ</p>
    </div>
    <div class="container">
      <!-- search -->
      <div class="columns is-multiline">
        <div class="column is-11">
          <input
            class="input is-rounded is-hovered"
            type="text"
            v-model="search"
            placeholder="Search"
          />
        </div>
        <div class="column is-1">
          <button @click="getBlogs" class="button is-warning">Search</button>
        </div>
      </div>
      <div class="columns is-multiline">
        <!-- brand -->
        <!-- Card element start here------------------------------------------>
        <div id="card_product" class="column is-one-quarter">
          <div class="card" style="width: 300px">
            <div class="card-image" style="padding-top: 5%">
              <figure class="image is-1by1">
                <img
                  src="./img/IPhone 13 Pro Max.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">iphone11</p>
                  <p class="subtitle is-6">apple</p>
                  <p class="subtitle is-6 has-text-danger">1500 ฿</p>
                </div>
                <!-- <div class="namePhone">
                  <button class="button is-warning">iphone 11</button>
                </div> -->
              </div>
              <button class="button is-success is-fullwidth is-outlined">จองเลย</button>
            </div>
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
  /* background-color: blueviolet; */
  width: 100%;
  padding-top: 5%;
}
.card:hover{
  border: 1px solid #A9907E;
}
.image {
  max-width: 100%;
  margin: 10%;
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
