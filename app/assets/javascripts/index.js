$(function(){
  function biuldHtml(index){
    var html=`
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
    </div>`
    return html
  }
  $('#user-search-field').on('keyup',function(){
    var input=$('#user-search-field').val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {name: input},
      dataType: 'json'
    })
    .done(function(data){
      html=biuldHtml(data)
      console.log(html);
      $('#user-search-result').append(html);
    })
    .fail(function(){
     alert('エラーが発生しました');
    })
  })
});