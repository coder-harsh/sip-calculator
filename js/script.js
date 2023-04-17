// principal 1
principl_1_inp.value = 500000;
setInterval(() => {
    principl_1.innerText = principl_1_inp.value;
})


// principal 2
principl_2_inp.value = 3500;
setInterval(() => {
    principl_2.innerText = principl_2_inp.value;
})

// risk

function risk_inp_fun() {

    if (risk_inp.value == 4) {
        risk.innerText = "Low";
    }
    else if (risk_inp.value > 4 && risk_inp.value < 8) {
        risk.innerText = "Low-to-Moderate";
    }
    else if (risk_inp.value >= 8 && risk_inp.value < 11) {
        risk.innerText = "Moderate";
    }
    else if (risk_inp.value >= 11 && risk_inp.value < 12) {
        risk.innerText = "Moderate High";
    }
    else if (risk_inp.value >= 12 && risk_inp.value < 19) {
        risk.innerText = "High";
    }
    else if (risk_inp.value == 19) {
        risk.innerText = "Very High";
    }
}

// time
time_inp.value = 5;
setInterval(() => {
    time.innerText = time_inp.value;
})



// solution
//sol_time
setInterval(() => {
    sol_time.innerText = (time_inp.value);
})
//sol_risk_inp
setInterval(() => {
    sol_risk_inp.innerText = (risk_inp.value);
})
//sol_principal_2
setInterval(() => {
    sol_principl_2.innerText = (principl_2_inp.value);
})

// comp_interest_1
setInterval(() => {
    comp_interest_1.innerText = principl_1_inp.value * (1 + 6 / 100) ** time_inp.value;
})
// comp_interest_2
setInterval(() => {
    comp_interest_2.innerText = principl_2_inp.value * (1 + risk_inp.value / 100) ** time_inp.value;
})

// sol_ci_diff
setInterval(() => {
    sol_ci_diff.innerText = (principl_1_inp.value * (1 + 6 / 100) ** time_inp.value) - (principl_2_inp.value * (1 + risk_inp.value / 100) ** time_inp.value);
})
