<template>
  <div>
    <div class="container">
      <section class="hero-section">
        <div class="section-one">
          <img src="@/assets/hero-1.png" alt="">
          <div>
            <p>Explore the best fits, jewelries, and accessories going into ‘23</p>
            <button>SHOP</button>
          </div>
        </div>

        <div class="section-two">
          <img src="@/assets/hero-2.png" alt="">
          <img src="@/assets/hero-3.png" alt="">
        </div>

        <div class="section-three">
          <img src="@/assets/hero-4.png"  alt="">
        </div>
      </section>

      <div class="hero-text-container">
        <div class="hero-text">
          <p><span>HS</span><span>move</span></p>
        </div>

        <p class="hero-text__distort">
          <span style="color: white">in</span><span>to Style</span>
        </p>
      </div>
    </div>
  </div>

  <section class="banner-section">
    <div>
      <p>stylist picks beat the heat</p>
      <button>shop now</button>
    </div>
  </section>

  <section class="arrivals-section">
    <p class="arrivals-header-text">NEW ARRIVALS</p>
    <p>Elevate your style wearing the new set clothes and accessories</p>
    <div class="arrivals-buttons">
      <button>Shop Women</button>
      <button>Shop Men</button>
      <button>Shop Accessories</button>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.container{
  margin-top: 120px;
  position: relative;
  width: 100%;
}

.hero-section{
  display: grid;
  grid-template-columns: 0.5fr 0.6fr 0.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 7px;
  max-width: 100%;
  position: relative;
  left: 0;
  overflow-x: hidden;
  background: #F5F5F5;
  padding: 35px 0;
}

.section-one img{
  max-width: 483px;
  max-height: 491px;
}

.section-one > div{
  margin: 0 auto;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  padding: 0 33px;
}

.section-one > div button{
  width: 100%;
  padding: 10px 0;
  background: #F5F5F5;
  font-weight: 600;
  border-radius: 8px;
}

.section-two img{
  width: 598px;
  height: 325px;
}

.section-three {
  display: flex;
  align-self: flex-end;
  max-width: 508px;
}

.hero-text-container{
  z-index: 12;
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
}

.hero-text > p{
  text-align: right;
  padding-right: 31px;
}

.hero-text > p span:nth-child(2){
  font-size: 80px;
  font-weight: 700;
  padding-left: 7px;
}

.hero-text > p span{
  font-size: 48px;
}

.hero-text-container .hero-text__distort{
  font-size: 96px;
  line-height: 0;
  margin: 0;
  padding-top: 30px;
  font-weight: 700;
  position: relative;
  right: 28px;
}

.banner-section{
  width: 97%;
  background: url("@/assets/section-1.png");
  min-height: 550px;
  position: relative;
  margin: 96px auto;
  font-size: 48px;
  font-weight: 700;
  color: white;
  line-height: 48px;
  text-transform: uppercase;
}

.banner-section > div {
  max-width: 490px;
  position: absolute;
  right: 0;
  top: 190px;
  padding-right: 60px;
  text-align: center;
}

.banner-section > div > p{
  margin: 0;
}

.banner-section button{
  padding: 12px 32px;
  color: white;
  background: black;
  text-transform: capitalize;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 2rem;
}

.arrivals-buttons button{
  padding: 8px 15px;
  width: fit-content;
  color: white;
  background: black;
  text-transform: capitalize;
  border-radius: 8px;
  font-size: 1rem;
}

.arrivals-section{
  margin: 0 auto;
  width: fit-content;
}

.arrivals-header-text{
  width: 100%;
  font-weight: 800;
  font-size: 4rem;
  margin: 0;
}

.arrivals-buttons{
  display: flex;
  justify-content: space-between;
}

.arrivals-section > p:nth-child(2){
  text-align: center;
  font-size: 12px;
  font-weight: 800;
  padding-bottom: 12px;
}
</style>
