const options = {
    'chart':{
        'type': 'line',
        'height': '100%'
    }, 
    'series':[
        {
            'name':'sightings',
            'data':[10,13,15,22,34,23,55,78,44]
        },
        {
            'name':'temperature',
            'data': [33, 21, 22, 24, 25, 26, 21, 31, 44]
        }
    ],
    xaxis:{
        'categories':['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct' ]
    }
}
const divChart =document.querySelector('#chart');
//create a new chart obj
//first arg of new ApexCharts() is the div where we have the chart
const chart = new ApexCharts();

chart.render();