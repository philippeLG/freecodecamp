//=================================================
// FreecodeCamp - Data Visualization Certification
// Visualize Data with a Bar Chart
// P. Le Goff 2019/06/03
//=================================================

//=================================================
// Get the data
//=================================================
var url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

d3.json(url).then(function (dataSet) {

  const data = dataSet.data;

  //=================================================
  // Set the dimensions and margins of the graph
  //=================================================
  var margin = { top: 30, right: 50, bottom: 30, left: 50 },
  width = 950,
  height = 600,
  barWidth = width / data.length - 1,
  padding = 65;

  // Show title
  document.getElementById("title").innerHTML = dataSet.source_name;

  //=================================================
  // Scale the range of the data left axis Y
  //=================================================
  var y = data.map(function (item) {return item[1];});
  var yMax = d3.max(y);
  var yScale = d3.scaleLinear().domain([0, yMax]).range([0, height - padding]);
  var yScaleAxe = d3.scaleLinear().domain([0, yMax]).range([height - padding, 0]);
  const yAxis = d3.axisLeft(yScaleAxe);

  //=================================================
  // Scale the range of the data bottom axe X
  //=================================================
  var x = data.map(function (item) {return new Date(item[0]);});
  var xMin = d3.min(x);
  var xMax = d3.max(x);

  const xScale = d3.scaleTime().domain([xMin, xMax]).range([padding, width - padding]);

  const xAxis = d3.axisBottom(xScale);

  //=================================================
  // append the svg object to the container
  //=================================================
  const svg = d3.select(".container").
  append("svg").
  attr("width", width).
  attr("height", height);

  //=================================================
  // append tooltip 
  //=================================================
  const tooltip = d3.select(".main").
  append("div").
  attr("id", "tooltip").
  style("opacity", 0);

  //=================================================
  // Add the rect   
  //=================================================
  svg.
  selectAll("rect").
  data(data).
  enter().
  append("rect").
  attr("class", "bar").
  attr("data-date", d => d[0]).
  attr("data-gdp", d => d[1]).
  attr("x", (d, i) => padding + i * 3).
  attr("y", (d, i) => height - padding - yScale(d[1])).
  attr("width", barWidth).
  attr("height", (d, i) => yScale(d[1])).
  attr("fill", "navy").
  on("mouseover", d => {
    tooltip.
    transition().
    duration(50).
    style("opacity", 0.9);
    tooltip.
    attr("data-date", d[0]).
    html(d[0] + '<br>' + '$' + d[1] + ' Billion');
  }).
  on("mouseout", d => {
    tooltip.
    transition().
    duration(500).
    style("opacity", 0);
  });

  //=================================================
  // Add the X Axis
  //=================================================
  svg.append("g").
  attr("transform", "translate(0," + (height - padding) + ")").
  attr("id", "x-axis").
  call(xAxis);

  //=================================================
  // Add the Y Axis
  //=================================================
  svg.append('g').
  attr("transform", "translate(" + padding + "," + 0 + ")").
  attr("id", "y-axis").
  call(yAxis);

});