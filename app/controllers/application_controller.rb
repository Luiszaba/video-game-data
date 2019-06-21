class ApplicationController < ActionController::API
  
  def user_serializer(user)
    {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      id: user.id
    }
  end

  def current_user

  @current_user ||= User.find(decode_token[:user])
  end


  def logged_in?
    !!current_user
  end

  def generate_token(payload)
    Auth.encode(payload)

  end

  def decode_token
    Auth.decode(token)
  end
end
