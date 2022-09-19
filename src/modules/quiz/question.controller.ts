/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Body, Controller ,Get,  Post, UsePipes, ValidationPipe} from "@nestjs/common";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { QuizService } from "./quiz.service";
import { Quiz } from './quiz.entity';
import { CreateQuestionDto } from "./dto/createQuestion.dto";
import { QuestionService } from "./question.service";
import { Question } from "./question.entity";

@Controller('question')


export class QuestionController{

    constructor(private questionService :QuestionService,private quizService:QuizService){}
    @Post('')

    @UsePipes(ValidationPipe)

   async saveQuestion(@Body() question:CreateQuestionDto):Promise <Question>

    {
        const quiz = await this.quizService.getQuizById(question.quizId);
        return  await this.questionService.createQuestion(question, quiz);
        
    }
}