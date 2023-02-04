
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
        progressEndValue = 85,
        speed = 20;
        setTimeout(() => {
        
        
            let progress = setInterval(() => {
                if(window.scrollY > 700){
                progressStartValue++;
                progressValue.textContent = `${progressStartValue}%`
                circularProgress.style.background = `conic-gradient(#264de4 ${progressStartValue * 3.6}deg, transparent 0deg)`
                if(progressStartValue == progressEndValue){
                    clearInterval(progress)
        }
    }
            }, speed);

        }, 1000);
        

    
    

let circularProgress2 = document.querySelector(".circular-progress-2"),
    progressValue2 = document.querySelector(".progress-value-2");


    let progressStartValue2 = 0,
        progressEndValue2 = 60,
        speed2 = 20;
        setTimeout(() => {
            
        let progress2 = setInterval(() => {
            if(window.scrollY > 700){

            progressStartValue2++;
            progressValue2.textContent = `${progressStartValue2}%`
            circularProgress2.style.background = `conic-gradient(#f7df1e ${progressStartValue2 * 3.6}deg, transparent 0deg)`
            if(progressStartValue2 == progressEndValue2){
                clearInterval(progress2)
            }
        }
        }, speed2);
    }, 2000);

let circularProgress3 = document.querySelector(".circular-progress-3"),
    progressValue3 = document.querySelector(".progress-value-3");


    let progressStartValue3 = 0,
        progressEndValue3 = 75,
        speed3 = 20;
setTimeout(() => {
    
        let progress3 = setInterval(() => {
            if(window.scrollY > 700){

            progressStartValue3++;
            progressValue3.textContent = `${progressStartValue3}%`
            circularProgress3.style.background = `conic-gradient(#95bf47 ${progressStartValue3 * 3.6}deg, transparent 0deg)`
            if(progressStartValue3 == progressEndValue3){
                clearInterval(progress3)
            }
        }
        }, speed3);
}, 3000);

let circularProgress4 = document.querySelector(".circular-progress-4"),
    progressValue4 = document.querySelector(".progress-value-4");


    let progressStartValue4 = 0,
        progressEndValue4 = 55,
        speed4 = 20;
setTimeout(() => {
        
        let progress4 = setInterval(() => {
            if(window.scrollY > 700){

            progressStartValue4++;
            progressValue4.textContent = `${progressStartValue4}%`
            circularProgress4.style.background = `conic-gradient(#1b769c ${progressStartValue4 * 3.6}deg, transparent 0deg)`
            if(progressStartValue4 == progressEndValue4){
                clearInterval(progress4)
            }
        }
        }, speed4);
}, 4000);
