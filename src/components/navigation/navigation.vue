<template>
    <div id="nav" v-bind:class="{admin: is_auth}">
        <img id="nav_logo" src="../../assets/logo.png" alt="">
        <nav id="nav_content">
            <ul>
                <Nav_item @click.prevent="changeWatch(page.link)" v-for="page in pages" v-if="page.active" :key="page.name" v-bind:title="page.name" v-bind:link="page.link"/>
            </ul>
        </nav>
    </div>
</template>

<script>
import Nav_item from "./nav_item";
export default {
    name: "navigation",
    components: {
        Nav_item
    },
    computed: {
        pages() {
            return this.$store.state.pages
        },
        is_auth(){
            return this.$store.state.user.is_auth
        }
    },
    methods: {
        changeWatch(direction){
            console.log(direction)
        },
    },

}
</script>

<style scoped>
#nav {
    z-index: 10;
    height: 5em;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

    background-color: white;
}

#nav_logo {
    max-height: 80%;
    margin: auto 3em;
}

#nav_content {
    display: flex;
    flex-direction: row;
    align-content: center;

    margin-right: 3em;
}

#nav_content ul {
    display: flex;
    flex-direction: row;

    list-style: none;
}


</style>
