<template>
    <div id="general_edition">
        <h1>Edition global des pages</h1>
        <table>
            <thead>
            <tr>
                <th id="col_view"/>
                <th id="col_name">page</th>
                <th id="col_nb_bloc">nombre de blocs</th>
                <th id="col_action">actions</th>
            </tr>
            </thead>
            <tbody>
            <Admin_list_item
                v-for="page in pages"
                :key="page.link"
                :active="page.active"
                :name="page.name"
                :link="page.link"
                :nb_bloc="page.content.length"
            />
            <Admin_list_item_add/>
            </tbody>
        </table>
    </div>
</template>

<script>
import Admin_list_item from "./components/admin_list_item";
import Admin_list_item_add from "./components/admin_list_item_add";

export default {
    name: "general_edition",
    components: {Admin_list_item_add, Admin_list_item},
    computed: {
        pages() {
            return this.$store.state.pages
        },
    }
}
</script>

<style scoped>

#general_edition{
}

h1{
    margin: 3em auto;
    width: 80%;
}
table {
    border-spacing: 1px;
    border-collapse: collapse;
    background: white;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    position: relative;
}

thead tr {
    text-align: left;
    height: 60px;
    background: black;
    color: white;
    font-size: 16px;
}

table #col_view {
    width: 10%;
    text-align: center;
}

table #col_name {
    width: 50%;
}

table #col_nb_bloc {
    width: 20%;
}

table #col_action {
    text-align: center;
    width: 20%;
}

tbody tr {
    height: 60px;
    font-size: 16px;
}
tbody tr:nth-child(even){
    background-color: lightgray;
}

</style>
