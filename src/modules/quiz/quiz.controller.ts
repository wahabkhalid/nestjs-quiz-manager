/* eslint-disable prettier/prettier */
import { Body, Controller ,Get,  Param,  ParseIntPipe,  Post, UsePipes, ValidationPipe} from "@nestjs/common";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { QuizService } from "./quiz.service";
import { Quiz } from './quiz.entity';


@Controller('quiz')

export class QuizController{

    constructor(private quizService:QuizService){

    }
    @Get('/')

    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }

    @Get('/:id')

    async getQuizById(@Param('id',ParseIntPipe)id:number):Promise<Quiz>{
        return await this.quizService.getQuizById(id);
    }

    @Post('/create')
   // @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
        return await this.quizService.createNewQuiz(quizData);
      }
}