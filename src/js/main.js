const data = fetch('./data.json')
    .then(response => response.json())
    .then (data => {return data})

const containerChart = document.querySelector('.balance__spending');

data.then((data) =>{
    data.forEach(item => {
        let chart = document.createElement('div'),
        divValue= '';
        const itemHeight = item.amount/6;
        chart.classList.add('balance__chart');
        (item.day === 'wed')
            ? divValue = `<div class="balance__value balance__value--cyan" style="--height: ${itemHeight}em"></div>`
            : divValue = `<div class="balance__value" style="--height: ${itemHeight}em"></div>`
        chart.innerHTML = `
        <div class="balance__wrapper">
            ${divValue}
        </div>
        <p class="balance__p balance__p--title">${item.day}</p>
        `;
        containerChart.appendChild(chart);
    })
   
})