class Group < ApplicationRecord
  has_many :messages
  has_many :members
  has_many :users,through: :members

  def show_last_message
    if (last_message = messages.last).present?
      last_message.body? ? last_message.body : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
#メッセージが投稿されているか、されていないかで条件分岐
#5行目 最新のメッセージを変数last_messageに代入しつつ、メッセージが投稿されているかどうかを判別
#8行目は三項演算子 if 条件式 ? 真の時の処理 : 偽の時の処理
end
