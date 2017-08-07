class IndexController < ActionController::Base
  
  def index

  	data = Imports::Mws::Mws.new.start!

  	@stations = []
  	data.each do |item|
  		@stations.push(item[:name])
  	end

  	@data = data[0]

  end

end
