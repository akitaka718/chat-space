
// done：非同期通信がうまく行われた時の処理 fail：うまくいかなかった時の処理
// jbuilderで返されたデータは'done(function(引数){処理})'の'(引数)'の部分で受け取る。引数の中の変数は任意`
//$('セレクタ名').apend() 追加したい要素の末尾にHTML要素を追加する。
//400 Bad Request
//'turbolinks:load'


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