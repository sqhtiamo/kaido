<template>
    <!-- 功能操作区 -->
    <section :class="funcShow ? 'func-area show' : 'func-area'">
        <!-- tab -->
        <div class="func-tab">
            <label :class="tabChecked != 0 ? 'current' : '' ">样式<input  type="radio" name="tab" v-model="tabChecked" value="0" /></label>
            <label :class="tabChecked != 1 ? 'current' : '' ">动画<input type="radio" name="tab" v-model="tabChecked" value="1" /></label>
            <i class="func-tab-slide"></i>
        </div>

        <!-- 样式 -->
        <div class="func-style" :style="tabChecked != 0 ? 'display: none' : ''">
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
                        </div>
                        <input type="text" />
                    </div>
                    <div class="func-line">
                        <h4>文字颜色</h4>
                        <div class="color-btn">
                            <input type="color" v-model="style.color" />
                        </div>
                        <input type="text" />
                    </div>
                    <div class="func-line">
                        <h4>文字大小</h4>
                        <input type="number" v-model="style['font-size']" />
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
                        <input type="number" v-model="style['border-width']" />
                    </div>
                    <div class="func-line">
                        <h4>圆角</h4>
                        <input type="number" v-model="style['border-radius']" />
                    </div>
                    <div class="func-line">
                        <h4>样式</h4>
                        <select v-model="style['border-style']">
                            <option value="solid">直线</option>
                            <option value="dashed">虚线</option>
                        </select>
                    </div>
                    <div class="func-line">
                        <h4>颜色</h4>
                        <div class="color-btn">
                            <input type="color" v-model="style['border-color']" />
                        </div>
                        <input type="text" />
                    </div>
                </div>
            </div>

            <!-- 阴影 -->
            <!--
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
                        </div>
                        <input type="text" />
                    </div>
                    <div class="func-line">
                        <h4>方向</h4>
                        <input type="number" />
                    </div>
                </div>
            </div>
            -->
        </div>

        <!-- 动画 -->
        <div class="func-animation" :style="tabChecked != 1 ? 'display: none' : ''">
            <div class="func-box show" v-for="(animation, index) in animations ">
                <div class="func-tit">
                    <p>动画{{index+1}}</p>
                    <i class="icon-delete"></i>
                    <i class="ui-arrow-solid"></i>
                </div>
                <div class="func-con">
                    <div class="func-line">
                        <h4>方式</h4>
                        <select v-model="animation.class">
                            <optgroup label="进入">
                                <option value="fadeIn">淡入</option>
                                <option value="">移入</option>
                                <option value="">弹入</option>
                                <option value="zoomIn">中心放大</option>
                            </optgroup>
                            <optgroup label="强调">
                                <option value="shake">摇摆</option>
                                <option value="flash">闪烁</option>
                                <option value="rotate">旋转</option>
                                <option value="tada">放大抖动</option>
                            </optgroup>
                            <optgroup label="退出">
                                <option value="fadeOut">淡出</option>
                                <option value="">移出</option>
                                <option value="">弹出</option>
                                <option value="">中心缩小</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="func-line">
                        <h4>方向</h4>
                        <select>
                            <option>从左向右</option>
                            <option>从上到下</option>
                            <option>从右向左</option>
                            <option>从下到上</option>
                        </select>
                    </div>
                    <div class="func-line">
                        <h4>时间</h4>
                        <input type="number" v-model="animation.style['animation-duration']" />
                    </div>
                    <div class="func-line">
                        <h4>延迟</h4>
                        <input type="number" v-model="animation.style['animation-delay']"/>
                    </div>
                    <div class="func-line">
                        <h4>次数</h4>
                        <input type="number" v-model="animation.style['animation-iteration-count']"/>
                        <label class="ui-checkbox">
                            <input type="checkbox" />
                            <p>循环</p>
                        </label>
                    </div>
                </div>
            </div>

            <!-- 添加动画按钮 -->
            <div class="btn-box">
                <button class="confirm ">添加动画</button>
                <button class="cancel" v-on:click="previewAnimation()">预览动画</button>
            </div>
        </div>

        <!-- 按钮 -->
        <div class="btn-box">
            <button class="confirm" v-on:click="saveLayer()">确定</button>
            <button class="cancel" v-on:click="previewAnimation()">清除样式</button>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            tabChecked: 0,
            functionShow: 0,
            styleShow: 0
        }
    },
    computed: {
        layerNum () {
            return this.$store.state.work.curPage.layerNum
        },
        funcShow () {
            return this.$store.state.work.curPage.selectState
        },
        style () {
            if (this.$store.state.work.curPage.layers.length > 0) {
                const curIndex = this.$store.state.work.curPage.curIndex
                return this.$store.state.work.curPage.layers[curIndex].style
            } else {
                return {}
            }
        },
        animations () {
            if (this.$store.state.work.curPage.layers.length > 0) {
                const curIndex = this.$store.state.work.curPage.curIndex
                return this.$store.state.work.curPage.layers[curIndex].animation
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
        saveLayer: function () {
            this.$store.dispatch('saveLayer')
        },
        previewAnimation: function () {
            console.log(1)
            this.$root.$emit('previewAnimation')
            // console.log(this)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/public.scss';
@import '../assets/delete.scss';

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
    label {
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

        input {
            display: none;
        }

        &.current {
            color: #fff;
            &:nth-of-type(1) ~ .func-tab-slide {
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
.ui-checkbox {
    margin-left: 20px;
    display: -webkit-box;
    -webkit-box-align: center;
    input {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 3px;
    }
    p {
        font-size: 12px;
    }
}
.color-btn {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    input {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        -webkit-box-sizing: border-box;
    }
    // i {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     z-index: 1;
    //     width: 100%;
    //     height: 100%;
    //     pointer-events: none;
    // }
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

