<template>
  <section class="clothes-section">
    <div class="clothes-section_locationDiv">
      <ul class="location_lists">
        <li>Home<span></span></li>
        <li>Clothes<span></span></li>
        <li>Men<span></span></li>
        <li>Joggers<span></span></li>
      </ul>
    </div>
    <div class="clothes-section_headerDiv">
      <h2 class="clothes-section_headerDiv_header">Men’s Joggers & sweat pants</h2>
      <p class="clothes-section_headerDiv_para">For every style you have in mind that you envision to wear or indulging in a post-work, our set of men’s joggers has what you're after. Shop men’s sweatpants from HARRY STYLES and discover clothing comfortable and stylish. No matte the size you want it or  like it we’ve got you, It could be big, oversized, skinny or sort of a cargo, dress the way you see fit .</p>
    </div>
    <div class="clothes-section_inputDiv">
      <SelectInput />
      <SelectInput />
      <SelectInput />
      <SelectInput />
      <SelectInput />
      <SelectInput />
      <SelectInput />
      <SelectInput />
      <SelectInput />
      <SelectInput />
    </div>
    <div class="clothes-section_displayDiv">
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
      <ShopProduct />
    </div>
  </section>
</template>


<script>
import SelectInput from '@/components/SelectInput.vue';
import ShopProduct from '@/components/ShopProduct.vue';
export default {
  name: 'ClothesView',
  components:{
    SelectInput,
    ShopProduct
  }
}


</script>
<style scoped>
.clothes-section_locationDiv{
  background-color: hsla(0, 0%, 96%, 1);
}
.location_lists{
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 10px 0;
  margin-left: 2.5%;
}
.location_lists li{
  display: flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  font-size: 16px;
  color:hsla(215, 14%, 34%, 1);
}
.location_lists li span{
  display: block;
  width: 6.75px;
  height: 6.75px;
  margin-left: 10px;
  margin-top: 2.5px;
  /* background-color: red; */
  border-right: 1px solid hsla(218, 11%, 65%, 1);
  border-bottom: 1px solid hsla(218, 11%, 65%, 1);
  transform: rotate(-45deg);
}
.clothes-section_headerDiv{
  margin: 0 auto;
  margin-top: 43px;
  max-width: 95%;

}
.clothes-section_headerDiv_header{
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: #000000;
  line-height: 130%;
}
.clothes-section_headerDiv_para{
  padding: 0;
  margin: 0 auto;
  margin-top: 5px;
  max-width: 76%;
  text-align: center;
  line-height: 24px;
  color: #000000;
}
.clothes-section_inputDiv{
  /* width: 100%; */
  background-color: #F5F5F5;
  padding: 32px 45px;
  margin-top: 63px;
  display: flex;
  row-gap: 34px;
  column-gap: 50px;
  flex-wrap: wrap;
}
.clothes-section_displayDiv{
  margin: 0 auto;
  margin-top: 77px;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  row-gap: 70px;
  justify-content: center;
  
}
</style>