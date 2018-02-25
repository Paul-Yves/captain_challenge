Rails.application.routes.draw do
  get 'fighter/index'
  post 'fighter/', to: 'fighter#create'
  post 'fighter/:fighter_id', to: 'fighter#update'
  post 'fighter/:fighter_id/delete', to: 'fighter#delete'

  get 'fight/index'
  post 'fight/', to: 'fight#create'

  get 'arena/index'

  root 'arena#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
