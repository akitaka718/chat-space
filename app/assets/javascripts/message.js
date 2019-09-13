$(function(){
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
  
  //非同期通信
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
  
  //自動更新
  var reloadMessages = function() {
    //カスタムデータ属性を利用して、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data('message-id');
    $.ajax({
      url: '/api/messages',
      //ターミナルでroutesのVerb項目を確認。 api/messages#indexはGETとなっているのでGETを設定
      type: 'GET',
      //最新のメッセージを値にしてリクエストする
      data: {id: last_message_id},
      //データ要求方式
      dataType: 'json'
    })

    .done(function(messages){
      console.log(messages);
    })
    .fail(function(){
      console.log('自動更新に失敗しました');
    })
  }
});
