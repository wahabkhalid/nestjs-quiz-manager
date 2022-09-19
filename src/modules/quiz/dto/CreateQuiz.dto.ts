/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length } from "class-validator";
//import {ApiProperty} from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class CreateQuizDto{
    

    @IsNotEmpty({message:"The Quiz should have a title"})
    @Length(3,255)
    title : string;

    @IsNotEmpty()
    @Length(3)
    description: string;
}