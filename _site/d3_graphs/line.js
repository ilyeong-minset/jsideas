//margin
			var margin = {
				top: 20,
				right: 20,
				bottom: 30,
				left: 50
			}
			var width = 960 - margin.left - margin.right;
			var height = 500 - margin.top - margin.bottom;

			//Date parsing
			var parseDate = d3.time.format("%d-%b-%y").parse;

			//scaling
			var x = d3.time.scale()
			               .range([0,width]);
			var y = d3.scale.linear()
			                .range([height, 0]);

			//axis
			var xAxis = d3.svg.axis()
			                  .scale(x)
			                  .orient("bottom");
			var yAxis = d3.svg.axis()
			                  .scale(y)
			                  .orient("left")

			//line
			var line = d3.svg.line()
			                 .x(function(d) { return x(d.date); })
			                 .y(function(d) { return y(d.close);});

			//svg
			var svg = d3.select("body").append("svg")
			            .attr("width", width + margin.left + margin.right)
			            .attr("height", height + margin.top + margin.bottom)
			          .append("g")
			            .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 

			//tsv upload
			d3.tsv("/raw_data/data.tsv", function(error, data) {
				data.forEach(function(d) {
					d.date = parseDate(d.date);
					d.close = +d.close;
				});


				//domain
				x.domain(d3.extent(data, function(d) {return d.date; }));
				y.domain(d3.extent(data, function(d) {return d.close;}));
			
				svg.append("g")
				   .attr("class", "x axis")
				   .attr("transform", "translate(0," + height + ")")
				   .call(xAxis)
				 .append("text")
				   .attr("x", width)
				   .attr("y", -5)
				   .style("text-anchor", "end")
				   .text("Time");

				svg.append("g")
				   .attr("class", "yAxis")
				   .call(yAxis)
				 .append("text")
				   .attr("transform", "rotate(-90)")
				   .attr("y", 5)
				   .attr("dy", ".71em")
				   .style("text-anchor", "end")
				   .text("Price ($)");

				//line chart
				svg.append("path")
				   .datum(data)
				   .attr("class", "line")
				   .attr("d", line)
				   .attr("fill", "none")
				   .attr("stroke", "steelblue")
				   .attr("stroke-width", "1.5px");

			});

