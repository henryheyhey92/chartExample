// const campaigns = [3, 5, 1, 8, 4, 10];
// const reach = [5000, 17000, 2400, 25000, 14000, 15000];
// const categories = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun' ];

const chartOptions = {
    chart:{
        type:'line',
        height:'100%',
        group: 'campaign-reach-compare',
        id:'campaign' //nothing to do with html / css
    },
    series:[
        {
            'name' : 'Campaigns',
            'data' : campaigns
        },
        {
            'name' : 'Reach',
            'data' : reach
        }
    ],
    xaxis:{
        'categories': categories
    }
}

const campaignChart = new ApexCharts(document.querySelector('#chart'), chartOptions);
campaignChart.render();

const reachChartOptions = {
    'chart': {
        'type' : 'line',
        'height' : '100%',
        group: 'campaign-reach-compare',
        'id' : 'reach'
    },
    'series' :[
        {
            'name': 'reach',
            'data': reach
        }
    ],
    'xaxis' : {
        'categories' :categories
    },
    'yaxis' :{
        'labels': {
            'minWidth': 40
        }
    }
    
}

const reachChart = new ApexCharts(document.querySelector('#reachChart'), reachChartOptions);
reachChart.render();




