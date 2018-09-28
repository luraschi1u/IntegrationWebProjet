google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

        // Create the data table.
        var data1 = new google.visualization.arrayToDataTable([
            ['Mois',"Nombres de visites"],
            ['Janvier', 50],
            ['Février', 55],
            ['Mars', 45],
            ['Avril', 60],
            ['Mai', 40],
            ['Juin', 65],
            ['Juillet', 80],
            ['Août', 74],
            ['Septembre', 66]
        ]);

        // Set chart options
        var options1 = {
            title : 'Nombres de visites par mois',
        };

        // Instantiate and draw our chart, passing in some options.
        var chart1 = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
        chart1.draw(data1, options1);

        // Create the data table.
        var data2 = new google.visualization.arrayToDataTable([
            ['Navigateur',"Nombres d'utilisateurs"],
            ['IE', 3],
            ['Mozilla', 20],
            ['Chrome', 50],
            ['Safari', 30],
            ['Opera', 10]
        ]);

        // Set chart options
        var options2 = {
            title : 'Navigateurs utilisés',
        };

        // Instantiate and draw our chart, passing in some options.
        var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart2.draw(data2, options2);
    }

    $(window).resize(function(){
        drawChart();
    });