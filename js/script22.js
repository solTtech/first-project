// ООП-об'єктно орієнтоване програмування. Класи

class Chart {
    constructor(height, background, hasBorder) {
      this.height = height;
      this.background = background;
      this.hasBorder =  hasBorder; 
    }
}


const chartContent = new Chart("300px", "red", true);
const chartContent1 = new Chart("250px", "blue", true);
const chartContent2 = new Chart("200px", "black", true);
const chartContent3 = new Chart("150px", "purple", true);
const chartContent4 = new Chart("200px", "pink", true);
const chartContent5 = new Chart("250px", "yellow", true);
const chartContent6 = new Chart("300px", "green", true);
const chartContent7 = new Chart("350px", "brown", true);
const chartContent8 = new Chart("300px", "white", true);
const chartContent9 = new Chart("250px", "grey", true);
const chartContent10 = new Chart("200px", "orange", true);
/* {
    height: "300px",
    background: "red",
    hasBorder: true,
}; */

function renderChart(chartData) {
    const chartsContainer = document.querySelector(".charts-container");
    const chart = document.createElement("div");
    chart.classList.add("chart");
    chart.style.height = chartData.height;
    chart.style.backgroundColor = chartData.background;
    if (chartData.hasBorder) {
        chart.style.border = "2px solid black";
    }
    chartsContainer.appendChild(chart);
};

renderChart(chartContent);
renderChart(chartContent1);
renderChart(chartContent2);
renderChart(chartContent3);
renderChart(chartContent4);
renderChart(chartContent5);
renderChart(chartContent6);
renderChart(chartContent7);
renderChart(chartContent8);
renderChart(chartContent9);
renderChart(chartContent10);