<template>
    <!-- 功能操作区 -->
    <section class="func-area show">
        <div class="func-mian">
            <div class="func-tab">
                <p>样式</p>
                <p class="current">动画</p>
                <i class="func-tab-slide"></i>
            </div>
        </div>
        <i class="rotate-bar top"></i>
        <i class="rotate-bar bottom"></i>
    </section>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bg-color: #cecece;
$black: #313131;
.func-area {
    position: relative;
    width: 260px;
    height: 550px;
    padding-left: 5px;
    -webkit-transition: transform 0.3s linear;
    transition: transform 0.3s linear;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-origin: left center;
    transform-origin: left center;
    &.show {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
}
.func-mian {
    height: 100%;
    background-color: #f9f9f9;
    -webkit-box-shadow: 1px 1px 5px rgba(188, 188, 188, 0.3);
    box-shadow: 1px 1px 5px rgba(188, 188, 188, 0.3);
}
.rotate-bar {
    position: absolute;
    left: 0px;
    z-index: 1;
    width: 13px;
    height: 3px;
    background-color: nth($black, 1);
    &.top {
        top: 30%;
    }
    &.bottom {
        bottom: 30%;
    }
}
.func-tab {
    $amount: 2;
    position: relative;
    height: 35px;
    display: -webkit-box;
    p {
        position: relative;
        z-index: 1;
        height: 100%;
        cursor: pointer;
        -webkit-box-flex: 1;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        -webkit-transition: color 0.2s ease-in;
        transition: color 0.2s ease-in;
        &.current {
            color: #fff;
            &:first-of-type ~ .func-tab-slide {
                transform: translateX(0);
            }
            &:nth-of-type(2) ~ .func-tab-slide {
                transform: translateX(100%);
            }
        }
    }
    .func-tab-slide {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%/$amount;
        height: 100%;
        background-color: nth($black,1 );
        -webkit-transition: transform 0.2s ease-in;
        transition: transform 0.2s ease-in;
    }
}
</style>

