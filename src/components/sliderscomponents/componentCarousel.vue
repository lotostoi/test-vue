<template>
  <section class="section">
    <div class="card">
      <div class="card-content">
        <carousel
          :starting-image="2"
          :images="images"
          :auto-slide-interval="1500"
          :show-progress-bar="true"
        ></carousel>
      </div>
    </div>
  </section>
</template>

<script>
import carousel from '@/components/sliderscomponents/carouselItem'
export default {
  name: 'componentCarousel',
  components: { carousel },
  data () {
    return {
      images: [
        {
          id: '1',
          big: require('@/assets/img/carousel/big/p1.jpeg'),
          thumb: require('@/assets/img/carousel/small/p1.jpeg')
        },
        {
          id: '2',
          big: require('@/assets/img/carousel/big/p2.jpeg'),
          thumb: require('@/assets/img/carousel/small/p2.jpeg')
        },
        {
          id: '3',
          big: require('@/assets/img/carousel/big/p3.jpeg'),
          thumb: require('@/assets/img/carousel/small/p3.jpeg')
        },
        {
          id: '4',
          big: require('@/assets/img/carousel/big/p4.jpeg'),
          thumb: require('@/assets/img/carousel/small/p4.jpeg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  margin-left: 165px;
  margin-top: 95px;
}
.card-carousel {
  user-select: none;
  position: relative;
}

.progressbar {
  display: block;
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: rgba(221, 221, 221, 0.25);
  z-index: 1;
}

.progressbar > div {
  background-color: rgba(255, 255, 255, 0.52);
  height: 100%;
}

.thumbnails {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 2px;
}

.thumbnail-image > img {
  width: 100%;
  height: auto;
  transition: all 250ms;
}

.thumbnail-image:hover > img,
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}

.card-img {
  position: relative;
  margin-bottom: 15px;
}

.card-img > img {
  display: block;
  margin: 0 auto;
}

.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}

.actions > span {
  cursor: pointer;
  transition: all 250ms;
}

.actions > span.prev {
  margin-left: 5px;
}

.actions > span.next {
  margin-right: 5px;
}

.actions > span:hover {
  color: #eee;
}
@media (min-width: 541px) and (max-width: 900px) {
  .section {
    margin: 0 auto;
  }
}
@media (max-width: 540px) {
  .section {
    margin: 0 auto;
  }
  .card {
    max-width: 95%;
    margin: 0 auto !important;
  }
}
</style>
