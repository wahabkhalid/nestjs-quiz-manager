/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "./dto/createQuestion.dto";
import {Question} from './question.entity';
import {Quiz} from './quiz.entity';


@Injectable()

export class QuestionService{

    constructor(@InjectRepository(Question) private questionRepository:Repository<Question>){}



    async createQuestion(question: CreateQuestionDto,quiz:Quiz):Promise<Question>{

        const newQuestion = await this.questionRepository.save({
            question: question.question,
        });
        quiz.questions =    [...quiz.questions,newQuestion];
        await quiz.save();

        return newQuestion;
        //console.log(this.questionRepository)
       //return await this.questionRepository.save(question);
    }
}