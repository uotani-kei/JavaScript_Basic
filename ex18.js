const promise1 = Promise.resolve("dummy")
promise1
const promise2 = promise1.then(a=>a.length)
promise2
const promise3 = Promise.reject(new Error('エラー'))
promise3
const promise4 = Promise.reject(new Error('エラー')).catch(()=>console.log('エラーが発生しました。'))

promise4
const finally_fn = ()=>console.log('最後に実行される処理です。')
const promise5 = Promise.resolve().finally(finally_fn)
promise5
const promise6 = Promise.reject(new Error('エラー')).finally(finally_fn)
promise6

promise5
promise6
function parseJSONAsync(json){
    return new Promise((resolve, reject)=>
        setTimeout(()=>{
            try {
                // 成功
                resolve(JSON.parse(json))
            }catch(err){
               // 失敗
                reject(err)
            }
        }, 1000)
       )
}
const ex17_1 = parseJSONAsync('{"foo": "pom"}').then(a=>console.log(a)).finally(()=>console.log("最後に実行される関数"))
const ex17_2 = parseJSONAsync('不正なJSON').catch(b=>console.log(b)).finally(()=>console.log("最後に実行される関数"))

