import Component from '@ember/component';
import { Chart } from 'chart.js'

const ubuntuMain = 'rgba(233, 84, 32, 0.7)'
const fedoraMain = 'rgba(60, 110, 180, 0.7)'
const ubuntuBorder = 'rgba(233, 84, 32, 1)'
const fedoraBorder = 'rgba(60, 110, 180, 1)'

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
        labels: ['GTA V', 'Tomb Raider', "CS:GO", "Unigine Valley"],
        datasets: [
          {
            label: "Ubuntu 18.04",
            backgroundColor: 'rgba(233, 84, 32, 0.7)',
            data: [30.1, 34.4, 51.4, 13.7]
          }, {
            label: "Fedora 31",
            backgroundColor: 'rgba(60, 110, 180, 0.7)',
            data: [22.5, 22.9, 43.1, 13]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Game Benchmarks'
        }
      }
    })
  }
});
