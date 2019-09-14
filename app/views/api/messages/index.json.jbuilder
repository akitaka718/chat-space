json.array! @messages do |message|
  json.body message.body
  json.image message.image.url
  json.created_at message.created_at
  json.id message.id 
  json.nickname message.user.nickname
end
#更新される間に複数メッセージが投稿される可能性があるのので、配列で設定して値を表示させる