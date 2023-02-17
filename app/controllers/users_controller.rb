class UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    @nickname = current_user.nickname
    @records = current_user.records.order('date DESC')
  end
end
