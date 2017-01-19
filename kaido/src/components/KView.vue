<template>
    <!-- 页面展示区域 -->
    <section class="view-area">
        <!-- phone bar -->
        <div class="phone-bar">
            <div class="phone-bar-l">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div class="phone-bar-m"></div>
            <div class="phone-bar-r">
                <div class="battery">
                    <div class="battery-current"></div>
                </div>
                <div class="battery-r"></div>
            </div>
        </div>

        <!-- title -->
        <h3 class="page-title">标题</h3>

        <!-- 手机主要视区 -->
        <div class="phone-main-area">

            <div v-for="(layer, index) in curPage.layers " v-drag="{updateLayerStyle, index}" :style="[layer.style, layer.animation.style]" :class="[previewAnimation ? layer.animation.class : '' , 'drag', 'animated']" v-on:click="selectLayer(index)" move="true">
                <div @keyup="updateLayerContent(index, $event)" contenteditable="true" style="user-modify: read-write-plaintext-only;" move="true">请输入文字</div>
                <div v-if="curPage.curIndex === index" class="select-func">
                    <div class="rotate-circle"></div>
                    <div class="rotate-line"></div>
                    <div class="line-t">
                        <div class="circle tm"></div>
                    </div>
                    <div class="circle tl"></div>
                    <div class="circle tr"></div>
                    <div class="line-l">
                        <div class="circle ml"></div>
                    </div>
                    <div class="line-r">
                        <div class="circle mr"></div>
                    </div>
                    <div class="circle bl"></div>
                    <div class="line-b">
                        <div class="circle bm"></div>
                    </div>
                    <div class="circle br"></div>
                </div>
            </div>

            <!-- 图片 -->
<!--             <div style="position: absolute; left: 50px; top: 50px; z-index: 2; width: 100px; height: 100px; transform: rotate(0deg); opacity: 1;">
                <div style="width: 100%; height: 100%; border-radius: 5px; padding-top: 0; padding-bottom: 0; border: 0px solid rgb(0, 0, 0); border-radius: 0;  -webkit-box-shadow: 0 0 3px rgba(184, 184, 184, 0.5); ">
                    <div style="width: 100%; height: 100%;">
                        <img src="" style="width: 100%; height: 100%;" />
                    </div>
                </div>
                <div class="select-func">
                    <div class="rotate-circle"></div>
                    <div class="rotate-line"></div>
                    <div class="circle tm"></div>
                    <div class="circle tl"></div>
                    <div class="circle tr"></div>
                    <div class="circle ml"></div>
                    <div class="circle mr"></div>
                    <div class="circle bl"></div>
                    <div class="circle bm"></div>
                    <div class="circle br"></div>
                </div>
            </div> -->

            <!-- 文字 -->
<!--             <div style="position: absolute; top: 250px; left: 0; z-index: 5; width: 320px; height: 40px; -webkit-transform: rotate(0deg); opacity: 1;">
                <div style="width: 100%; height: 100%; padding-top: 0; padding-bottom: 0; border: 0px solid rgb(0, 0, 0); border-radius: 0; font-size: 20px; color: #fff;  -webkit-box-shadow: 0 0 3px rgba(184, 184, 184, 0.5); ">
                    <div style="width: 100%; height: 100%">
                        <div style="text-align: center">
                            <span>活动demo</span>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
export default {
    props: ['previewAnimation'],
    computed: {
        curPage () {
            return {
                layers: this.$store.getters.layerFormatData,
                curIndex: this.$store.state.work.curPage.curIndex
            }
        }
    },
    methods: {
        selectLayer: function (index) {
            this.$store.dispatch('selectLayer', {index})
        },
        updateLayerStyle: function (index, options) {
            this.$store.dispatch('updateLayerStyle', {index, options})
        },
        updateLayerContent: function (index, event) {
            var content = event.srcElement.innerHTML
            this.$store.dispatch('updateLayerContent', {index, content})
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/animation.scss';

$bg-color: #e6e6e6;
$black: #313131;
.view-area {
    position: relative;
    z-index: 1;
    width: 326px;
    height: 100%;
    padding: 35px 3px 35px;
    background-color: #f9f9f9;
    border-radius: 35px;
}

.phone-bar {
    height: 20px;
    padding: 0 6px;
    background-color: nth($black, 1);
    display: -webkit-box;
    -webkit-box-align: center;
}
.phone-bar-l {
    height: 100%;
    min-width: 100px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-flex: 1;
    i {
        display: block;
        width: 4px;
        height: 4px;
        margin-right: 3px;
        background-color: #fff;
        border-radius: 4px;
    }
}
.phone-bar-m {
    width: 25px;
    height: 5px;
    border-radius: 4px;
    background-color: #656565;
}
.phone-bar-r {
    min-width: 100px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: end;
    -webkit-box-flex: 1;
}
.battery {
    width: 18px;
    height: 8px;
    padding: 1px;
    border: 1px solid #fff;
    div {
        height: 100%;
        width: 70%;
        background-color: #fff;
    }
}
.battery-r {
    height: 4px;
    width: 1px;
    background-color: #fff;
}

.page-title {
    background-color: nth($black, 1);
    line-height: 44px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    -webkit-text-stroke: 0.5px;
}

.phone-main-area {
    position: relative;
    overflow: hidden;
    height: 486px;
    background-color: nth($bg-color, 1);
    background-image: url("../assets/images/bg-hongfa.jpeg");
    background-position: 50% 50%;
    background-size: cover;

    .drag {
        cursor: move;
    }
}

.select-func {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	height: 100%;
	pointer-events: none;
	.circle, .rotate-circle {
		position: absolute;
        z-index: 1;
		width: 11px;
		height: 11px;
		background-color: #fff;
		border-radius: 11px;
		border: 1px solid #01b3ec;
        pointer-events: auto;
		-webkit-box-sizing: border-box;
		&.tl {
			top: -6px;
			left: -6px;
		}
		&.tm {
			top: -6px;
			left: 50%;
			margin-left: -6px;
		}
		&.tr {
			top: -6px;
			right: -6px;
		}
		&.ml {
			top: 50%;
			left: -6px;
			margin-top: -6px;
		}
		&.mr {
			top: 50%;
			right: 0;
			margin-top: -6px;
		}
		&.bl {
			bottom: -6px;
			left: -6px;
		}
		&.bm {
			bottom: 0;
			left: 50%;
			margin-left: -6px;
		}
		&.br {
			bottom: -6px;
			right: -6px;
		}
		&.tl, &.br {
			cursor: nwse-resize;
		}
		&.tr, &.bl {
			cursor: nesw-resize;
		}
	}
    .line-t, .line-b, .line-l, .line-r {
        position: absolute;
        pointer-events: auto;
    }
    .line-t, .line-b {
        left: 0;
        width: 100%;
        height: 5px;
        border-top: 1px solid #01b3ec;
        cursor: ns-resize;
    }
    .line-l, .line-r {
        top: 0;
        width: 5px;
        height: 100%;
        border-left: 1px solid #01b3ec;
        cursor: ew-resize;
    }
    .line-t {
        top: -1px;
    }
    .line-b {
        bottom: -6px;
    }
    .line-l {
        left: -1px;
    }
    .line-r {
        right: -6px;
    }
	.rotate-circle {
		left: 50%;
		top: -35px;
		margin-left: -6px;
		background-color: #00e207;
		border: none;
		cursor: url(http://www.eqxiu.com/c/images/mouserotate-70a3d7.ico) 10 10,default;
	}
	.rotate-line {
		position: absolute;
		left: 50%;
		top: -30px;
		width: 1px;
		height: 30px;
		background-color: #00e207;
		margin-left: -1px;
	}
}
</style>
