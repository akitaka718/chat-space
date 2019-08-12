class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user! #ログインしていないユーザーはログイン要求ページに飛ぶ設定
  before_action :configure_permitted_parameters, if: :devise_controller? #nicknameのデータを登録できる様にする設定             

  def configure_permitted_parameters #ストロングパラメータ
      devise_parameter_saniizer.permit(:sign_up, key: [:nickname])
  end
