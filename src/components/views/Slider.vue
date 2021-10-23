<template>
  <h1 class="top-title-slider">Заголовок H1</h1>
  <div class="clearfix"></div>
  <div class="slider">
    <CarouselCompon></CarouselCompon>
    <TextCompon></TextCompon>
  </div>


</template>

<script>
import CarouselCompon from "@/components/sliderscomponents/componentCarousel";
import TextCompon from "@/components/sliderscomponents/sliderText/textcomponent";
export default {
components: {CarouselCompon, TextCompon},
  name: "Slider"
}
</script>

<style lang="scss" scoped>
.top-title-slider{
  text-align: center;
  font-family: $base-mm;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
  margin-bottom: 45px;
  display: none;
}
.clearfix{
  clear: both;
}
.slider{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
@media (min-width: 541px) and (max-width: 900px) {
  .slider{
    flex-direction: column;
    justify-content: space-around;
  }
  .top-title-slider{
    display: none;
  }
}
@media (max-width: 540px){
  .slider{
    flex-direction: column;
    justify-content: space-around;
  }
  .top-title-slider{
    margin-top: 45px;
    display: block;
  }
}


</style>