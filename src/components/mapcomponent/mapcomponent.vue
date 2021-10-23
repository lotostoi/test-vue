<template>
  <yandex-map :coords="coords" zoom="10">
    <ymap-marker :coords="coords" />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: { yandexMap, ymapMarker },
  data: function () {
    return {
      coords: [54.82896654088406, 39.831893822753904]
    }
  }
}
</script>

<style lang="scss" scoped>
.ymap-container {
  height: 700px;
}
</style>
