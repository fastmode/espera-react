Rails.application.routes.draw do
  namespace :api do
    resources :ports
    get 'canada', to: 'ports#canada'
    get 'mexico', to: 'ports#mexico'
  end
end
