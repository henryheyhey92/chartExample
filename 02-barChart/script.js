const options = {
    'chart':{
        'type': 'bar',
        'height': '100%'
    }, 
    'series':[
        {
            'name':'Revenue',
            'data': [1200000, 650000, 700000, 450000, 30000, 250000]
        }
    ],
    xaxis:{
        'categories':['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun' ]
    }
}
const divChart =document.querySelector('#chart');
//create a new chart obj
//first arg of new ApexCharts() is the div where we have the chart
const chart = new ApexCharts(divChart, options);

chart.render();