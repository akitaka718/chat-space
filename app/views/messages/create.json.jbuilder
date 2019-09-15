json.id @message.id
json.created_at @message.created_at
json.body @message.body
json.name @message.user.nickname
json.image @message.image.url
# メッセージ新規作成時 json形式でデータを返す
