showgraph1();
function showgraph1() {
    var a = document.getElementById("1room");
    var b = document.getElementById("2room");
    var c = document.getElementById("3room");
    var d = document.getElementById("4room");
    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }
    var ctx = document.getElementById("col_bar").getContext('2d');
    var col_bar = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Bayview","Bernal Heights" ,"Castro/Upper Market" ,"Chinatown" ,"Crocker Amazon" ,"Diamond Heights" ,"Downtown/Civic Center" ,"Excelsior" ,"Financial District" ,"Glen Park" ,"Golden Gate Park" ,"Haight Ashbury" ,"Inner Richmond" ,"Inner Sunset" ,"Lakeshore" ,"Marina" ,"Mission" ,"Nob Hill" ,"Noe Valley" ,"North Beach" ,"Ocean View" ,"Outer Mission" ,"Outer Richmond" ,"Outer Sunset" ,"Pacific Heights" ,"Parkside" ,"Potrero Hill" ,"Presidio" ,"Presidio Heights" ,"Russian Hill" ,"Seacliff" ,"South of Market" ,"Treasure Island/YBI" ,"Twin Peaks" ,"Visitacion Valley" ,"West of Twin Peaks" ,"Western Addition"],
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Average Price in Dollars',
                data: [95.05555555555556 ,132.4223107569721 ,169.18345323741008 ,198.76 ,85.9 ,144.15384615384616 ,216.4887459807074 ,85.29906542056075 ,209.19811320754718 ,143.8 ,121.25 ,144.16287878787878 ,135.46022727272728 ,146.5943396226415 ,119.1025641025641 ,199.3736842105263 ,146.7957142857143 ,180.14414414414415 ,173.55803571428572 ,176.27927927927928 ,114.51898734177215 ,122.68867924528301 ,133.91525423728814 ,111.8719512195122 ,191.01408450704224 ,199.01298701298703 ,243.8841463414634 ,160.0 ,174.8148148148148 ,211.22556390977442 ,146.33333333333334 ,258.22197802197803 ,93.42105263157895 ,145.04347826086956 ,112.6923076923077 ,118.56410256410257 ,165.98373983739836],
                // data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'

                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}
function showgraph2() {
    var a = document.getElementById("2room");
    var b = document.getElementById("1room");
    var c = document.getElementById("3room");
    var d = document.getElementById("4room");
    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }
    var ctx2 = document.getElementById("col_bar2").getContext('2d');
    var col_bar2 = new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
            labels: ["Bayview","Bernal Heights" ,"Castro/Upper Market" ,"Chinatown" ,"Crocker Amazon" ,"Diamond Heights" ,"Downtown/Civic Center" ,"Excelsior" ,"Financial District" ,"Glen Park" ,"Golden Gate Park" ,"Haight Ashbury" ,"Inner Richmond" ,"Inner Sunset" ,"Lakeshore" ,"Marina" ,"Mission" ,"Nob Hill" ,"Noe Valley" ,"North Beach" ,"Ocean View" ,"Outer Mission" ,"Outer Richmond" ,"Outer Sunset" ,"Pacific Heights" ,"Parkside" ,"Potrero Hill" ,"Presidio" ,"Presidio Heights" ,"Russian Hill" ,"Seacliff" ,"South of Market" ,"Treasure Island/YBI" ,"Twin Peaks" ,"Visitacion Valley" ,"West of Twin Peaks" ,"Western Addition"],
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Average Price in Dollars',
                data: [187,242.9263158,308.049505,276.6666667,137.3333333,284,395.0294118,174.375,532.5238095,241.75,171.5,318.4545455,315.4285714,323.3703704,313.3333333,430.5490196,280.4382022,324.2972973,330.075,621.375,194.2631579,304.3571429,208.7222222,209.5490196,429.7358491,247.52,398.4098361,,356,460.6326531,243,592.1473684,,293.8421053,225.25,217,340.8085106],
                // data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'

                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function showgraph3() {
    var a = document.getElementById("3room");
    var b = document.getElementById("1room");
    var c = document.getElementById("2room");
    var d = document.getElementById("4room");
    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }
    var ctx3 = document.getElementById("col_bar3").getContext('2d');
    var col_bar3 = new Chart(ctx3, {
        type: 'horizontalBar',
        data: {
            labels: ["Bayview","Bernal Heights" ,"Castro/Upper Market" ,"Chinatown" ,"Crocker Amazon" ,"Diamond Heights" ,"Downtown/Civic Center" ,"Excelsior" ,"Financial District" ,"Glen Park" ,"Golden Gate Park" ,"Haight Ashbury" ,"Inner Richmond" ,"Inner Sunset" ,"Lakeshore" ,"Marina" ,"Mission" ,"Nob Hill" ,"Noe Valley" ,"North Beach" ,"Ocean View" ,"Outer Mission" ,"Outer Richmond" ,"Outer Sunset" ,"Pacific Heights" ,"Parkside" ,"Potrero Hill" ,"Presidio" ,"Presidio Heights" ,"Russian Hill" ,"Seacliff" ,"South of Market" ,"Treasure Island/YBI" ,"Twin Peaks" ,"Visitacion Valley" ,"West of Twin Peaks" ,"Western Addition"],
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Average Price in Dollars',
                data: [344.6666667,326.45,447.4150943,10000,315,310,630,442.6363636,1240,430.5,,494.5806452,405.4,370.6,463.3333333,789.6818182,493.0864198,696.2631579,485.25,628.8181818,269.75,362,294.3636364,396.1176471,715.0769231,387.25,529.9354839,699,667.5,1069,386.6666667,1231.428571,,398.3333333,235,462.8888889,447.1111111],
                // data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'

                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(0, 0, 0, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function showgraph4() {
    var a = document.getElementById("4room");
    var b = document.getElementById("1room");
    var c = document.getElementById("2room");
    var d = document.getElementById("3room");
    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }
    var ctx4 = document.getElementById("col_bar4").getContext('2d');
    var col_bar4 = new Chart(ctx4, {
        type: 'horizontalBar',
        data: {
            labels: ["Bayview","Bernal Heights" ,"Castro/Upper Market" ,"Chinatown" ,"Crocker Amazon" ,"Diamond Heights" ,"Downtown/Civic Center" ,"Excelsior" ,"Financial District" ,"Glen Park" ,"Golden Gate Park" ,"Haight Ashbury" ,"Inner Richmond" ,"Inner Sunset" ,"Lakeshore" ,"Marina" ,"Mission" ,"Nob Hill" ,"Noe Valley" ,"North Beach" ,"Ocean View" ,"Outer Mission" ,"Outer Richmond" ,"Outer Sunset" ,"Pacific Heights" ,"Parkside" ,"Potrero Hill" ,"Presidio" ,"Presidio Heights" ,"Russian Hill" ,"Seacliff" ,"South of Market" ,"Treasure Island/YBI" ,"Twin Peaks" ,"Visitacion Valley" ,"West of Twin Peaks" ,"Western Addition"],
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Average Price in Dollars',
                data: [400,496.2777778,694.2352941,1500,300,295,84,444.375,,445.5,889,783.05,586.0434783,1283.333333,298,1081.307692,715.05,959.8333333,790.5294118,925,488.5,252.4,943.2222222,527.5,1522,474.5,951.25,800,3060,1544.666667,,,,711.25,260,560.8333333,1484.758621],
                // data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'

                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)', 'rgba(75, 192, 192), 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(0, 0, 0, 1)', 'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}




// Scatter plot!
var scatter = document.getElementById('scatter');

var scatter_chart = new Chart(scatter, {
  type: 'line',
  data: {
    labels: makeLabels().labels,
    datasets: [{
      type: 'line',
      label: 'Data',
      data: makeLabels().labels,
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 0
    }, {
      type: 'bubble',
      label: 'Data2',
      data: makeBubbles(),
      backgroundColor: "rgba(76,78,80, .7)",
      borderColor: "transparent"
    }]
  },
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          autoSkip: true,
          max: Math.max(...makeLabels().array)
        }
      }]
    }
  }
});

function makeLabels() {
  let arr = [

    1,

    100
  ];

  arr = arr.sort((a, b) => a - b);
  let newarr = arr.map(item => ({ x: item, y: item }));
  return {
    labels: newarr,
    array: arr
  };
};

function makeBubbles() {
  let arr = [
    1,
    2,
    8.501876487304344,
    6.63200177739563,
    6.815639990074331,
    9.455871442168021,
    10.745464137157782,
    6.293419278846481,
    10.559036702680755,
    6.371611847231857,
    9.472242991440476,
    9.356084386028888,
    6.761572768804055,
    9.556409270127691,
    9.331052447138447,
    10.291569105033412,
    6.018593214496234,
    6.354370040797351,
    10.302599186672117,
    6.326149473155099,
    10.274947655341608,
    8.635331719433278,
    10.425757440186377,
    8.760923376338836,
    6.345636360828596,
    9.974784434418162,
    10.486149999920801,
    6.054439346269371,
    10.963185747705012,
    6.049733455231958,
    10.429960121878297,
    5.857933154483459,
    6.368187186350492,
    9.474625866621567,
    10.878160393673937,
    10.696480068065789,
    9.838949031398556,
    7.050989447068045,
    11.932378944680496,
    6.489204931325317,
    5.564520407322694,
    5.849324779946859,
    6.144185634125646,
    9.550662331752143,
    5.8971538676367405,
    5.855071922202427,
    7.586803535162581,
    10.55664572487971
  ];

  arr = arr.map(function(item, i) {
    return {x: item, y:arr[i - 1]}
  });

  return arr;
};




//Line graph

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["1 Bathroom", "2 Bathrooms", "3 Bathrooms", "4 Bathrooms"],
    datasets: [{
        data: [173.5482046,178.5694915,84.35714286,81.78571429],
        label: "1 Bedroom",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [289.5023202,399.6519481,494.0909091,],
        label: "2 Bedrooms",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: [411.9621212,450.5081433,766.5166667,4422.25],
        label: "3 Bedrooms",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: [500.5882353,701.4520548,793.8,936.2857143],
        label: "4 Bedrooms",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bedroom to Bathroom Price Ratio'
    }
  }
});
