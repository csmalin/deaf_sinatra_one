require 'json'

get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  
  erb :index
end

post '/grandma' do
  if params[:user_input] == params[:user_input].downcase
    response = "Speak up, kiddo!"
  else
    response = ["In my day, TV's had no screen.",
                "Tom Seleck makes me feel like a little girl.",
                "In mother Russia, the food eats you."].sample
  end
  
  content_type :json
  { response: response }.to_json
end
