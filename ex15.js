fs.readdir(
'2', // nodeを実行している現在のディレクトリ
(err, files)=>{ // コールバック
		console.log('fs.readdir()を実行結果')
		console.log('err', err)
		console.log('files', files)
	}
)
