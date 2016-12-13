<template>
    <header>
        <div class="header-logo">
            <img src="../assets/logo.png">
        </div>

        <ul class="header-elements">
            <li>
                <img src="../assets/icon/font.png">
                <p>文字</p>
            </li>
            <li>
                <img src="../assets/icon/image.png">
                <p>图片</p>
            </li>
        </ul>

        <div class="header-operation">
            <button>保存</button>
        </div>
    </header>
</template>

<script>
import Operation from './Operation'

export default {
    components: {
        Operation
    },
    data () {
        return {
            elementTitle: [{
                img: 'font',
                title: '文字'
            }, {
                img: 'image',
                title: '图片'
            }, {
                img: 'font',
                title: '背景'
            }, {
                img: 'font',
                title: '音频'
            }, {
                img: 'font',
                title: '视频'
            }]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
    position: relative;
    height: 70px;
    text-align: center;
    width: 100%;
    // background-color: #31364a;

    background-color: #000;
    color: #fff;


    .header-logo {
        position: absolute;
        top: 15px;
        left: 15px;

        img {
            height: 40px;
        }
    }

    ul.header-elements {
        display: block;
        margin: 0 auto;
        width: 660px;
        li {
            display: inline-block;
            margin: 15px 20px 0px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }

            &:active {
                opacity: 0.6;
            }

            img {
                width: 30px;
            }
        }
    }

    .header-operation {
        position: absolute;
        right: 20px;
        top: 20px;

        button {

            min-width: 60px;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #fff;
            background-color: #00b4f5;
            border-color: #00b4f5;

            &:active {
                background-color: #0092c7;
                border-color: #0092c7;
            }
        }
    }
}
</style>

