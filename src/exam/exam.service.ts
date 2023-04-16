import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ExamClass, QCU, QuestionType } from './exam.class';

import { Exam, ExamDocument } from './exam.schema';

@Injectable()
export class ExamService {

constructor(@InjectModel(Exam.name) private examModel:Model<ExamDocument>,private _httpService:HttpService,@Inject('QUESTION_NODE') private questionClient:ClientProxy){

}
async create(createdExam:any){
    
    // createdExam.getRequirments.forEach((requirment:{type:string,numberOfQuestions:number,tag:string})=>{
    //     if(requirment.type==QuestionType.QCM){
    //         let QcuQuestions=new QCU(requirment.numberOfQuestions,requirment.tag,this.questionClient)
    //         createdExam.appendQuestionList(QcuQuestions.getQuestions());
    //     }
    // })
    console.log('ex ',createdExam)
    // const createdExamModel=new this.examModel(createdExam);
    // return createdExamModel.save()

}
}
