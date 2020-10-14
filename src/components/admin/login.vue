<template>
    <div id="login_container">
        <div id="login">
            <h1>Backoffice</h1>
            <div>
                <label for="auth_login">Login</label>
                <input type="text" name="" id="auth_login">
            </div>
            <div>
                <label for="auth_password">password</label>
                <input type="password" name="" id="auth_password">
            </div>
            <button>login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "login"
}
</script>

<style scoped>
#login_container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#login{
    width: 50%;
    padding: 3em;
    border-radius: 5px;
    box-shadow: 5px 5px 2px 5px rgba(0, 0, 0, 0.2);
    border: solid 1px;
}
#login input{
    width: 100%;
    box-sizing: border-box;
    font-size: larger;

    margin-bottom: 2em;
}
#login button{
    display: block;
}

#login h1{
    margin-bottom: 2em;
}
</style>
