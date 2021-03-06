window.addEventListener('DOMContentLoaded', async function(){
    // we can only call loadData if
    // the function is already in the global scope
    // it is in global scope if we include
    // data.js before chart.js (since the loadData
    // is in chart.js)
    let series = await loadData();
    // since chart is a global variable, we can use it
    // inside this function
    chart.updateSeries([{  // replace the old series of the chart with a new one
        'name': 'Sales',
        'data': series.yearly
    }])
})

document.querySelector("#btnLoad")
    .addEventListener('click', async function(){
        let data = await loadData();
        chart.updateSeries([{
            'name': 'Sales',
            'data': data.yearly2
        }])
    })

const options = {
    chart:{
        'type':'line',
        'height':'100%'
    },
    series:[
        // no data
    ],
    // what to display when there is no data
    noData: {
        text:"Loading..."
    }
}

// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();