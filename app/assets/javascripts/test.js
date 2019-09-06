
//$('セレクタ名').on('イベント名',function(){})
//イベントが動作した時、{}の中に記述された処理が動く

// done：非同期通信がうまく行われた時の処理 fail：うまくいかなかった時の処理
// jbuilderで返されたデータは'done(function(引数){処理})'の'(引数)'の部分で受け取る。引数の中の変数は任意`

//new FormData();フォームデータを取得する時に使う　this　イベント元の要素値を取得
//.attr('ation')　要素の値を取得

//.ajax({}) サーバーに対しての通信を行う タイプ指定　遷移先url 通信するデータ　データタイプ　等指定
// processData: contentType: データを見やすい様にする　デフォルトはtrue formのデータはすでに整えられている為エラーになるのでfalseを指定

//$('セレクタ名').apend() 追加したい要素の末尾にHTML要素を追加する。
//()の中はHTML情報を記述
//そのまま記述するとコードが長くなるので html情報を扱うメソッドを作って記述してメソッドを呼び出す。変数=メソッド名(受け取る側へ渡す値)

// function メソッド名(呼び出し元から値を受け取る変数){} イメージはrubyのdefメソッドと同じ
//この中にhtml情報を代入する変数を用意してテンプレートリテラル記法でhtmlを記述
//${~.~} jbuilderでJSON形式にしたデータをHTML上に表示させる。

//.val()は要素の値を習得する 
//()の中は任意の値を記述する事で要素の値を上書きする事ができる。
//.val("")と設定すれば空白に上書きできるが、あまり好ましくない

//$('~~~~~')[0].reset(); 入力された値を消去する　[0]をつけないと動かない
//$('')内はinputではなく、fromタグのセレクタを指定。（inputのセレクタを指定してもエラーになる）
//メリット1 from要素をリセットすると全ての項目がリセットされる。それによりvalで個別に指定しなくてもよくなり、コード量が減る、可読性があがる
//メリット2 inputに初期値が存在する場合、valueにその初期値が入る。 



//ajaxの通信動作チェック $.ajax内に記述する
// //ajax通信エラー
// error : function(XMLHttpRequest, textStatus, errorThrown) {
//   console.log("ajax通信に失敗しました");
//   console.log("XMLHttpRequest : " + XMLHttpRequest.status);
//   console.log("textStatus     : " + textStatus);
//   console.log("errorThrown    : " + errorThrown.message);
// },
//  //ajax通信成功
// success : function(response) {
//   console.log("ajax通信に成功しました");
//   console.log(response);
// }
