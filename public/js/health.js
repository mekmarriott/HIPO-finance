var transaction_history_data = [["10 Sep 2014","26 Sep 2014","4 Oct 2014","12 Oct 2014","23 Oct 2014","29 Oct 2014","6 Nov 2014","15 Nov 2014","27 Nov 2014","4 Dec 2014","11 Dec 2014","17 Dec 2014","24 Dec 2014","30 Dec 2014","4 Jan 2015","10 Jan 2015","16 Jan 2015","26 Jan 2015","1 Feb 2015","8 Feb 2015","15 Feb 2015","24 Feb 2015","1 Mar 2015","6 Mar 2015"],[920,956.33,920,962.85,986.75,920,990.13,905.92,1860.15,910.92,800,978.88,969.05,994.37,931.07,992.86,905.47,848.05,980,980,904.04,996.79,953.25,994.89]]

var weight_history_data = [["2 Jan 2014","3 Jan 2014","8 Jan 2014","13 Jan 2014","17 Jan 2014","21 Jan 2014","24 Jan 2014","28 Jan 2014","2 Feb 2014","7 Feb 2014","11 Feb 2014","19 Feb 2014","21 Feb 2014","24 Feb 2014","27 Feb 2014","1 Mar 2014","4 Mar 2014","6 Mar 2014","9 Mar 2014","13 Mar 2014"],[69.83,69.96,70.19,70.02,69.69,69.67,69.61,69.56,69.51,69.66,69.69,69.71,69.77,69.8,69.81,69.73,69.61,69.57,69.67,69.48]]

var pie_data = [{"value":1074.48,"color":"#F7464A ","highlight":"#FF5A5E ","label":"Small Transactions"},{"value":3377.02,"color":"#46BFBD ","highlight":"#5AD3D1 ","label":"Medium Transactions"},{"value":2051.22,"color":"#FDB45C ","highlight":"#FFC870 ","label":"Large Transaction"},{"value":5185.74,"color":"#551A8B ","highlight":"#b19cd9 ","label":"Very Large Transaction"}]

var weeklyPattern = [["Sun","Mon","Tues","Wed","Thur","Fri","Sat"],[964.9,2704.88,0,1322.05,0,3896.2,1067.07],[853.42,1053,100,932.55,302,2593,1203.32]] 

var finance_data = {
   labels: weeklyPattern[0],
   datasets: [
       {
           label: "Weekly Spending Breakdown",
           fillColor: "rgba(220,220,220,0.5)",
           strokeColor: "rgba(220,220,220,0.8)",
           highlightFill: "rgba(220,220,220,0.75)",
           highlightStroke: "rgba(220,220,220,1)",
           data: weeklyPattern[1]
       },
       {
           label: "Current Week's Spending",
           fillColor: "rgba(151,187,205,0.5)",
           strokeColor: "rgba(151,187,205,0.8)",
           highlightFill: "rgba(151,187,205,0.75)",
           highlightStroke: "rgba(151,187,205,1)",
           data: weeklyPattern[2]
       }
   ]
};

var CI = [["0 months", "3 months", "6 months", "12 months", "24 months", "48 months", "96 months", "120 months", "240 months", "360 months"], [1000, 1259, 1866, 2966, 6394, 19740, 34532, 70424, 112052, 159971.67], [1000, 1300, 1600, 2200, 3400, 5800, 10600, 13000, 25000, 37000]]
var compound_interest_data = {
   labels: CI[0],
   datasets: [
       {
           label: "My First dataset",
           fillColor: "rgba(220,220,220,0.2)",
           strokeColor: "rgba(220,220,220,1)",
           pointColor: "rgba(220,220,220,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(220,220,220,1)",
           data: CI[1]
       },
       {
           label: "My Second dataset",
           fillColor: "rgba(151,187,205,0.2)",
           strokeColor: "rgba(151,187,205,1)",
           pointColor: "rgba(151,187,205,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(151,187,205,1)",
           data: CI[2]
       }
   ]
};