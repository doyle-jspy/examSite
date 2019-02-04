const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const getDb = require('../getDb.json')
const conn = mysql.createConnection({
    host: getDb.host,
    user: getDb.user,
    password: getDb.password,
    database: getDb.database
});
conn.connect();

const adminPage = require('../lib/adminPage.js');
const upAndDelPage = require('../lib/upanddel.js');

router.get('/',(req,res)=>{
    const sql =`SELECT * FROM exam`;
    conn.query(sql, (err,result)=>{
        if(err){
            console.log(err);
            res.redirect('/');
        }
        else{
            // res.send(result[0].id);
            /* Admin Show **************************** */
            // no : 번호 : 1 : number
            // id : 시험구분 : '경찰행정' : String
            // subject : 시험과목 : '국사' : String
            // date : 출제일자 : '2019-01-01' : String
            // order : 차수 : '1차' : String
            // number : 문제번호 : 1 : number
            // example : 문제 본문 : '역사...' : String
            /* Admin Hidden *************************** */
            // choice1 : 보기 : '1. 무기징역' : String
            // choice2 : 보기 : '2. 3년 이하' : String
            // choice3 : 보기 : '3. 3년 이하' : String
            // choice4 : 보기 : '4. 3년 이하' : String
            // answer : 정답 : '4. 3년 이하' : String
            // commentary : 해설 : '역사는 .... ' : String
            /***************************************** */
            res.send(adminPage(result));
        }
    });
});
router.get('/update/:no',(req,res)=>{
    let data = req.params.no
    let sql = 'SELECT * FROM exam WHERE no=?';
    conn.query(sql,[data],(err,results)=>{
        if(err){ 
            console.log(err);
            res.redirect('/');
        }
        else{res.send(upAndDelPage(results));}
    });
});
router.post('/add',(req,res)=>{
    let sql = 'INSERT INTO exam VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    let inputData = req.body;
    let code = inputData.id[0]+inputData.subject[0]+inputData.date[0]+inputData.order[0]+inputData.number[0];
    conn.query(sql, [code, inputData.id, inputData.subject, inputData.date, inputData.order, inputData.number, inputData.example,inputData.choice1, inputData.choice2,inputData.choice3,inputData.choice4, inputData.answer, inputData.commentary],(err,row)=>{
        if(err){ 
            console.log(err);
            res.redirect('/');
        }
        else{res.redirect('/admin');}
    });
});
router.post('/update',(req,res)=>{
    let updateData = req.body;
    let delSql = 'DELETE FROM exam WHERE no = ?'
    conn.query(delSql, [updateData.no],(err,results)=>{
        if(err){
            console.log(err);
            res.redirect('/');    
        }
        else{
            let recode = updateData.id+updateData.subject+updateData.date+updateData.order+updateData.number+updateData.answer;
            let sql = 'INSERT INTO exam VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
            conn.query(sql, [recode, updateData.id, updateData.subject, updateData.date, updateData.order, updateData.number, updateData.example,updateData.choice1, updateData.choice2,updateData.choice3,updateData.choice4, updateData.answer, updateData.commentary],(err,row)=>{
                if(err){
                    console.log(err);
                    res.redirect('/');
                }
                else{res.redirect('/admin');}
            });
        }
    });
});
router.post('/delete',(req,res)=>{
    let delData = req.body;
    let delSql = 'DELETE FROM exam WHERE no = ?';
    conn.query(delSql, [delData.no],(err,results)=>{
        if(err){
            console.log(err);
            res.redirect('/');
        }
        else{res.redirect('/admin');}
    });
});

module.exports = router;