class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)

    if @list.save
    else
      render json: @list.errors.full_messages #status...
    end
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
