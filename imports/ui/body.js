import { Chart } from "chart.js"
import { Template } from "meteor/templating"

import "./body.html"

Template.body.onRendered(() => {
  const ctx = document.getElementById("myChart").getContext("2d")
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ubuntu 18.04", "Fedora 31"],
      datasets: [{
        label: "Single-Core Score",
        data: [478, 1530],
        backgroundColor: [
          "rgba(233, 84, 32, 0.7)",
          "rgba(60, 110, 180, 0.7)"
        ],
        borderColor: [
          "rgba(119, 33, 111, 1)",
          "rgba(41, 65, 114, 1)"
        ],
        borderWidth: 1.2,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
})
