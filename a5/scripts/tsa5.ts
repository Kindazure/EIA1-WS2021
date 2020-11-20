var list: number[][] = [
    [2008, 1028.0, 1132.6, 4965.7, 6600.4, 12954.7, 1993.0],
    [2009, 1041.9, 1093.1, 4616.4, 6139.9, 13246.6, 1875.7],
    [2010, 1072.1, 1164.2, 4705.8, 6375.8, 13986.8, 1939.1],
    [2011, 1073.7, 1215.5, 4615.2, 6262.8, 14860.1, 2035.2],
    [2012, 1107.1, 1262.0, 4541.5, 5998.9, 15308.8, 2063.2],
    [2013, 1134.4, 1308.9, 4436.9, 6167.0, 15660.2, 2014.7],
    [2014, 1167.1, 1331.3, 4202.0, 6268.9, 15787.7, 2027.6],
    [2015, 1174.5, 1321.7, 4191.6, 6048.7, 15877.0, 1986.8],
    [2016, 1192.1, 1294.7, 4247.3, 5938.3, 15984.0, 1997.4],
    [2017, 1207.0, 1279.2, 4278.7, 5920.5, 16274.3, 2001.3],
    [2018, 1235.5, 1261.5, 4209.3, 6035.6, 16274.1, 2100.5]
];
var column:string[] = ["Year","Africa","South America","Europe","North America","Asia","Australia"];

for (var col = 1; col < list[0].length; col++){
    console.log(column[col]+": ");
    for (var row = 0; row < list.length; row++) {
        console.log("   The emission of " + column[col] + " in " + list[row][0] + " is " + list[row][col] + "kg CO2.");
        console.log("   Relative to the total emission worldwide, " + column[col] + " caused " + percentage(row,col).toFixed(2) +"%.");
    }
    var yearstart = list[0][col];
    var yearend = list[list.length-1][col];
    console.log("   From 2008 to 2018 " + column[col] + "'s emission increased by " + ((yearstart-yearend)/yearstart*-100).toFixed(2) + "%.");
    console.log("   In comparison to 2008 there is " + (yearend-yearstart).toFixed(2) + "kg more CO2 in " + column[col] + " than in 2018.");
    console.log("\n");
}

function percentage(row,col){
    var out:number = 0;
    for (var i = 1; i < list[row].length; i++){
        out = out + list[row][i];
    }
    return list[row][col]/out*100;
}