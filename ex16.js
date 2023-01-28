fs.readdir(
'2', // nodeを実行している現在のディレクトリ
(err, files)=>{ // コールバック
		console.log('fs.readdir()を実行結果')
		console.log('err', err)
		console.log('files', files)
	}
)

function parseJSONAsync1(json, callback){
	try{
		setTimeout(()=>{
			callback(JSON.parse(json))
		}, 1000)
	} catch (err){
		console.log('エラーをキャッチ', err)
	}
parseJSONAsync1('不正なJSON', result=>console.log('parse結果', result)

function parseJSONAsync1(json, callback){
	try{
		setTimeout(()=>{
			callback(JSON.parse(json))
		}, 1000)
	} catch (err){
		console.log('エラーをキャッチ', err)
	}
}
parseJSONAsync1('不正なJSON', result=>console.log('parse結果', result)


function parseJSONAsync1(json, callback){
	try{
		setTimeout(()=>{
			callback(JSON.parse(json))
		}, 1000)
	} catch (err){
		console.log('エラーをキャッチ', err)
	}
}
parseJSONAsync1('不正なJSON', result=>console.log('parse結果', result))

function parseJSONAsync2(json, callback){
	setTimeout(()=>{
		try{
			callback(null, JSON.parse(json))
		}catch(err){
			callback(err)
		}
	   }, 1000)
     }
     
parseJSONAsync2('不正なJSON', (err, result)=>console.log('parse結果', err, result)


function parseJSONAsync2(json, callback){
	setTimeout(()=>{
		try{
			callback(null, JSON.parse(json))
	}catch(err){
			callback(err)
		}
	   }, 1000)
     }
parseJSONAsync2('不正なJSON', (err, result)=>console.log('parse結果', err, result)

function parseJSONAsync2(json, callback){
	setTimeout(()=>{
		try{
			callback(null, JSON.parse(json))
		}catch(err){
			callback(err)
		}
	   }, 1000)
     }
parseJSONAsync2('不正なJSON', (err, result)=>console.log('parse結果', err, result)
)
function parseJSONAsync2(json, callback){
	setTimeout(()=>{
		try{
			callback(null, JSON.parse(json))
	}catch(err){
			callback(err)
		}
	   }, 1000)
     }
parseJSONAsync2('不正なJSON', (err, result)=>console.log('parse結果', err, result))

