const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

const containerChart = document.querySelector('.balance__spending');


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
   