<template>
    <div>
        <app-header/>
        <top-rated/>
        <popular/>
        <pupular-tv/>
    </div>
</template>

<script>
import AppHeader from './AppHeader'
import Popular from './MovieLists/Popular'
import PupularTv from './MovieLists/PupularTv'
import TopRated from './MovieLists/TopRated'
    export default {
  components: { AppHeader,TopRated,Popular,PupularTv },
        
}
</script>

<style lang="scss" scoped>

</style>