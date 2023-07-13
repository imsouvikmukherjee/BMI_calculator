const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector(".height").value);
    const weight = parseInt(document.querySelector(".weight").value);
   
    const result = document.querySelector("#result");
    let bmi;
    if(height === " " || height <= 0 || isNaN(height)){
        result.innerHTML = `Please provide a valid height : ${height}`;
        result.setAttribute("class","text-danger text-center my-4");
        form.reset()
       
    }else if(weight === " " || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid weight : ${weight}`;
        result.setAttribute("class","text-danger text-center my-4");
        form.reset()

    }else{
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = bmi;
        if(bmi < 18.6){
            result.innerHTML = `You are under weight (Not healthy) ${bmi}`;
            result.setAttribute("class","text-warning text-center my-4");
            form.reset()
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `You are healthy! Weight: ${bmi}`;
            result.setAttribute("class","text-success text-center my-4");
            form.reset()
    
        }else{
            result.innerHTML = `You are overweight (Not healthy) ${bmi}`;
            result.setAttribute("class","text-warning text-center my-4");
            form.reset()
        }
}

    
    
})