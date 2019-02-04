const admin = (data) =>{
    let dbData = '';
    for(let i=0;i<data.length;i++){
        if(!data[0]){
            dbData = ''
        }
        else{
            dbData += `
            <tr>
                <td>
                    <form action="/admin/update/${data[i].no}" method="get">
                        <input type="submit" value="수정"/>
                    </form>
                    <br>
                    <form action="/admin/delete" method="post">
                        <input type="hidden" name="no" value=${data[i].no} />
                        <input type="submit" value="삭제"/>
                    </form>
                </td>
                <td>${data[i].id}</td>
                <td>${data[i].subject}</td>
                <td>${data[i].date}</td>
                <td>${data[i].order}</td>
                <td>${data[i].number}</td>
                <td>${data[i].example.toString().slice(0,15)}</td>
            </tr>
            `
        }
    }
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
                    <h1 class="display-3">ADMIN!</h1>
                    <p class="lead">문제 및 해석입력 가이드</p>
                    <hr class="my-4">
                    <div class="row">
                        <div class="col-3">
                                <h2>예시</h2>
                                <p>시험 구분 : 경찰행정</p>
                                <p>시험 과목 : 형사법</p>
                                <p>년도 월 : 2018-09-01</p>
                                <p>차수 : 11차</p>
                                <p>문제번호 : 1</p>
                                <p>문제 본문(띄어쓰기, 줄바꿈 등 필수)</p>
                                <textarea name="" readOnly="true" id="noneTextArea" cols="30" rows="10" >1. 다음 유적이 형성된 시대에 대한 설명으로 가장 적절한 것은?
            봉산 지탑리
            서울 암사동
            양양 오산리
            부산 동삼동
                                </textarea>
                                <p>보기 : 1 ㄱ</p>
                                <p>보기 : 2 ㄴ</p>
                                <p>보기 : 3 ㄷ</p>
                                <p>보기 : 4 ㄹ</p>
                                <p>정답 : 1 ㄱ</p>
                                <p>해설 : 해설내용</p>
                        </div>
                        
                        
                        <div class="col-3">
                            <form action="/admin/add" method="post">
                                <h2>입력</h2>
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
                                <p>출제 일자 <input type="date" name="date"></p>
                                <p>출제 차수 <input type="text" name="order" placeholder="1차"></p>
                                <p>문제 번호 <input type="number" min="1" max="40" name="number"></p>
                                <p>문제 본문 </p>
                                <textarea id="" cols="30" rows="10" name="example"></textarea>
                                <p>보기 <input type="text" placeholder="1번" name="choice1"></p>
                                <p>보기 <input type="text" placeholder="2번" name="choice2"></p>
                                <p>보기 <input type="text" placeholder="3번" name="choice3"></p>
                                <p>보기 <input type="text" placeholder="4번" name="choice4"></p>
                                <p>정답 <input type="text" placeholder="정답(보기와 동일)" name="answer"></p>
                                <p>해설 </p>
                                <p><textarea cols="30" rows="10" name="commentary"></textarea></p>
                                <p class="lead">
                                    <input class="btn btn-primary btn-lg" type="submit" value="등록">
                                </p>
                            </form>
                        </div>
                        
                        <div class="col-6 scollBox">
                            <h2>문제들</h2>
                            <!-- 좌측카테고리에서 -->
                            <p id="subExample">경찰행정</p>
                            <table>
                                <tr>
                                    <th>링크</th>
                                    <th>구분</th>
                                    <th>과목</th>
                                    <th>일자</th>
                                    <th>차수</th>
                                    <th>번호</th>
                                    <th>본문일부</th>
                                </tr>
                                ${dbData}
                            </table>
                            <div class="row text-center">
                                <div class="col">
                                    <a href="">1</a>
                                    <a href="">2</a>
                                    <a href="">3</a>
                                    <a href="">4</a>
                                    <a href="">5</a>
                                </div>
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
    
    <script src="./process.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = admin;