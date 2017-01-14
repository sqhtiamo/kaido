export default {
    getUrlParam: () => {
        var param = {}

        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&')

            params.forEach(function (value) {
                param[value.split('=')[0]] = value.split('=')[1]
            })

            return param
        }
        return null
    }
}
