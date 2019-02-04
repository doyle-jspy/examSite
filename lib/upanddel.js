const upAndDel = (data) =>{
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>admin</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <style>
        input{
            border:none;
        }
        </style>
        <link rel="shortcut icon" href="/favicon.ico">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="jumbotron">
                        <a href="/admin"><h1 class="display-3">ADMIN!</h1></a>
                        <p class="lead">타이틀</p>
                        <hr class="my-4">
                        <div class="row">
                            <div class="col-3 offset-3">
                                <form action="/admin/update" method="post">
                                    <h2>수정</h2>
                                    <p>시험 구분
                                        <select id="OneSelect" name="id">
                                            <option value="경찰행정">경찰행정</option>
                                            <option value="검찰직">검찰직</option>
                                            <option value="회계세무">회계세무</option>
                                        </select>
                                    </p>
                                    <p>시험 과목
                                        <!-- 이중 Select 예정 -->
                                        <select id="TwoSelect" name="subject">
                                        </select>
                                    </p>
                                    <input type="hidden" name="no" value=${data.no}>
                                    <p>출제 일자 <input type="date" name="date" value=${data[0].date}></p>
                                    <p>출제 일자 <input type="text" name="order" value=${data[0].order}></p>
                                    <p>문제 번호 <input type="number" name="number" min="1" max="40" value=${data[0].number}></p>
                                    <p>문제 본문 </p>
                                    <textarea name="example" id="" cols="30" rows="10">${data[0].example}</textarea>
                                    <p>보기 항목 <input type="text" name="choice1" placeholder="1번" value="${data[0].choice1}" /></p>
                                    <p>보기 항목  <input type="text" name="choice2" placeholder="2번" value="${data[0].choice2}" /></p>
                                    <p>보기 항목  <input type="text" name="choice3" placeholder="3번" value="${data[0].choice3}" /></p>
                                    <p>보기 항목  <input type="text" name="choice4" placeholder="4번" value="${data[0].choice4}" /></p>
                                    <p>정답 번호 <input type="text" name="answer" placeholder="4번" value="${data[0].answer}" /> </p>
                                    <p>해설</p>
                                    <p><textarea cols="30" rows="10" name="commentary">${data[0].commentary}</textarea></p>
                                    <p class="lead">
                                            <input class="btn btn-primary btn-lg" type="submit" value="수정">
                                    </p>
                                </form>
                            </div>
                            </div>
    
                            <style>
                            table{
                                font-family: arial, sans-serif;
                                border-collapse: collapse;
                                width: 100%;
                                }
                            td, th{
                                border: 1px solid #dddddd;
                                text-align: left;
                                padding: 2px;
                                text-align: center;
                                }
                            </style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="/process.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

module.exports = upAndDel;