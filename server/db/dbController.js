const railwayCollection = require("../models/model");
const postrailwayData = async (req, res)=>{
    const railQuestion = new railwayCollection({
       QuestionEnglish : req.body.QuestionEnglish,
       QuestionHindi : req.body.QuestionHindi,
       Option: 
            {
               A: req.body.A,
               B: req.body.B,
               C: req.body.C,
               D: req.body.D,
            },
       CorrectAnswer : req.body.CorrectAnswer,
       Solutions : req.body.Solutions,
       CreatedDate : new Date().toLocaleDateString(),
       Year : req.body.Year,
       ExamType: req.body.ExamType,
       ExamSubType : req.body.ExamSubType,
    });
    const postData = await railQuestion.save();
    if(postData){
    res.status(200).send(postData);
    }else{
     res.status(400).send("Error in saving data to database");
    }
 }


 const getrailwayData = async (req, res) => {
    try {
      const railQuestions = await railwayCollection
        .find({})
       res.send({
        success: true,
        countTotal: railQuestions.length,
        railQuestions
      });
  
    } 
    catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
      }
      );
    }
  }

 module.exports = {
    postrailwayData,
    getrailwayData
 }