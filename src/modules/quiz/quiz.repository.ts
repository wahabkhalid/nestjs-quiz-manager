/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
//import { Injectable } from "@nestjs/common";
//import { InjectRepository } from "@nestjs/typeorm";
import {Repository,EntityRepository } from "typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Quiz } from './quiz.entity';

//import {Quiz} from'./quiz.entity';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {

}
