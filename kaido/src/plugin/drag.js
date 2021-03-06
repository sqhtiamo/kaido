(function () {
    var vueDrag = {}
    vueDrag.install = function (Vue) {
        Vue.directive('drag', {
            bind: function (el, binding, vnode) {
                var isChildDom
                // drag 和 scale 2种模式
                // var mode = 'drag'
                if (binding.arg !== undefined) {
                    isChildDom = true
                } else {
                    isChildDom = false
                }
                var offsetX = 0
                var offsetY = 0

                function start (e) {
                    // 非拖动模式
                    if (!e.target.attributes.move) {
                        return
                    }
                    down(e)
                }
                function down (e) {
                    offsetX = (e.pageX - el.offsetLeft)
                    offsetY = (e.pageY - el.offsetTop)
                    if (isChildDom) {
                        var barStyle = el.firstChild.currentStyle ? el.firstChild.currentStyle : window.getComputedStyle(el.firstChild, null)
                        var boxStyle = el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)
                        var left = Number(barStyle.getPropertyValue('left').replace('px', '')) + Number(boxStyle.getPropertyValue('left').replace('px', '')) + Number(boxStyle.getPropertyValue('border-left-width').replace('px', ''))
                        var right = left + Number(barStyle.getPropertyValue('width').replace('px', ''))
                        var top = Number(barStyle.getPropertyValue('top').replace('px', '')) + Number(boxStyle.getPropertyValue('top').replace('px', '')) + Number(boxStyle.getPropertyValue('border-top-width').replace('px', ''))
                        var bottom = top + Number(barStyle.getPropertyValue('height').replace('px', ''))
                        if (e.clientX <= right && e.clientX >= left && e.clientY >= top && e.clientY <= bottom) {
                            window.addEventListener('mousemove', move)
                            window.addEventListener('mouseup', up)
                        }
                    } else {
                        window.addEventListener('mousemove', move)
                        window.addEventListener('mouseup', up)
                    }
                }

                function move (e) {
                    el.style.left = (e.pageX - offsetX) + 'px'
                    el.style.top = (e.pageY - offsetY) + 'px'
                }

                function up () {
                    window.removeEventListener('mousemove', move)
                    window.removeEventListener('mouseup', up)
                    binding.value.updateLayerStyle(binding.value.index, {
                        left: el.style.left,
                        top: el.style.top
                    })
                }
                el.addEventListener('mousedown', start)
            }

        })
    }
    module.exports = vueDrag
})()
