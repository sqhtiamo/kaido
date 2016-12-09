<template>
    <article class="page-wrapper">

        <div>
            <h1>{{ msg }}</h1>
        </div>

        <section class="main-area">
            <k-shortcut></k-shortcut>
            <k-view></k-view>
            <k-function></k-function>
        </section>

    <article>
</template>

<script>
import KShortcut from './KShortcut'
import KView from './KView'
import KFunction from './KFunction'

export default {
    components: {
        KShortcut,
        KView,
        KFunction
    },
    data () {
        // return {
        //     msg: 'Hello World!'
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/reset.scss';
@import '../assets/public.scss';

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
