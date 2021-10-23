<template>
  <div id="YMapsID">
<!--    <yandex-map :settings="settings">-->
<!--      &lt;!&ndash;Markers&ndash;&gt;-->
<!--    </yandex-map>-->
  </div>
</template>

<script>
// import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  // components: { yandexMap, ymapMarker},
  data(){
    return {
      // settings: {
      //   apiKey: 'f6db8737-3e90-43fd-bba2-cf42525a357b',
      //   lang: 'ru_RU',
      //   coordorder: 'latlong',
      //   enterprise: false,
      //   version: '2.1'
      // }
    }
  },
  name: "mapcomponent",
}
</script>

<style lang="scss" scoped>
#YMapsID{
  width: auto;
  height: auto;
  border-radius: 50px;
}

</style>