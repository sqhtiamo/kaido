<template>
    <!-- 预览弹框 -->
    <section class="pop-preview">
        <!-- 预览区域 -->
        <div class="preview-area">
            <div class="preview-phone">
                <k-view :preview-animation="true"></k-view>
            </div>
            <div class="preview-turn">
                <i class="up"></i>
                <i class="down"></i>
            </div>
        </div>
        <!-- 二维码区域 -->
        <div class="qr-code">
            <img src="" />
        </div>
    </section>
</template>

<script>
import KView from './KView'

export default {
    components: {
        KView
    },
    created () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/public.scss';

.pop-preview {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}
.preview-area {
    display: -webkit-box;
    -webkit-box-align: center;
}
.preview-phone {
    width: 320px;
    height: 486px;
    background-color: #fff;
    border: 1px solid #ccc;
}
.preview-turn {
    i {
        width: 30px;
        height: 60px;
        cursor: pointer;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        &::before {
            content: "";
            display: block;
            width: 8px;
            height: 8px;
            border-top: 2px solid #ccc;
            border-right: 2px solid #ccc;
        }
        &.up {
            &:before {
                margin-top: 4px;
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
        }
        &.down {
            &::before {
                margin-bottom: 4px;
                -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
            }
        }
        &:hover {
            background-color: #f1f1f1;
        }
    }
}
.qr-code {
    width: 180px;
    height: 180px;
    margin-left: 50px;
    background-color: #fff;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}

</style>

