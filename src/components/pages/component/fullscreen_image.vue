<template>
<div class="fullscreen">
    <img src="http://lorempixel.com/output/nightlife-q-g-1046-480-7.jpg" alt="">
</div>
</template>

<script>
export default {
    name: "test",
    props: {
        bloc_data: Object
    }
}
</script>

<style scoped>
.fullscreen{
    max-height: calc(100vh - 5em);
    position: relative;
}

.fullscreen img{
    width: 100%;
    max-height: 100%;

}

</style>
