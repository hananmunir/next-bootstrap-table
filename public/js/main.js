(function ($) {
  "use strict";

  // menu
  $(".siteBar-btn").click(function () {
    $(".mobile-menu").toggleClass("siteBar");
  });

  function CountDown() {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end

      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
  }
  CountDown();

  // function Animation() {
  //   AOS.init({
  //     // Global settings:
  //     disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //     startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  //     initClassName: "aos-init", // class applied after initialization
  //     animatedClassName: "aos-animate", // class applied on animation
  //     useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //     disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //     throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  //     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //     offset: 120, // offset (in px) from the original trigger point
  //     delay: 0, // values from 0 to 3000, with step 50ms
  //     duration: 800, // values from 0 to 3000, with step 50ms
  //     easing: "ease", // default easing for AOS animations
  //     once: false, // whether animation should happen only once - while scrolling down
  //     mirror: false, // whether elements should animate out while scrolling past them
  //     anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  //   });
  // }
  // Animation();
})(jQuery);

// hover
$(".date").mouseover(function () {
  $(this).siblings().css("transform", "translateY(-15%)");
});
$(".date").mouseleave(function () {
  $(this).siblings().css("transform", "translateY(0%)");
});

// dounut chart
var options = {
  chart: {
    width: "100%",
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "90%",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 0,
  },
  colors: [
    "#D246DD",
    "#7C2CE2",
    "#00A4E9",
    "#47B735",
    "#cfa5ef",
    "#0afc00",
    "#B3C83C",
    "#EDDB5C",
    "#F0B63C",
    "#F5912F",
    "#FD6191",
    "#F24B40",
  ],
  series: [6, 10, 3, 15, 5, 10, 12, 8, 5, 10, 12, 4],
  labels: [
    "Liquidity",
    "Operational",
    "Early Bird",
    "Rewards for Analysts",
    "Airdrops",
    "Treasury",
    "Private round",
    "Team",
    "Advisors",
    "Marketing",
    "Seed round",
    "Public round",
  ],
  legend: {
    show: false,
    position: "right",
    fontSize: 12,
    fontWeight: 600,
  },
};
var chart = new ApexCharts(document.querySelector("#donutChart1"), options);

chart.render();

// line char
// var options = {
//   chart: {
//     width: "100%",
//     height: 450,
//     type: "line",
//     stacked: false,
//     toolbar: false,
//     foreColor: "white",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   colors: ["#55E39D", "#C22DB3"],
//   series: [
//     {
//       name: "HODL",
//       type: "line",
//       data: [
//         10000, 12457, 11680, 11862, 15703, 20592, 44726, 38105, 54353, 65473,
//         64250, 39286, 37276, 46066, 57551, 48684, 67853, 63240, 48506, 46112,
//         48835, 51427, 39446, 33104, 21380, 25897, 22362, 21160, 22757, 18988,
//       ],
//     },
//     {
//       name: "Rosy Portfolio",
//       type: "line",
//       data: [
//         10000, 13412, 12111, 13451, 18541, 25412, 58513, 56431, 59851, 75432,
//         71341, 65431, 61413, 64321, 67432, 62311, 73412, 71421, 69641, 67821,
//         64431, 64521, 62131, 60421, 57531, 55111, 52312, 51241, 50223, 49412,
//       ],
//     },
//   ],
//   stroke: {
//     width: [5, 5, 5],
//     curve: "smooth",
//   },
//   markers: {
//     // size: 2,
//     // strokeWidth: 5,
//   },
//   plotOptions: {
//     line: {
//       columnWidth: "12%",
//     },
//   },
//   xaxis: {
//     categories: [
//       "2020-07-01",
//       "2020-08-01",
//       "2020-09-01",
//       "2020-10-01",
//       "2020-11-01",
//       "2020-12-01",
//       "2021-01-01",
//       "2021-02-01",
//       "2021-03-01",
//       "2021-04-01",
//       "2021-05-01",
//       "2021-06-01",
//       "2021-07-01",
//       "2021-08-01",
//       "2021-09-01",
//       "2021-10-01",
//       "2021-11-01",
//       "2021-12-01",
//       "2022-01-01",
//       "2022-02-01",
//       "2022-03-01",
//       "2022-04-01",
//       "2022-05-01",
//       "2022-06-01",
//       "2022-07-01",
//       "2022-08-01",
//       "2022-09-01",
//       "2022-10-01",
//       "2022-11-01",
//       "2022-12-01",
//     ],
//     axisBorder: {
//       show: false,
//     },
//   },
//   yaxis: {
//     min: 0,
//     max: 80000,
//     tickAmount: 4,
//   },
//   grid: {
//     show: true,
//     borderColor: "#90A4AE",
//     strokeDashArray: 0,
//     position: "back",
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     row: {
//       colors: undefined,
//       opacity: 0.5,
//     },
//     column: {
//       colors: undefined,
//       opacity: 0.5,
//     },
//     padding: {
//       top: 0,
//       right: 0,
//       bottom: 0,
//       left: 10,
//     },
//   },

//   // yaxis: [
//   //   {
//   //     seriesName: "Column A",
//   //     axisTicks: {
//   //       show: false,
//   //     },
//   //   },
//   //   {
//   //     seriesName: "Column A",
//   //     show: false,
//   //   },
//   //   {
//   //     opposite: false,
//   //     seriesName: "Line C",
//   //     axisTicks: {
//   //       show: false,
//   //     },
//   //     axisBorder: {
//   //       show: false,
//   //     },
//   //   },
//   // ],
//   tooltip: {
//     shared: false,
//     intersect: true,
//     x: {
//       show: false,
//     },
//   },
//   legend: {
//     horizontalAlign: "center",
//     offsetX: 40,
//     fontSize: 14,
//     position: "top",
//     fontWeight: 600,
//   },
// };

// var chart = new ApexCharts(document.querySelector("#multiCharts"), options);

// chart.render();

var options = {
  chart: {
    width: "100%",
    height: 450,
    type: "line",
    stacked: false,
    toolbar: false,
    foreColor: "white",
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + " USD";
      },
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return value;
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#55E39D", "#C22DB3"],
  series: [
    {
      name: "HODL",
      type: "line",
      data: [
        10000, 12457, 11680, 11862, 15703, 20592, 44726, 38105, 54353, 65473,
        64250, 39286, 37276, 46066, 57551, 48684, 67853, 63240, 48506, 46112,
        48835, 51427, 39446, 33104, 21380, 25897, 22362, 21160, 22757, 18988,
      ],
    },
    {
      name: "Rosy Portfolio",
      type: "line",
      data: [
        10000, 13412, 12111, 13451, 18541, 25412, 58513, 56431, 59851, 75432,
        71341, 65431, 61413, 64321, 67432, 62311, 73412, 71421, 69641, 67821,
        64431, 64521, 62131, 60421, 57531, 55111, 52312, 51241, 50223, 49412,
      ],
    },
  ],
  stroke: {
    width: [5, 5, 5],
    curve: "smooth",
  },
  legend: {
    show: true,
    fontSize: 18,
    fontFamily: "Poppins",
    itemMargin: {
      horizontal: 15,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: false,
    },
    markers: {
      width: 15,
      height: 15,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 2,
      customHTML: undefined,
      onClick: undefined,
      offsetX: -5,
      offsetY: 0,
    },
    position: "top",
  },
  markers: {
    size: 0,
    strokeWidth: 0,
  },
  // stroke: {
  //   width: [5, 5, 4],
  //   curve: "straight",
  // },
  xaxis: {
    categories: [
      "2020-07",
      "2020-08",
      "2020-09",
      "2020-10",
      "2020-11",
      "2020-12",
      "2021-01",
      "2021-02",
      "2021-03",
      "2021-04",
      "2021-05",
      "2021-06",
      "2021-07",
      "2021-08",
      "2021-09",
      "2021-10",
      "2021-11",
      "2021-12",
      "2022-01",
      "2022-02",
      "2022-03",
      "2022-04",
      "2022-05",
      "2022-06",
      "2022-07",
      "2022-08",
      "2022-09",
      "2022-10",
      "2022-11",
      "2022-12",
    ],
    axisBorder: {
      show: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#multiCharts"), options);
chart.render();

// dougnut hover
// window.onload = function () {
//   if (!window.location.hash) {
//     window.location = window.location + "#loaded";
//     window.location.reload();
//   }
// };
// window.onresize = function () {
//   location.reload();
// };

$("#SvgjsG1022").mouseover(function () {
  $("#tknTable").addClass("tknTableShow");
  $("#tknBlk2").addClass("tknBlkShow");
});
$("#SvgjsG1022").mouseleave(function () {
  $("#tknTable").removeClass("tknTableShow");
  $("#tknBlk2").removeClass("tknBlkShow");
});

$("#SvgjsG1024").mouseover(function () {
  $("#tknBlk11").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1024").mouseleave(function () {
  $("#tknBlk11").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1026").mouseover(function () {
  $("#tknBlk6").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1026").mouseleave(function () {
  $("#tknBlk6").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1028").mouseover(function () {
  $("#tknBlk3").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1028").mouseleave(function () {
  $("#tknBlk3").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1030").mouseover(function () {
  $("#tknBlk4").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1030").mouseleave(function () {
  $("#tknBlk4").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1032").mouseover(function () {
  $("#tknBlk5").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1032").mouseleave(function () {
  $("#tknBlk5").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1034").mouseover(function () {
  $("#tknBlk6").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1034").mouseleave(function () {
  $("#tknBlk6").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1036").mouseover(function () {
  $("#tknBlk7").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1036").mouseleave(function () {
  $("#tknBlk7").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1038").mouseover(function () {
  $("#tknBlk8").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1038").mouseleave(function () {
  $("#tknBlk8").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1016").mouseover(function () {
  $("#tknBlk9").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1016").mouseleave(function () {
  $("#tknBlk9").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1018").mouseover(function () {
  $("#tknBlk10").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1018").mouseleave(function () {
  $("#tknBlk10").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

$("#SvgjsG1020").mouseover(function () {
  $("#tknBlk1").addClass("tknBlkShow");
  $("#tknTable").addClass("tknTableShow");
});
$("#SvgjsG1020").mouseleave(function () {
  $("#tknBlk1").removeClass("tknBlkShow");
  $("#tknTable").removeClass("tknTableShow");
});

// $(document).ready(function(){
//   $("#SvgjsG1019").mouseover(function () {
//     $("#tknBlk11").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1019").mouseleave(function () {
//     $("#tknBlk11").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1021").mouseover(function () {
//     $("#tknBlk12").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1021").mouseleave(function () {
//     $("#tknBlk12").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1023").mouseover(function () {
//     $("#tknBlk3").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1023").mouseleave(function () {
//     $("#tknBlk3").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1025").mouseover(function () {
//     $("#tknBlk4").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1025").mouseleave(function () {
//     $("#tknBlk4").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1027").mouseover(function () {
//     $("#tknBlk5").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1027").mouseleave(function () {
//     $("#tknBlk5").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1029").mouseover(function () {
//     $("#tknBlk6").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1029").mouseleave(function () {
//     $("#tknBlk6").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1011").mouseover(function () {
//     $("#tknBlk9").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1011").mouseleave(function () {
//     $("#tknBlk9").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1015").mouseover(function () {
//     $("#tknBlk1").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1015").mouseleave(function () {
//     $("#tknBlk1").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1017").mouseover(function () {
//     $("#tknBlk2").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1017").mouseleave(function () {
//     $("#tknBlk2").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1013").mouseover(function () {
//     $("#tknBlk10").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1013").mouseleave(function () {
//     $("#tknBlk10").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1031").mouseover(function () {
//     $("#tknBlk7").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1031").mouseleave(function () {
//     $("#tknBlk7").removeClass("tknBlkShow");
//   });

//   $("#SvgjsG1033").mouseover(function () {
//     $("#tknBlk8").addClass("tknBlkShow");
//   });
//   $("#SvgjsG1033").mouseleave(function () {
//     $("#tknBlk8").removeClass("tknBlkShow");
//   });

// })

// nav links
$(".navLinks").click(function (e) {
  $(".navLinks").removeClass("active");
  $(this).addClass("active");
});
