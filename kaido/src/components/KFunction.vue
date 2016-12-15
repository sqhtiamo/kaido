<template>
    <!-- 功能操作区 -->
    <section class="func-area show">
        <!-- tab -->
        <div class="func-tab">
            <p class="current">样式</p>
            <p>动画</p>
            <i class="func-tab-slide"></i>
        </div>

        <!-- 样式 -->
        <div class="func-box" v-bind:class="{ show: styleShow === 0 }" > <!-- 添加class"show", 显示内容 -->
            <div class="func-tit" v-on:click="show(0)">
                <p>样式</p>
                <i class="ui-arrow-solid"></i>
            </div>
            <div class="func-con">
                <div class="func-line">
                    <h4>背景颜色</h4>
                    <div class="color-btn">
                        <input type="color" v-model="style['background-color']"/>
                        <i></i>
                    </div>
                    <input type="text" />
                </div>
                <div class="func-line">
                    <h4>文字颜色</h4>
                    <input class="color-btn" type="color" v-model="style.color" />
                    <input type="text" />
                </div>
                <div class="func-line">
                    <h4>透明度</h4>
                    <input type="number" v-model="style.opacity" />
                </div>
                <div class="func-line">
                    <h4>行高</h4>
                    <input type="number" v-model="style['line-height']" />
                </div>
            </div>
        </div>

        <!-- 边框 -->
        <div class="func-box" v-bind:class="{ show: styleShow === 1 }">
            <div class="func-tit" v-on:click="show(1)">
                <p>边框</p>
                <i class="ui-arrow-solid"></i>
            </div>
            <div class="func-con">
                <div class="func-line">
                    <h4>尺寸</h4>
                    <input type="number" />
                </div>
                <div class="func-line">
                    <h4>圆角</h4>
                    <input type="number" />
                </div>
                <div class="func-line">
                    <h4>样式</h4>
                    <select>
                        <option>直线</option>
                        <option>虚线</option>
                    </select>
                </div>
                <div class="func-line">
                    <h4>颜色</h4>
                    <input class="color-btn" type="color" />
                    <input type="text" />
                </div>
            </div>
        </div>

        <!-- 阴影 -->
        <div class="func-box" v-bind:class="{ show: styleShow === 2 }">
            <div class="func-tit" v-on:click="show(2)">
                <p>阴影</p>
                <i class="ui-arrow-solid"></i>
            </div>
            <div class="func-con">
                <div class="func-line">
                    <h4>大小</h4>
                    <input type="number" />
                </div>
                <div class="func-line">
                    <h4>模糊</h4>
                    <input type="number" />
                </div>
                <div class="func-line">
                    <h4>颜色</h4>
                    <div class="color-btn">
                        <input type="color" />
                        <i></i>
                    </div>
                    <input type="text" />
                </div>
                <div class="func-line">
                    <h4>方向</h4>
                    <input type="number" />
                </div>
            </div>
        </div>

        <!-- 按钮 -->
        <div class="btn-box">
            <button class="confirm" v-on:click="saveViewport()">确定</button>
            <button class="cancel">清除样式</button>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            functionShow: 0,
            styleShow: 0
        }
    },
    computed: {
        style () {
            console.log(this.$store.state.work.curIndex)
            if (this.$store.state.work.layers.length > 0) {
                const curIndex = this.$store.state.work.curIndex
                console.log(curIndex)
                console.log(this.$store.state.work.layers[0].style)
                return this.$store.state.work.layers[curIndex].style
            } else {
                return {}
            }
        }
    },
    methods: {
        show: function (type) {
            if (this.styleShow !== type) {
                this.styleShow = type
            } else {
                this.styleShow = -1
            }
        },
        saveViewport: function (message) {
            this.$http.post('http://localhost:3000/work/save', {
                work: this.$store.state.work
            })
            .then((response) => {
                this.$store.state.work.workId = response.data
            })
            .catch((response) => {
                console.log(response)
            })
            this.$store.dispatch('saveWork')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/public.scss';

$bg-color: #e6e6e6;
$black: #313131;
.func-area {
    position: relative;
    width: 220px;
    height: 550px;
    margin-left: 5px;
    background-color: #f1f1f1;
    -webkit-transition: transform 0.3s linear;
    transition: transform 0.3s linear;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-origin: -5px center;
    transform-origin: -5px center;
    -webkit-box-shadow: 1px 1px 5px rgba(188, 188, 188, 0.3);
    box-shadow: 1px 1px 5px rgba(188, 188, 188, 0.3);
    &.show {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
    &::before, &::after {
        content: "";
        position: absolute;
        left: -5px;
        z-index: 1;
        width: 10px;
        height: 3px;
        background-color: nth($black, 1);
    }
    &::before {
        top: 30%;
    }
    &::after {
        bottom: 30%;
    }
}
.func-tab {
    $amount: 2;
    position: relative;
    height: 35px;
    margin-bottom: 10px;
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
.func-box {
    &.show {
        .func-con {
            display: block;
        }
        .ui-arrow-solid {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
        }
    }
}
.func-con {
    padding: 10px 20px;
    background-color: #fff;
    display: none;
}
.func-tit {
    padding: 0 20px;
    border-bottom: 1px solid nth($bg-color, 1);
    line-height: 35px;
    cursor: pointer;
    display: -webkit-box;
    -webkit-box-align: center;
    p {
        -webkit-box-flex: 1;
    }
}
.func-line {
    padding: 13px 0;
    border-bottom: 1px solid #e2e2e2;
    display: -webkit-box;
    -webkit-box-align: center;
    h4 {
        min-width: 75px;
        font-size: 14px;
        color: #666;
    }
    input {
        height: 20px;
        display: block;
        border: 1px solid #ccc;
        text-indent: 8px;
        -webkit-box-flex: 1;
        -webkit-box-sizing: border-box;
    }
    select {
        position: relative;
        display: block;
        height: 20px;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 0;
        text-indent: 8px;
        -webkit-box-flex: 1;
        -webkit-box-sizing: border-box;
    }
    &:last-child {
        border-bottom: none;
    }
}
.color-btn {
    position: relative;
    display: block;
    width: 30px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    input {
        width: 100%;
        opacity: 0;
        cursor: pointer;
    }
    i {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
}

.btn-box {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    background-color: #fff;
    display: -webkit-box;
    -webkit-box-pack: center;
    button {
        display: block;
        width: 100px;
        height: 30px;
        margin: 0 10px;
        padding: 0;
        border: none;
        border-radius: 3px;
        color: #fff;
        -webkit-box-flex: 1;
        &.confirm {
            background-color: #1d83d8;
        }
        &.cancel {
            background-color: #fb3d3d;
        }
    }
}

</style>

