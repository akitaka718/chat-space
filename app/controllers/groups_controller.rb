class GroupsController < ApplicationController
   
  def new
  end

  def create
<<<<<<< Updated upstream
=======
    @group = Group.new(group_params)
    if @group.save
       redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
     
>>>>>>> Stashed changes
  end

  def edit
  end

<<<<<<< Updated upstream
  def update
  end
  
=======
  private
  def group_params
    params.require(:group).permit( :name,{:user_ids => [] })
  end
>>>>>>> Stashed changes
end
