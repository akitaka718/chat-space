class Api::MessagesController < ApplicationController#名前空間(namespace) ::を付けて別のmessagesコントローラと同じクラス名を付けても区別できる様に設定
                                
      def index
         group=Group.find(params[:group_id])# ルーティングでの設定によりparamsの中にgroup_idというキーでグループのidが入る。これを元にDBからグループを取得する
         last_message_id = params[:id].to_i# ajaxで送られてくる最後のメッセージのid番号を変数に代入
         @messages = group.messages.includes(:user).where("id > #{last_message_id}")# 取得したグループでのメッセージから、idがlast_messge_idよりも新しい(大きい)メッセージのみ取得
         respond_to do |format| 
            format.html
            format.json
         end
      end
      
end