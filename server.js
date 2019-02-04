const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mysql = require('mysql');
const getDb = require('./getDb.json')

const app = express();

const conn = mysql.createConnection({
    host: getDb.host,
    user: getDb.user,
    password: getDb.password,
    database: getDb.database
});
conn.connect();

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'./lib')));
app.use(express.static(path.join(__dirname,'./views')));
app.use(express.static(path.join(__dirname,'./img')));

app.use(helmet())

const index = require('./lib/indexmain.js');
const main = require('./lib/main.js');
const examPage = require('./lib/exam.js');
const adminRouter = require('./routes/adminPage');
app.use('/admin', adminRouter)

// des  : Subject
// href : ID + Subject
const pathName = {
    ComputerTaxation2:{
        title  : '회계세무',
        color  : '#ccc',
        logo   : './회계로고.png', 
        des    : ['전산회계2급실기'          ,'전산회계2급필기'          ,'전산회계1급실기'          ,'전산회계1급실기'          ,'전산세무2급실기'          ,'전산세무2급필기'          ,'전산세무1급실기'          ,'전산세무1급필기'],
        href   : ['/회계세무/전산회계2급실기','/회계세무/전산회계2급필기','/회계세무/전산회계1급실기','/회계세무/전산회계1급필기','/회계세무/전산세무2급실기','/회계세무/전산세무2급필기','/회계세무/전산세무1급실기','/회계세무/전산세무1급필기'],
        imgSrc : ['./1전산회계2급실기.png'   ,'./2전산회계2급필기.png'   ,'./3전산회계1급실기.png'   ,'./4전산회계1급필기.png'   ,'./5전산세무2급실기.png'   ,'./6전산세무2급필기.png'   ,'./7전산세무1급실기.png'  ,'./8전산세무1급필기.png'],
    },
    police:{
        title  : '경찰행정',
        color  : '#8585c6',
        logo   : './경찰로고.png',
        des    : ['한국사','영어','형법','형사소송법','경찰학개론','국어','수학','사회','과학','수사','행정법'],
        href   : ['/경찰행정/한국사','/경찰행정/영어','/경찰행정/형법','/경찰행정/형사소송법','/경찰행정/경찰학개론','/경찰행정/국어','/경찰행정/수학','/경찰행정/사회','/경찰행정/과학','/경찰행정/수사','/경찰행정/행정법'],
        imgSrc : ['./1한국사.png'   ,'./2영어.png'   ,'./3형법.png'   ,'./4형사소송법.png'   ,'./5경찰학개론.png'   ,'./6국어.png'    ,'./7수학.png'  ,'./8사회.png'   ,'./9과학.png'   ,'./10수사.png'  ,'./11행정법.png'],        
    },
    prosecutor:{
        title  :'검찰',
        color  : '#8585c6',
        logo   : './경찰로고.png',
        des    : ['국사','영어','검찰법','검찰','검찰학'],
        href   : ['/police/korea','/police/eng','/police/low','/police/low2','/police/police'],
        imgSrc : ['./국사아이콘.png','./영어아이콘.png','./국사아이콘.png','./영어아이콘.png','./국사아이콘.png'],
    },
    linux:{
        title  : '리눅스 마스터 1급',
        color  : '#8585c6',
        logo   : './경찰로고.png',
        des    : ['국사','영어','검찰법','검찰','검찰학'],
        href   : ['/police/korea','/police/eng','/police/low','/police/low2','/police/police'],
        imgSrc : ['./국사아이콘.png','./영어아이콘.png','./국사아이콘.png','./영어아이콘.png','./국사아이콘.png'],
    },
};

app.get('/',(req,res)=>{
    res.send(index)
});
// app.get('/contents',(req,res)=>{
//     res.send(examData);
// })
app.get('/:catagory',(req,res)=>{
    const catagory = req.params.catagory
    let getTarget = pathName[catagory]
    if(!getTarget){res.redirect('/')}
    else{
        let data = {
            title  : getTarget.title,
            color  : getTarget.color,
            logo   : getTarget.logo,
            des    : getTarget.des,
            href   : getTarget.href,
            imgSrc : getTarget.imgSrc,
        }
        res.send(main(data))
    }
});
app.get('/:catagory/:parameter',(req,res)=>{
    let catagory = req.params.catagory;
    let parameter = req.params.parameter;
    let sql = 'SELECT * FROM exam WHERE id=? AND subject=?'
    conn.query(sql,[catagory,parameter],(err,result)=>{
        if(err){
            console.log(err);
            res.redirect(`/${catagory}`);
        }
        else{
            if(result.length === 0){
                res.send('없음')
            }
            else{
                res.send(examPage(result))
            }
        }
    });
});

app.use('*',(req,res)=>{
    res.send(404, '불가능')
})
app.listen(process.env.PORT || 55555,()=>{
    console.log(`port NUM : ${process.env.PORT || 55555}`)
});