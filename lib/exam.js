module.exports = (result)=>{
    const randomV = Math.floor(Math.random()*(result.length))
    return `
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>main</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
    <link rel="shortcut icon" href="/favicon.ico">
</head>
<body>
    <div class="container text-center">
        <div class="row mt-3">
            <div class="col-sm-4 text-left">
                <!-- a class="h5" onclick="history.back();">BACK</a -->
                <a style="color:black;" class="h5" href="/">HOME</a>
            </div>
        </div>
        <!-- div class="row justify-content-center mt-3">
            <div class="col-10">
                <img src="/logo.png" alt="로고"  width="100%" />
            </div>
        </div -->
        <div class="row mt-4 p-3" style="background-color:#ccc;">
            <div class="col-12" width="80vw" height="80vh">
                <textarea class="form-control bg-white" cols="50" rows="5" readOnly="true" style="resize: none">${result[randomV].example}</textarea>
            </div>
        </div>
    </div>
    <div class="container" id="selectSection">
        <div class="row">
            <div class="col-12 mt-3" id="number1">
                <p class="h5 number">${result[randomV].choice1}</p>
            </div>
            <div class="col-12 mt-3" id="number2">
                <p class="h5 number">${result[randomV].choice2}</p>
            </div>
            <div class="col-12 mt-3" id="number3">
                <p class="h5 number">${result[randomV].choice3}</p>
            </div>
            <div class="col-12 mt-3" id="number4">
                <p class="h5 number">${result[randomV].choice4}</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col mt-4" id="choiceBox">
                <h4 class="">선택 : </h4>
            </div>
            <div class="col-9 mt-4">
                <p id="selectNumber"></p>
            </div>
        </div>
        <div id="answerBox" class="row text-left mt-4 p-3" style="display:none;">
            <div class="col">
                <p id="answerCheck" class="text-white"></p>
                <p id="answer" class="text-white">${result[randomV].answer}</p>
                <textarea class="form-control bg-white" cols="50" rows="5" readOnly="true" style="resize: none">${result[randomV].commentary}</textarea>
            </div>    
        </div>
        <div class="row text-center mt-4 mb-5">
            <!-- div class="col-4" style="visibility:hidden">
                <button id="checkBtn1" type="button" class="btn btn-success"><h3>저장</h3></button>
            </div -->    
            <div class="col-4 offset-4">
                <a href="#answerBox" id="checkBtn" role="button" class="btn btn-success"><h3>확인</h3></a>
            </div>    
            <div class="col-4" style="visibility:hidden">
                <button id="checkBtn2" type="button" class="btn btn-success" onclick="location.reload(true);"><h3>다음</h3></button>
            </div>    
        </div>
    </div>

    <style>
    #selectSection>div>div:hover{
        color:red;
    }
    </style>
    <script>
    const selectSection = document.getElementById('selectSection');
    const selectNumber = document.getElementById('selectNumber');
    const number = document.getElementsByClassName('number');

    for(let i =0; i<number.length;i++){
        number[i].addEventListener('click',(e)=>{
            selectNumber.innerText = e.target.innerText
            choiceBox.style.backgroundColor = "#fff";    
        })
    }

    const checkBtn = document.getElementById('checkBtn');
    const answer = document.getElementById('answer');
    const choiceBox = document.getElementById('choiceBox');
    const answerBox = document.getElementById('answerBox');
    const checkBtn1 = document.getElementById('checkBtn1');
    const checkBtn2 = document.getElementById('checkBtn2');
    const answerCheck = document.getElementById('answerCheck');
    checkBtn.addEventListener('click',()=>{
        if(selectNumber.innerText !== ''){
            answerBox.style.display = 'block'
            answerCheck.innerText = ""
            if(answer.innerText === selectNumber.innerText){
                answerCheck.innerText = "정 답 : "
                answerBox.style.backgroundColor="green"
                //checkBtn1.style.visibility = 'visible';
                checkBtn2.style.visibility = 'visible';
            }
            else{
                answerCheck.innerText = "오 답 : "
                answerBox.style.backgroundColor="red"
            }
        }
        else{
            choiceBox.style.backgroundColor="red"
        }
    })
    </script>
    <amp-auto-ads type="adsense" data-ad-client="ca-pub-3097190294747532"></amp-auto-ads>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>
`
}