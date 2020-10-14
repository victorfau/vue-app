<template>
    <div class="template">
        <section v-for="bloc in content">
            <component v-bind:is="bloc.type" v-bind:bloc_data="bloc"/>
        </section>
    </div>
</template>

<script>

import Image_text from "./component/image_text";
import Text_image from "./component/text_image";
import fullscreen_image from "./component/fullscreen_image";
import Carousel from "./component/carousel";
export default {
    name: "templatedPage",
    components: {
        Image_text,
        Text_image,
        Carousel,
        fullscreen_image
    },
    mounted() {
        this.newWatch();
        console.log(this.$store.state.watch)
    },
    computed:{
        content(){
            return this.$store.state.watch.content
        }
    },
    beforeRouteUpdate(to, from, next){
        this.$store.commit('watch', to.params.link)
        next()
    },
    methods: {
        newWatch() {
            this.$store.commit('watch', this.$route.params.link)
        }
    },
}
</script>

<style scoped>
section{
    margin: 5em 0;
}

.template:first-child{
    margin-top: 0;
}

.template section:last-child{

}
</style>
