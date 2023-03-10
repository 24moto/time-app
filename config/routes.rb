Rails.application.routes.draw do
  devise_for :users
  root to: 'times#index'
  resources :records, only: [:new, :create, :show, :edit, :update, :destroy]
  resources :users, only:[:show]
end
