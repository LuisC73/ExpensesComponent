const data = fetch('../../data.json')
    .then(response => response.json())
    .then (data => {return data})

const containerChart = document.querySelector('.balance__spending');

console.log("object");

data.then((data) =>{
    data.forEach(item => {
        let chart = document.createElement('div');
        const height = item.amount/6;
        chart.classList.add('balance__chart');
        chart.innerHTML = `
        <div class="balance__wrapper">
        <div class="balance__value" style="--height: ${height}em"></div>
        </div>
        <p class="balance__p balance__p--title">${item.day}</p>
        `;
        containerChart.appendChild(chart);
    })
   
})