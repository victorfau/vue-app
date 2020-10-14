<template>
    <tr>
        <td/>
        <td v-bind:class="{error: error}">
            <input v-bind:class="{error: error}" @keypress.enter="createPage" @change="disable_error" v-model="new_page" type="text" placeholder="titre de la nouvelle page" id="">
        </td>
        <td/>
        <td>
            <button @click.prevent="createPage">Create</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "admin_list_item_add",
    data(){
        return{
            new_page: '',
            error: true
        }
    },
    methods: {
        createPage(){
            if(this.new_page === ''){
                this.error = true
            }
            if(!this.error){
                this.$store.commit('create_page', this.new_page)
                this.new_page = ''
            }
        },
        disable_error(){
            this.error = false
        }
    }
}
</script>

<style scoped>
tbody tr td input{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: solid 1px black;
}

.error{
    background-color: lightcoral;
}
</style>
