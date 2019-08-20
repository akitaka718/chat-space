module ControllerMacros
  def login(user)
    @request.env["devise.mapping"]=Devise.mapping[:user]
    sign_in user
  end
end
#specフォルダ直下にsupportフォルダを作成
#supportフォルダ直下にcontroller_macros.rbファイルを作成
#controller_macros.rbに上記コードを記載
#spec/rails_helper.rbにdeviseコントローラ用モジュールとControllerMacrosモジュールを読み込む記述をする
 