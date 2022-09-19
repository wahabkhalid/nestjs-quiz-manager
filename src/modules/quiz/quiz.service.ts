/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Quiz } from "./quiz.entity";
import { QuizRepository } from "./quiz.repository";






@Injectable()

export class QuizService{


    constructor(
        @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
      ) {}


    getAllQuiz(){
        return [1,2,3,4,'from the service']
    }

    async getQuizById(id:number):Promise<Quiz>{
        return await this.quizRepository.findOne(id,{relations:['questions']});
    }

    quizData()
    {
        return  

    }


    async createNewQuiz(quiz: CreateQuizDto) {
        console.log(this.quizRepository)
        return await this.quizRepository.save(quiz);
      }
}