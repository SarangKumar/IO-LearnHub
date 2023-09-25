const weight = document.getElementById('weight');
const height = document.getElementById('height');
const result  = document.getElementById('result')


function handleSubmit(){
    console.log('Form has been submitted')
    console.log(weight.value)
    console.log(height.value)

    let w = parseFloat(weight.value);
    let h = parseFloat(height.value);

    const bmi = w/(h*h)
    // console.log(typeof weight.value)
    result.textContent=bmi
}

