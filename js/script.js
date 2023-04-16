ranger1.value = 500;
let ranger1_value = ranger1.value;
setInterval(() => {
    display1.innerText = ranger1.value;
})

ranger2.value = 0;
let ranger2_value = ranger2.value;
setInterval(() => {
    display2.innerText = ranger2.value;
})
ranger3.value = 5;
let ranger3_value = ranger3.value;
setInterval(() => {
    display3.innerText = ranger3.value;
})


setInterval(() => {
    display4.innerText = (ranger3.value) * 67;
})

