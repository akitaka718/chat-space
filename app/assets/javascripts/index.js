$(function(){
  function biuldHtml(user){
    var html=`
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="user.id" data-user-name="user.name">追加</div>
    </div>`
    return html
  }
  
  function noMatchUser(noUser){
    var html=`
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${noUser}</p>
    </div>`
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
    .done(function(datas){
      $('#user-search-result').empty();
      if (datas.length!==0){
        datas.forEach(function(data){
          html=biuldHtml(data)
          $('#user-search-result').append(html);
        });
      }
      else{
        html = noMatchUser('一致するユーザーが存在しません');
        $('#user-search-result').append(html);
      }   
    })
    
    .fail(function(){
     alert('ユーザー検索に失敗しました');
    })
  
  })
});