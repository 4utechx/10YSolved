const mongoose = require("mongoose");

const SolvedPaperSchema = new mongoose.Schema({
    QuestionEnglish: {
        type: String,
        required: true
    },
    QuestionHindi: {
        type: String,
    },
    Option: {
        type : "object",
        A : {
            type: String,
        },
        B : {
            type: String,
        },
        C : {
            type: String,
        },
        D : {
            type: String,
        }
    },

    CorrectAnswer: {
        type: String,
    },
    Solutions: {
        type: String,
    },
    CreatedDate: {
        type: String,
    },
    Year: {
        type: String,
    },
    ExamType: {
        type: String,
    },
    ExamSubType: {
        type: String,
    }
})

const railwayCollection = new mongoose.model("railwayCollection",SolvedPaperSchema);
module.exports = railwayCollection;
    