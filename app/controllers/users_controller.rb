class UsersController < ApplicationController
  def index
     @users=User.where('nickname LIKE(?) and id !=?',"%#{params[:name]}%", current_user)
     respond_to do |format| 
       format.html
       format.json
     end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
       redirect_to root_path
    else
       render :edit
    end
  end
  
  private

  def user_params
      params.require(:user).permit(:nickname,:email)
  end    
end


