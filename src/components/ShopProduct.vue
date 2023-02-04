<template>
  <div class="product">
    <div class="product-imgDiv">
      <img src="@/assets/joggers.png" />
    </div>
    <p class="product-desc">Nike super comfortable joggers, made of fiber and made to last</p>
    <div class="product-addInfo">
      <h5>$40.0</h5>
      <img src="@/assets/love.png" />
    </div>
  </div>
</template>

<style scoped>
.product{
  width: 320px;
  overflow: hidden;
  color:#000000;
}
.product-imgDiv{
  width: 320px;
  height: 563px;
  overflow: hidden;
  border-radius: 8px;
}
.product-imgDiv img{
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: all 0.1s cubic-bezier(.17,.67,.83,.67);
}
.product-imgDiv img:hover{
  transform: scale(1.1);
}
.product-desc{
  /* display: none; */
  font-size: 16px;
  line-height: 26px;
  margin: 0;
  margin-top: 14px;
}
.product-addInfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.product-addInfo h5{
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
}
.product-addInfo img{
  cursor: pointer;
}
</style>