const indexmain = ()=>{
    return `
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>index</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="shortcut icon" href="/favicon.ico">
</head>
<body>
    <div class="container-fluid text-center">
        <div class="row mt-3  justify-content-center">
            <div class="col-10 ">
                <a href="/">
                    <img src="logo.png" alt="로고" width="100%"/>
                </a>
            </div>
        </div>
    </div>
    <div class="container-fluid text-center">
        <!-- div class="row mt-3">                
            <div class="col">
                <img src="./수갑아이콘.png" width="25%" />
                <a href="/linux">
                    리눅스마스터
                </a>
            </div>
        </div -->
        <div class="row mt-3">
            <div class="col-6 mt-3">
                <a href="/ComputerTaxation2">
                    <img src="/회계로고.png" width="50%" />
                </a>
                <h4 class="">회계</h4>
            </div>
            <div class="col-6 mt-3">
                <a class="pagination-lg" href="/police">
                    <img src="/경찰로고.png" width="50%" />                    
                </a>
                <h4 class="">경찰행정</h4>
            </div>
        </div>
        <!-- div class="row mt-3">
            <div class="col">
                <img src="./수갑아이콘.png" width="25%" />
                <a href="/prosecutor">
                    검찰 고시
                </a>
            </div>
        </div -->
    </div>
    <div class="container-fluid">
        <div class="row mt-3"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = indexmain()