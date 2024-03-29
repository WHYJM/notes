// 闭包实际应用
// 隐藏数据，只提供api

function createCache() {
    const data = {}
    return {
        set: function (key, val) {
            data[key] = val
        },
        get: function (key) {
            return data[key]
        }
    }
}

const c = createCache()
c.set('a', 100)
console.log(c.get('a'))