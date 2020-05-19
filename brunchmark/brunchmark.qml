import QtQuick 2.0
import QtCharts 2.0
import QtQuick.Controls 2.12

ApplicationWindow {
    title: "Brunchmarks"
    width: 800
    height: 600

    ChartView {
    anchors.fill: parent
    legend.alignment: Qt.AlignBottom
    theme: ChartView.ChartThemeBrownSand
    antialiasing: true

    BarSeries {
        id: barSeries
        axisX: BarCategoryAxis { categories: ["GTA V", "Tomb Raider", "CS:GO", "Unigine Valley"] }
        BarSet { label: "XFCE 4.14"; color: "#F08762"; values: [30.1, 34.4, 51.4, 13.7] }
        BarSet { label: "KDE Plasma 5.18"; color: "#7699CA"; values: [22.5, 22.9, 43.1, 13] }
    }
}
}
