<template>
    <section class="pages-area">
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
			<li v-for="(page, index) in pages" :class="curPage === index+1 ? 'current' : ''" v-on:click="selectPage(index)">
				<i class="icon-delete" v-on:click="deletePage(curPage)"></i>
				第{{index+1}}页
			</li>
			<li v-on:click="addPage()">+</li>
        </ul>
        <div class="pages-b">
        	<button class="btn-publish">发布</button>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        pages () {
            return this.$store.state.work.pages
        },
        curPage () {
            return this.$store.state.work.curPage
        }
    },
    methods: {
        addPage: function () {
            this.$store.dispatch('addPage')
        },

        selectPage: function (pageIndex) {
            this.$store.dispatch('selectPage', {pageIndex})
        },

        deletePage: function (curPage) {
            const pageIndex = curPage - 1
            this.$store.dispatch('deletePage', {pageIndex})
        },

        toggleFold: function () {
            console.log(this)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/reset.scss';
@import '../assets/public.scss';

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
.icon-delete {
	width: 40px;
	height: 100%;
	background-color: transparent;
	cursor: pointer;
	display: -webkit-box;
	-webkit-box-pack: center;
	-webkit-box-align: center;
	&::before {
		content: "";
		display: block;
		width: 16px;
		height: 16px;
		background-image: url("../assets/svg/delete.svg");
		background-size: 16px auto;
		background-position: center;
		-webkit-transition: transform 0.2s ease-out;
		transition: transform 0.2s ease-out;
	}
	&:hover {
		&::before {
			-webkit-transform: scale(1.4);
			transform: scale(1.4);
		}
	}
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

