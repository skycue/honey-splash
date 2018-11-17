class Api::ListsController < ApplicationController

  # before_action :require_logged_in

  def create
    @list = List.new(list_params)
    @list.user_id = params[:user_id]

    if @list.save
      render 'api/lists/show'
    else
      render json: @list.errors.full_messages #status...
    end
  end

  # def index
  #
  # end
  #
  # def update
  #
  # end

  def destroy
    @list = List.find_by_user_id(current_user.id)

    if @list
      @list.destroy
      render "api/lists/show"
    else
      render json: ["This list does not exist"] #status
    end
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
