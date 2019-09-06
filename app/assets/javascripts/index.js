$(function(){
  console.log('test');
  $("#user-search-field").on('keyup',function(e){
    e.preventDefault();
    var input=$("#user-search-field").val();
    // console.log(input); 入力された値がinputに入っているか検証　レビュー提出前に消す
    
  })

});