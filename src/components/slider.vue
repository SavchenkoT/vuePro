<template>
    <div class="embla" ref="embla">
        <div class="embla__container">
            <div class="embla__slide">Slide 1</div>
            <div class="embla__slide">Slide 2</div>
            <div class="embla__slide">Slide 3</div>
        </div>
    </div>
</template>

<script>
    import EmblaCarousel from 'embla-carousel';

    export default {
        name: 'embla',
        data() {
            return {
                embla: null,
            }
        },
        computed: {

        },
        mounted() {
            const emblaNode = this.$refs.embla;
            this.embla = EmblaCarousel(emblaNode);
        }
    }
</script>

<style scoped lang="scss">


    .embla {
        overflow: hidden;
        &__container {
            display: flex;
            height: 50vh;
            justify-content: center;
            align-items: center;
        }
        &__slide {
            position: relative;
            min-width: 100%;
            background-size: cover;
            object-fit: cover;
            display: block;
            height: 100%;
            background-repeat: no-repeat;
            &:first-child {
                background-image: url("../../src/assets/img/image_1.jpg");
            }

            &:nth-child(2){
                background-image: url("../../src/assets/img/images_2.jpg");
            }
            &:nth-child(3){
                background-image: url("../../src/assets/img/images_3.jpg");
            }
        }
    }


</style>
