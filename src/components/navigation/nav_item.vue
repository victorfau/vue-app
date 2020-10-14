<template>
<li>
    <RouterLink :to="{path: '/' + link}">{{ title }}</RouterLink>
</li>
</template>

<script>



export default {
    name: "nav_item",
    props: {
        title: String,
        link: String
    }
}
</script>

<style scoped>
#nav_content ul li {
    margin: auto 10px;
    vertical-align: center;
}

#nav_content ul li a {
    text-decoration: none;
    color: black;

    padding-left: 1em;
    padding-right: 1em;

    cursor: pointer;

    transition: 0.1s;
}

#nav_content ul li a:hover {
    border-bottom: solid;
}
</style>
