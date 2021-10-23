<template>
  <div class="text-slider">
    <h1 class="left-title-slider">Заголовок H1</h1>
    <p class="text">Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Равным образом реализация намеченных плановых заданий требуют от нас анализа дальнейших направлений развития. Повседневная практика показывает...
    </p>
    <div class="price">
        <span>1000 &#8381;</span>
      <input class="slider-btn" type="button" value="В Корзину">
    </div>
  </div>
</template>

<script>
export default {
  name: "textcomponent"
}
</script>

<style lang="scss" scoped>
.text-slider{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 540px;
  width: 100%;
  margin-left: 125px;
  margin-top: 95px;
  .left-title-slider {
    font-family: $base-mm;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: #000000;
    margin-bottom: 45px;
    display: block;
  }
  .text{
    font-family: $base-mm;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    width: auto;
  }
  .price{
    display: flex;
    flex-wrap: wrap;
    width: auto;
    margin-top: 69px;
    span{
      font-family: $base-mm;
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 44px;
      color: #000000;
      margin-bottom: 25px;
    }
    .slider-btn{
      width: 255px;
      height: 49px;
      background: #C4C4C4;
      text-align: center;
      font-family: $base-mm;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
      border: none;
      cursor: pointer;
      margin-left: 60px;
    }
    .slider-btn:hover{
      color: #888888;
    }
    .slider-btn:active{
      background-color: #e9e7e7;
    }
  }

}
@media (min-width: 541px) and (max-width: 900px) {
  .text-slider{
    margin: 0 auto;
    justify-content: center;
    .left-title-slider{
      display: none;
    }
    .text{
      margin: 0 auto;
      width: 80%;
    }
    .price{
      margin: 69px auto;
      width: 80%;
      justify-content: space-around;
      .slider-btn{
        margin: 0;
      }
    }
  }
}
@media (max-width: 540px){
  .text-slider{
    margin: 0 auto;
    justify-content: center;
    .left-title-slider{
     display: none;
    }
    .text{
      margin: 45px auto;
      width: 80%;
    }
    .price{
      margin: 0 auto;
      width: 80%;
      justify-content: space-around;
      .slider-btn{
        margin: 0;
      }
    }
  }
}

</style>