<template>
    <div class="embla" id="embla">
        <div class="embla__container">
            <div class="embla__slide">Slide 1</div>
            <div class="embla__slide">Slide 2</div>
            <div class="embla__slide">Slide 3</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'emba',
        data() {
            return {

            }
        },
        computed: {

        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">


    .embla {
        overflow: hidden;
    }
    .embla__container {
        display: flex;
    }
    .embla__slide {
        position: relative;
        min-width: 100%;
    }


</style>
