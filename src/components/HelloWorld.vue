<template>
    <div>
        <h1>{{ user.name }} {{user.lastname}}</h1>
        <p>{{user.email}}</p>
        <p>{{user.role}}</p>
    </div>
</template>

<script>

export default {
    name: 'HelloWorld',
    computed: {
        user() {
            return this.$store.state.user
        },
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
