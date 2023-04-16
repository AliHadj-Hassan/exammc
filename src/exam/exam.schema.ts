import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import mongoose, {Document} from 'mongoose'

export type ExamDocument= Exam & Document;

@Schema()
export class Exam {
    @Prop()
    title:string;

    @Prop()
    category:string;

    @Prop()
    language:string;

    @Prop()
    totaNumberOfQuestion:number;

    @Prop()
    requirements:Array<any>

    @Prop()
    questionList:Array<any>;

   

    
}

export const ExamSchema = SchemaFactory.createForClass(Exam)