#Imports::Mws::Mws.new.start!

module Imports
    module Mws
        class Mws < Base

            def start!

            	base_url = "https://data.gov.uk/dataset/historic-monthly-meteorological-station-data/datapackage.json"
				page = open(base_url)

				data_json = JSON.parse(page.read)

				stations = []
				data_json['resources'].each do |item|
					if item['format'] == 'TXT' then

						stations.push(
							name: item['description'],
							url: item['url'],
							data: parser_txt(open(item['url']).read)
						)

					end
				end

				stations

            end

        end
    end
end