// Наслідування / Inheritance
class Chart {
    constructor(height, background, hasBorder) {
      this.height = height;
      this.background = background;
      this.hasBorder =  hasBorder; 
    }
}

class ChartClickable extends Chart {
    #isClickable = true; // інкапсуляція
    #doSomeComplexMath() {
        //
        //
        //
        //
        return 999;
    }
    handleClick() {
        const data = this.#doSomeComplexMath();
        alert(`Final data is ${data}!`);
    }
    getIsClickable() {
        return this.#isClickable;
    }
}



function renderChart(chartData) {
    const chartsContainer = document.querySelector(".charts-container");
    const chart = document.createElement("div");
    chart.classList.add("chart");
    chart.style.height = chartData.height;
    chart.style.backgroundColor = chartData.background;
    if (chartData.hasBorder) {
        chart.style.border = "2px solid black";
    }
    if (chartData.getIsClickable()) {
        chart.addEventListener("click", () => chartData.handleClick());
    }
    chartsContainer.appendChild(chart);
};

/* renderChart(new Chart("300px", "red", true));
renderChart(new ChartClickable("200px", "red", true)); */

//**** */ Поліморфізм // Polymorphism

class ChartClickableSecond extends ChartClickable {
    handleClick() {
        super.handleClick();
        alert("You cliked on the Clickable Second Chart");
    }
}

renderChart(new ChartClickableSecond("200px", "green", true));

// Інкапсуляція / Encapsulation

const chartClickable = new ChartClickable("250px", "pink", true);
chartClickable.isClickable = false; // при спробі зміні властивості класу, не змінюється 
renderChart(chartClickable);

// Абстракція / Abstraction
