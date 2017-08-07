module Imports
    module Mws
        class Base < ApplicationController

        	private

        	def parser_txt(data)

            	res = []
            	data[(data.split("yyyy")[0].length-1)..-1].split("\n").each do |row|
            		res.push(row.strip!.to_s.split(' '))
            	end

            	res

            end
            
        end
    end
end