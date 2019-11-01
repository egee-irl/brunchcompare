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
        label: "Single-Core",
        data: [478, 478],
        backgroundColor: [
          "rgba(233, 84, 32, 0.7)",
          "rgba(60, 110, 180, 0.7)"
        ],
        borderColor: [
          "rgba(233, 84, 32, 1)",
          "rgba(60, 110, 180, 1)"
        ],
        borderWidth: 1.2,
      }]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 550,
            beginAtZero: true
          }
        }]
      }
    }
  })
})
