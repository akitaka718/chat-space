require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: Rails.application.secrets.aws_access_key_id,
    aws_secret_access_key: Rails.application.secrets.aws_secret_access_key,
    region: 'ap-northeast-1' #例 'ap-northeast-1'..アジアパシフィック（東京）を選択した時 他は自分で調べる必要がある
  }

  config.fog_directory  ='chat-img' #'ここにバケット名を入れます'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/chat-img' 
  #例：config.asset_host ='https://s3-ここにリージョン名を入れます(※例 ap-northeast-1).amazonaws.com/ここにバケット名を入れます'
end