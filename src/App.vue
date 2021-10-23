<template>
  <router-view>
    <Filterpage></Filterpage>
    <Slider></Slider>
    <Map></Map>
  </router-view>

</template>

<script>

import Filterpage from '@cf/Filterpage'
import Slider from '@cv/Slider'
import Map from '@cv/Maps'

export default {
  name: 'App',
  components: { Filterpage, Slider, Map }
}
</script>

<style lang="scss" scoped>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
