json.array! @messages do |message|
  json.body message.body
  json.image message.image
  json.created_at message.created_at
  json.id message.id 
  json.nickname message.user.nickname
end
#更新される間に複数メッセージが投稿される可能性があるので、配列で繰り返して複数データを取得できる様に設定