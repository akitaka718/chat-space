json.id @message.id
json.created_at @message.created_at
json.body @message.body
json.name @message.user.nickname
json.image @message.image.url
# json形式でデータを返す
