var chart = document.querySelector('.chart');

async function fetchArray() {
    let response = await fetch("http://127.0.0.1:5500/expenses-chart-component-main/data.json");
    let data = await response.json();
    console.log(data);

    var template = '';
    data.map((result) => {
        template += `
        <div class="chart-item">
            <div class="spend">$${result.amount}</div>
            <div class="bar" id="${result.day}" style="height: ${result.amount * 2.5}px !important;"></div>
            <p>${result.day}</p>
        </div>
        `;
    })
    chart.innerHTML = template;
}

fetchArray();

