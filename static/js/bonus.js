function buildGauge(wfreq) {
    // enter washing frequency between 0 and 180
    let level = parseFloat(wfreq) * 20;

    // calculate meter point
    let degrees = 180 - level;
    let radius = 0.5;
    let radians = (degrees * Math.PI) / 180;
    let x = radius * Math.cos(radians);
    let y = radius * Math.sin(radians);

    let mainPath = 'M-.0 -0.05 L  .0 0.05 L';
    let pathX = String(x);
    let space = " ";
    let pathY = String(y);
    let pathEnd = " Z";
    let path = mainPath.concat(pathX, space, pathY, pathEnd);

    let data = [
        {
            type: 'scatter',
            x: [0],
            y: [0],
            marker: {size: 12, color: "850000"},
            showlegend: false,
            text: level,
            hoverinfo: 'text+name'
        },
        {
            values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
            rotation: 90,
            text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''], 
            textinfo: 'text',
            textposition: 'inside',
            marker: {},
            labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
            hoverinfo: 'label',
            hole: 0.5,
            type: 'pie',
            showlegend: false
        }
    ]

    let layout = {
        shapes: [
            {
                type: 'path',
                path: path,
                fillcolor: '850000',
                line: {
                    color: '850000'
                }
            }
        ],
        title: "Belly Button Washing Frequency <br> Scrubs per Week",
        height: 500,
        width: 500,
        xaxis:{
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        }
    }

    let GAUGE = document.getElementById('gauge');
    Plotly.newPlot(GAUGE, data, layout);
}
