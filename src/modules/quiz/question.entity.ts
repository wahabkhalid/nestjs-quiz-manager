/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";

@Entity('quesions')
export class Question extends BaseEntity{

@PrimaryGeneratedColumn()

id: number;

@Column({
    type: 'varchar',

})
question:string;
    

@ManyToOne(()=>Quiz,(quiz)=> quiz.questions)

quiz: Quiz
}
