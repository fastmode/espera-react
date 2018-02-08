Rails.application.routes.draw do
  namespace :api do
    resources :ports
  end
end
