window.onload =()=>{
    const OneSelect = document.getElementById('OneSelect');
    const TwoSelect = document.getElementById('TwoSelect');
    let subExample = document.getElementById('subExample');
    if(subExample){
        subExample = subExample;
    }
    else{
        subExample = '';
    }
    OneSelect.addEventListener('click',()=>{
        if(OneSelect.value === '경찰행정'){
            TwoSelect.innerHTML=""
            console.log(OneSelect.value)
            subExample.innerText = OneSelect.value;
            let arrayData = ['한국사','영어','형법','형사소송법','경찰학개론','(특)수사','(특)행정법']
            for(let i=0; i<arrayData.length;i++){
                let options = document.createElement("option")
                options.innerText = arrayData[i]
                TwoSelect.appendChild(options)
            };
        }
        else if(OneSelect.value === '검찰직'){        
            TwoSelect.innerHTML=""
            subExample.innerText = OneSelect.value;
            let arrayData = ['검','검1','검2']
            for(let i=0; i<arrayData.length;i++){
                let options = document.createElement("option")
                options.innerText = arrayData[i]
                TwoSelect.appendChild(options)
            };
        }
        else if(OneSelect.value === '회계세무'){        
            TwoSelect.innerHTML=""
            subExample.innerText = OneSelect.value;
            let arrayData = ['전산회계2급실기','전산회계2급필기','전산회계1급실기','전산회계1급필기','전산세무2급실기','전산세무2급필기','전산세무1급실기','전산세무1급필기']
            for(let i=0; i<arrayData.length;i++){
                let options = document.createElement("option")
                options.innerText = arrayData[i]
                TwoSelect.appendChild(options)
            };
        }
    },true);
};
