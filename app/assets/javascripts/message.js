$(function(){

  //テンプレートリテラル記法でHTML作成 
  function buildHtml(message){
    var image = message.image? `<img src=${message.image}>`:"";
    var html=`
    <div class="message" data-message-id='${message.id}'>
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
  
  //---非同期通信---
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
  var reloadMessages = function() {
    var url=$('#new_message').attr('action');
    if (url) {
      //カスタムデータ属性を利用して、ブラウザに表示されている最新メッセージのidを取得
      last_message_id = $('.message:last').data('message-id');
      console.log(last_message_id);
      $.ajax({
        //ターミナルでroutesのVerb項目を確認。 api/messages#indexはGETとなっているのでGETを設定
        type: 'GET',
        url: "api/messages",
        //最新のメッセージを値にしてリクエストする {任意の名前: 変数}
        data: {id: last_message_id},
        //データ要求方式
        dataType: 'json'
      })

      .done(function(messages){
        var insertHtml ="";
        messages.forEach(function(message){
          //メッセージが入ったHTMLを取得
          insertHtml = buildHtml(message);
          //取得したHTMLを表示
          $('.messages').append(insertHtml);
        });
        $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
      })
      .fail(function(){
        alert('自動更新に失敗しました');
      })
    }
  }  
  //一定時間経過する毎に処理を実行する関数 第一引数:動かしたい関数(動かしたい関数を代入した変数) 第二引数:動かす時間間隔(ミリ秒単位)
  setInterval(reloadMessages,5000);

});
