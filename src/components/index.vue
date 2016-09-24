<template>
  <quasar-layout>
    <div slot='header' class='toolbar'>
      <quasar-toolbar-title :padding='1'>
        Quasar App
      </quasar-toolbar-title>
    </div>

    <!-- Replace "div" with "router-view" if using subRoutes -->
    <div class='layout-view'>

      <!-- Only Date -->
      <quasar-datetime
        :model.sync='model'
        type='date'
      ></quasar-datetime>


    </div>
  </quasar-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
