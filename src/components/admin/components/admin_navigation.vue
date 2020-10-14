<template>
    <div id="nav">
        <div id="save_container">
            <button v-if="need_save" @click="save_data">Enregistrer</button>
        </div>
        <nav id="nav_content">
            <ul>
                <li>general edition</li>
                <li>Déconexion</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "admin_navigation",
    computed: {
        need_save(){
            return this.$store.state.need_save
        }
    },
    methods:{
        save_data(){
            //todo faire la sauvegarde quand api prete
            this.$store.commit('data_save')
        }
    }
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

#nav #save_container{
    width: 20%;
    display: flex;
}
#nav #save_container button{
    margin: auto;
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
#nav_content ul li {
    margin: auto 10px;
    vertical-align: center;
}

#nav_content ul li {
    text-decoration: none;
    color: black;

    padding-left: 1em;
    padding-right: 1em;

    cursor: pointer;

    transition: 0.1s;
}

#nav_content ul li:hover {
    border-bottom: solid;
}
</style>
