//jsのテストコード
$(function(){
  
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
      $('#message_body').val("");
    })
    .fail(function(){
      alert('メッセージが送信できません');
      $('.form__submit').prop("disabled",false);
    })
  })
});
