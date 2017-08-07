class AjaxController < ActionController::Base

	def index

	  	data = Imports::Mws::Mws.new.start!

	    respond_to do |format|
	      format.json { render :json => data[get_params[:id].to_i].to_json }
	    end

	end

	private

	def get_params
		params.permit(:id)
	end

end
