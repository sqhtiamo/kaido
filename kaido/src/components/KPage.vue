<template>
    <section :class="fold ? 'pages-area' : 'pages-area fold'">
    	<div class="pages-t" v-on:click="toggleFold()">
			<div class="cube">
				<div class="front">
					<i class="arrow"></i>
				</div>
				<div class="top">
					<i class="arrow"></i>
				</div>
			</div>
    	</div>
        <ul class="pages-list">
			<li v-for="(page, index) in pages" :class="curPageNum === index+1 ? 'current' : ''" v-on:click="selectPage(index)">
				<i class="icon-delete" v-on:click.stop="deletePage(curPageNum)"></i>
				第{{index+1}}页
			</li>
			<li v-on:click="addPage()">+</li>
        </ul>
        <div class="pages-b">
        	<button class="btn-publish" v-on:click="saveViewport()">发布</button>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            fold: true
        }
    },
    computed: {
        pages () {
            return this.$store.state.work.pages
        },
        curPageNum () {
            return this.$store.state.work.curPageNum
        }
    },
    methods: {
        addPage: function () {
            this.$store.dispatch('addPage')
        },

        selectPage: function (pageIndex) {
            this.$store.dispatch('selectPage', {pageIndex})
        },

        deletePage: function (curPageNum) {
            const pageIndex = curPageNum - 1
            this.$store.dispatch('deletePage', {pageIndex})
        },

        toggleFold: function () {
            this.fold = !this.fold
        },

        saveViewport: function (message) {
            this.$store.dispatch('saveWork')
            this.$http.post(`${process.env.SERVER_HOST}/work/save`, {
                work: this.$store.state.work
            })
            .then((response) => {
                this.$store.state.work.workId = response.data.workId
            })
            .catch((response) => {
            })
            this.$store.dispatch('saveWork')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/reset.scss';
@import '../assets/public.scss';
@import '../assets/delete.scss';


$black: #313131;

.pages-area {
	position: fixed;
	bottom: 50%;
	right: 0;
	z-index: 10;
	width: 180px;
	margin-bottom: -310px;
	background-color: #f1f1f1;
	-webkit-box-shadow: 0 0 5px rgba(184, 184, 184, 0.2);
	box-shadow: 0 0 5px rgba(184, 184, 184, 0.2);
	display: -webkit-box;
	-webkit-box-orient: vertical;
	&.fold {
		.cube {
			-webkit-transform: rotateX(-90deg);
			transform: rotateX(-90deg);
		}
		.pages-list {
			height: 1px;
			padding: 0;
			overflow: hidden;
		}
	}
}
.pages-list {
	height: 540px;
	padding: 10px 10px 20px;
	color: nth($black, 1);
	overflow-y: scroll;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all 0.5s 0.8s linear;
	li {
		position: relative;
		height: 40px;
		margin-bottom: 10px;
		border: 1px solid #d9d9d9;
		cursor: pointer;
		display: -webkit-box;
		-webkit-box-pack: center;
		-webkit-box-align: center;
		-webkit-transition: background 0.2s linear;
		transition: background 0.2s linear;
		.icon-delete {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			display: none;
		}
		&.current {
			background-color: #fff;
			.icon-delete {
				display: -webkit-box;
			}
		}
		&:hover {
			background-color: #fff;
		}
	}
}
.pages-b {
	height: 40px;
	display: -webkit-box;
}
.btn-publish {
	display: block;
	width: 100%;
	height: 100%;
	background-color: nth($black, 1);
	border: none;
	border-radius: 0;
	color: #fff;
	font-size: 16px;
	-webkit-box-flex: 1;
	&:hover {
		background-color: hsla(0, 0%, 9%, 1);
	}
}
.pages-t {
  	position: relative;
	width: 100%;
  	height: 40px;
  	-webkit-perspective: 2500px;
}
.cube {
  	position: absolute;
	width: 100%;
  	height: 100%;
  	cursor: pointer;
  	-webkit-transform-style: preserve-3d;
  	transform-style: preserve-3d;
  	-webkit-transform-origin: center center -20px;
  	transform-origin: center center -20px;
  	-webkit-transition: transform 0.3s linear;
  	transition: transform 0.3s linear;
}
.cube div {
	position: absolute;
	top: 0;
	left: 0;
	color: #fff;
	background-color: nth($black, 1);
}
.front, .top {
	width: 100%;
	height: 40px;
	display: -webkit-box;
	-webkit-box-align: center;
	-webkit-box-pack: center;
	-webkit-transition: background 0.2s linear;
	transition: background 0.2s linear;
	&:hover {
		background-color: hsla(0, 0%, 9%, 1);
		.arrow {
			-webkit-transform: scale(1.1);
			transform: scale(1.1);
		}
	}
}
.top {
	transform: rotateX(90deg) translateZ(20px) translateY(-20px);
	.arrow {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}
    &:hover {
    	.arrow {
			-webkit-transform: rotate(180deg) scale(1.1);
			transform: rotate(180deg) scale(1.1);
    	}
    }
}
.arrow {
	display: -webkit-box;
	-webkit-transition: transform 0.2s linear;
	transition: transform 0.2s linear;
    &::before, &::after {
    	content: "";
    	display: block;
    	width: 15px;
    	height: 2px;
    	background-color: #fff;
    	border-radius: 2px;
    }
    &::before {
    	margin-right: -1px;
    	-webkit-transform: rotate(28deg);
    	transform: rotate(28deg);
    }
    &::after {
    	margin-left: -1px;
    	-webkit-transform: rotate(-28deg);
    	transform: rotate(-28deg);
    }
}
</style>

