// data:{
//     title:'검찰',
//     des : ['국사','영어','검찰법','검찰','검찰학']
// }

const main = (data)=>{
    let des = String( ); 
    for(let i=0;i<data.des.length;i++){
        des += `<div class="col-5 text-center m-2" style="border-radius: 25px; background-color:#fff">
                    <a href="${data.href[i]}">
                        <img src="${data.imgSrc[i]}" width="100%" />
                        <p style="width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;font-weight:800; font-size:1.2rem; color:#222831;">${data.des[i]}</p>
                    </a>
                </div>`;
    }
    return `
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>main</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="shortcut icon" href="/favicon.ico">
</head>
<body>
    <div class="container-fluid text-center">
        <div class="row justify-content-center mt-3">
            <div class="col text-left">
                <a href="/"><h5>HOME</h5></a>
            </div>
        </div>
        <div class="row justify-content-center mt-3" style="background-color:${data.color}">
            <div class="col-10">
                <img src=${data.logo} alt="로고"  width="50%" />
            </div>
        </div>
        <!-- div class="row justify-content-center mt-3">
            <div class="col">
                <h5 class="">${data.title} 기출문제
                    <small class="text-muted">랜덤</small>
                </h5>
            </div>
        </div -->
    </div>

    <div class="container-fluid text-center" >
        <div class="row justify-content-center">
            ${des}
        </div>
    </div>

    <!-- div class="container text-center">
        <div class="row mt-3">
            <div class="col-4 offset-4">
                오답노트
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-4 offset-4">
                해설강의
            </div>
        </div>
    </div -->
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = main;