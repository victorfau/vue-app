<template>
    <tr>
        <td>
            <input type="checkbox" v-bind:checked="active" id="">
        </td>
        <td>{{ name }}</td>
        <td>{{ nb_bloc }}</td>
        <td>
            <RouterLink tag="button" :to="{path: '/admin/' + link}">modify</RouterLink>
            <button>delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "admin_list_item",
    props: {
        active: Boolean,
        link: String,
        name: String,
        nb_bloc: Number
    }
}
</script>

<style scoped>
tbody tr td:first-child {
    text-align: center;
}

button{
    cursor: pointer;
}
</style>
