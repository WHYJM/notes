// this 只有在执行时才知道 

function fn1() {
    console.log(this)
}

fn1() // window

fn1.call({x: 1}) // {x: 1} 

const fn2 = fn1.bind({x: 2})
fn2()

const someone = {
    name: 'xxx',
    sayhi() {
        console.log(this)
    },
    wait() {
        setTimeout(function() {
            // this === window
            console.log(this)
        })
    },
    waitAgain() {
        setTimeout(() => {
            // this即当前对象，因为箭头函数的this的取值是上级作用域
            console.log(this) 
        })
    }
}

// class 里面的this，就是指向实例本身