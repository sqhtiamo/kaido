<template>
    <article class="page-wrapper">
        <section class="main-area">
            <k-shortcut></k-shortcut>
            <k-view :preview-animation="previewAnimation"></k-view>
            <k-function></k-function>
        </section>
        <k-page></k-page>
    <article>
</template>

<script>
import KShortcut from './KShortcut'
import KView from './KView'
import KFunction from './KFunction'
import KPage from './KPage'

export default {
    components: {
        KShortcut,
        KView,
        KFunction,
        KPage
    },
    data () {
        return {
            previewAnimation: false
        }
    },
    created () {
        this.$root.$on('previewAnimation', (el) => {
            this.previewAnimation = false
            setTimeout(() => {
                this.previewAnimation = true
            })
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/reset.scss';
@import '../assets/public.scss';
@import '../assets/animation.scss';

$bg-color: #e6e6e6;
.page-wrapper {
    height: 100%;
    background-color: nth($bg-color, 1);
    color: #333;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    * {
        -webkit-box-sizing: border-box;
    }
}
.main-area {
    height: 620px;
    margin-left: 100px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-perspective: 1100px;
    perspective: 1100px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
</style>
