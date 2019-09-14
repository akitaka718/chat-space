$(function(){
  //---非同期通信---
  //テンプレートリテラル記法でHTML作成 
  function buildHtml(message){
    var image = message.image? `<img src=${message.image}>`:"";
    var html=`<div class="message">
               <div class="message-box">
                <div class="message-user">
                 ${message.name}
                </div>
                <div class="message-date">
                 ${message.created_at}
                </div>
               </div>
               <div class="message-body">
                ${message.body}
               </div>
               ${image}
              </div>`
    return html
  }
  
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    var ul = $(this).attr('ation');
    $.ajax({
      type: 'POST',
      url: ul,
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      html = buildHtml(data);
      $('.messages').append(html);
      $('.form__submit').prop("disabled",false);
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('メッセージが送信できません');
      $('.form__submit').prop("disabled",false);
    })
  })
  
  //---自動更新---
  var buildMessageHTML = function(message) {
    if (message.body || message.img.url) {
      var html=`
      <div class = "message" data-message_id = '${message.id}'>
        <div class ="message-box">
           <div class="message-user">
             ${message.nickname}
           </div>
           <div class="message-date">
             ${message.created-at}
           </div>
        </div>   
        <div class="message-body">
          ${message.body}
        </div>
        ${image} 
      </div>`
    }      
    return html
  };
  
  var reloadMessages = function() {
    //カスタムデータ属性を利用して、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data('message-id');
    $.ajax({
      url: './api/messages',
      //ターミナルでroutesのVerb項目を確認。 api/messages#indexはGETとなっているのでGETを設定
      type: 'GET',
      //最新のメッセージを値にしてリクエストする {任意の名前: 変数}
      data: {id: last_message_id},
      //データ要求方式
      dataType: 'json',
      //ajax通信エラー
      
      error : function(XMLHttpRequest, textStatus, errorThrown) {
        console.log("ajax通信に失敗しました");
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus     : " + textStatus);
        console.log("errorThrown    : " + errorThrown.message);
      },
      //ajax通信成功
      success : function(response) {
        console.log("ajax通信に成功しました");
        console.log(response);
      }   

    })

    .done(function(messages){
      messages.foreach(function(message){
        //メッセージが入ったHTMLを取得
        var insertHtml=buildMessageHTML(message);
        //取得したHTMLを表示
        $('.messages').appenßd(insertHtml);
      });
    })
    .fail(function(){
      console.log('自動更新に失敗しました');
    })
  }
  setInterval(reloadMessages,5000); //一定時間経過する毎に処理を実行する関数 第一引数:動かしたい関数(動かしたい関数を代入した変数) 第二引数:動かす時間間隔(ミリ秒単位) 
});
