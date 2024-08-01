function GetGraphProperties() {
    let name = document.getElementById("graphname").value.trim()

    return {name: name}
}

function GetPoints() {
    let x = document.getElementById("x").value.trim().split(",").map(Number); // Format and turn points into integers and array
    let y = document.getElementById("y").value.trim().split(",").map(Number); // Format and turn points into integers and array

    return {x: x, y: y};
}

function GetGradient(x, y) {
    let m = (x[1] - x[0])/(y[1] - y[0]);
    return m;
}

document.getElementById("plotgraph").addEventListener("click", function(){
    let points = GetPoints()
    let x = points.x
    let y = points.y

    let properties = GetGraphProperties()
    let name = properties.name

    let gradient = GetGradient(x, y)

    console.log(x,y)
    console.log(gradient)
    console.log(name)

    let data = {
        datasets: [{
          label: name,
          data: []
        }],
    };

    for (let i = 0; i < x.length; i++) {
        let template = {x: x[i], y: y[i]}
        data.datasets[0].data.push(template)
    }

    const graphctx = document.getElementById("graph").getContext("2d")
    const graph = new Chart(graphctx, {
        type: 'scatter',
        data: data,
        options: {
            responsive: true,
        }
    })
});