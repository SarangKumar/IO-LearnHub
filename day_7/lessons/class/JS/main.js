// console.log('hello');

let height = document.querySelector('#height');
let weight = document.getElementById('weight');
let result = document.querySelector('.result');
// console.log(result)

function bmi_calc(h, w){
    return w / (h*h);
}

function handleClick(){
    
    // console.log(height)
    // console.log(height.value);
    // console.log(weight.value);
    // console.log(typeof weight.value)

    if (height.value==='' || weight.value===''){
        console.error('Give values');
        return;
    }
    let h_ = parseFloat(height.value); 
    let w_ = parseFloat(weight.value);
    
    let bmi = bmi_calc(h_, w_);
    console.log(bmi);

    result.textContent = bmi;

    // console.log('btn has been clicked')
}

console.log(bmi_calc(1,3))