import Component from '@ember/component';
import { Chart } from 'chart.js'

const ubuntuMain = 'rgba(233, 84, 32, 0.7)'
const fedoraMain = 'rgba(60, 110, 180, 0.7)'
const ubuntuBorder = 'rgba(233, 84, 32, 1)'
const fedoraBorder = 'rgba(60, 110, 180, 1)'

const gtav = {
  label: 'GTA V',
  data: [30.1, 22.5],
  backgroundColor: [
    ubuntuMain,
    fedoraMain
  ],
  borderColor: [
    ubuntuBorder,
    fedoraBorder
  ],
  borderWidth: 1.2
}
const tomb = {
  label: 'Tomb Raider 2013',
  data: [34.4, 22.9],
  backgroundColor: [
    ubuntuMain,
    fedoraMain
  ],
  borderColor: [
    ubuntuBorder,
    fedoraBorder
  ],
  borderWidth: 1.2
}
const csgo = {
  label: 'CS:GO',
  data: [51.4, 43.19],
  backgroundColor: [
    ubuntuMain,
    fedoraMain
  ],
  borderColor: [
    ubuntuBorder,
    fedoraBorder
  ],
  borderWidth: 1.2
}
const valley = {
  label: 'CS:GO',
  data: [13.7, 13.0],
  backgroundColor: [
    ubuntuMain,
    fedoraMain
  ],
  borderColor: [
    ubuntuBorder,
    fedoraBorder
  ],
  borderWidth: 1.2
}

export default Component.extend({
  didRender () {
    let currentTab = ""
    const allTabs = document.getElementsByClassName('tab');

    if (document.URL.includes("geekbench")) {
      currentTab = "Geekbench";
      allTabs[1].classList.remove('is-active')
      allTabs[0].classList.add('is-active')
    } else {
      currentTab = "Games";
      allTabs[0].classList.remove('is-active')
      allTabs[1].classList.add('is-active')
    }

    new Chart(document.getElementById(currentTab).getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Ubuntu 18.04', 'Fedora 31'],
        datasets: [gtav, tomb, csgo, valley]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 60,
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
});
