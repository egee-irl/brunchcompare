import Component from '@ember/component';
import { Chart } from 'chart.js'

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
            label: "Solus 4.0",
            backgroundColor: 'rgba(60, 110, 180, 0.7)',
            data: [12.7, 24.2, 42.1, 10.3]
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
