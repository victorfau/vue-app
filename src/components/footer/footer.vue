<template>
    <footer>
        <div>
            <p>author : victor FAU</p>
        </div>
        <div>

        </div>
    </footer>
</template>

<script>
export default {
    name: "footer"
}
</script>

<style scoped>
footer {
    background-color: black;
    color: white;
    height: 5em;

    display: flex;
    flex-direction: row;
    justify-content: center;
}

footer div{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    font-style: oblique;
}
</style>
