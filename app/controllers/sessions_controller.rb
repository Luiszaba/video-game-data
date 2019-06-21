class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      #if success generate a jwt, include that token in the response back to the client, include the user in the response as well.
      jwt = Auth.encode({id: @user.id})

      render json: { jwt: jwt }

    else
      render json: {
        error: "Invalid Credentials",
        details: @user.errors.full_messages
      }
      render json: resp, status: :unauthorized
    end
  end

  def get_current_user
    if logged_in?
    render json: {
      user: user_serializer(current_user)
      }, status: :ok
    else
      render json: {
        error: "No current user"
      }

    end
  end

  def delete

  end
end
