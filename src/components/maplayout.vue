<template>
  <quasar-layout>
    <h3>Map</h3>
    <div id='map'></div>
  </quasar-layout>
</template>

<script>
import {mapboxgl} from '../app'
console.dir(mapboxgl)

export default {
  data () {
    return {}
  },
  ready () {
    this.createMap()
  },
  methods: {
    createMap: function () {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW4td3lzcyIsImEiOiJVcm5FdEw4In0.S8HRIEq8NqdtFVz2-BwQog'
      var simple = {
        'version': 8,
        'sources': {
          'osm': {
            'type': 'vector',
            'tiles': ['https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-LM25tq4']
          }
        },
        'layers': [{
          'id': 'background',
          'type': 'background',
          'paint': {
            'background-color': '#adddd2'
          }
        }, {
          'id': 'majorroad',
          'source': 'osm',
          'source-layer': 'roads',
          'type': 'line'
        }, {
          'id': 'buildings',
          'type': 'fill',
          'source': 'osm',
          'source-layer': 'buildings'
        }]
      }

      // init the map
      this.map = new mapboxgl.Map({
        container: 'map',
        style: simple,
        center: [-1.83, -78.183],
        zoom: 5.5
      })
    }
  }
}
</script>

<style>
</style>
