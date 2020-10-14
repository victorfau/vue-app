<template>
    <div class="text_image_container">
        <div class="content">
            <div>

                <h1>HTML Ipsum Presents</h1>

                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis
                    egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                    libero
                    sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo.
                    Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo
                        vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                    ipsum
                    rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar
                    facilisis. Ut felis.</p>
            </div>

        </div>
        <div class="image">
            <img src="http://lorempixel.com/output/abstract-q-c-640-480-3.jpg" alt="">

        </div>
    </div>
</template>

<script>
export default {
    name: "text_image"
}
</script>
    width: 100%;
<style scoped>

.text_image_container {
    display: flex;
    flex-direction: row;

    width: 100%;
}

.image {
    width: 100%;
    display: flex;
    justify-content: center;
}

.image img {
    width: 100%;
    object-fit: contain;
}

.content{
    width: 100%;
}

.content div{
    box-sizing: border-box;
    margin: 5em
}

</style>
