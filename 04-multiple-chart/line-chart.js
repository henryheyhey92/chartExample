const sightings = [10, 13, 15, 22, 23, 26];

const temperature = [33, 45, 23, 67, 89, 33];

const lineChartOptions = {
    'chart':{
        'type': 'line',
        'height': '100%'
    },
    'series':[
        {
            'name' : 'sightings',
            'data': sightings
        },
        {
            'name' : 'temperature',
            'data': temperature
        }
    ],
    'xaxis':{
        'categories':['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun' ]
    }
}

const divChart =document.querySelector('#line-chart');


const lineChart = new ApexCharts(divChart,lineChartOptions)
lineChart.render();