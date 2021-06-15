function time(nuo, iki) {
    for (let h = nuo; h < iki; h++) {
        for (let m = 0; m < 60; m += 15) {
            console.log(`${h}:${m}`);

        }
    }
}
time(1, 7);





// let times = []
//     , hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
//     , prop = null
//     , hour = null
//     , min = null;

// for (hour in hours) {
//     for (min = 0; min < 60; min += 15) {
//         times.push(hours[hour].slice(-2)) + ':' + (min.slice(-2));

//     }

// }
// console.log(times);
