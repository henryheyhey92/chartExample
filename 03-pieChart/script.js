const options = {
    'chart':{
        'type': 'pie',
        'height': '100%'
    }, 
    series :[21, 23, 22, 44, 55],
    labels :['English', 'Mathematics', 'Chinese', 'Science', 'PE'],
    colors: ['#DB7F67', '#DBBEA1', '#A37B73', '#3F292B', '#D34F73']
}
const divChart =document.querySelector('#chart');
//create a new chart obj
//first arg of new ApexCharts() is the div where we have the chart
const chart = new ApexCharts(divChart, options);

chart.render();