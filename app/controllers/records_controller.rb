class RecordsController < ApplicationController
  before_action :authenticate_user!

  def new
    @record = Record.new
  end

  def create
    @record = Record.create(record_params)
    if @record.valid?
      @record.save
      redirect_to user_path(current_user.id)
    else
      render 'new'
    end
  end

  def show
    @record = Record.find(params[:id])
  end

  def edit
    @record = Record.find(params[:id])
  end

  def update
    @record = Record.find(params[:id])
    if @record.update(record_params)
      redirect_to action: :show
    else
      render :edit
    end
  end

  def destroy
    @record = Record.find(params[:id])
    return unless @record.destroy

    redirect_to user_path(current_user.id)
  end



  private
  def record_params
    params.require(:record).permit(:title, :title_detail, :total_time, :goal, :note, :date).merge(user_id: current_user.id)
  end
end
