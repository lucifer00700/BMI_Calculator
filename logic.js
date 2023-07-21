const wDisplay = document.querySelector(`[w-data]`);
const wslider = document.querySelector(`[wSlider]`);

function weightSlider() {
    wslider.value = wval;
    wDisplay.innerText = wval;
    // for distributing the backgrounds
    const min =  wslider.min;
    const max = wslider.max;
    wslider.style.backgroundSize =((wval - min) * 100) / (max - min) + "% 100%";
}

let wval=50;
weightSlider();


wslider.addEventListener('input', (event) => {
    wval = event.target.value;
    weightSlider();
});

const hDisplay = document.querySelector(`[h-data]`);
const hslider = document.querySelector(`[hSlider]`);

function heightSlider() {
    hslider.value = hval;
    hDisplay.innerText = hval;
    // for distributing the backgrounds
    const min = hslider.min;
    const max = hslider.max;
    hslider.style.backgroundSize =((hval - min) * 100) / (max - min) + "% 100%";
}

let hval=170;
heightSlider();


hslider.addEventListener('input', (event) => {
    hval = event.target.value;
    heightSlider();
});

const op = document.querySelector(`[output]`);
const cmt = document.querySelector(`[comment]`);
function bmicalc() {
    let height = hval/100;
    height = height*height;
    let ans = wval/height;
    res = ans.toFixed(3);
    op.textContent = "Your BMI : " + res;

    if(res<18.500)
      cmt.textContent = "You are UNDERWEIGHT";
    else if(res>=18.500 && res <=24.900)
      cmt.textContent = "Your weight status is NORMAL";
    else if(res>=25.000 && res <= 29.900)
      cmt.textContent = "You are OVERWEIGHT";
    else
      cmt.textContent = "You are suffering from OBESITY";      
}


