import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";


enum QuestionTypePatterns {
    
    GET_QCU_QUESTION='GET_QCU_QUESTION'
}

export class ExamClass  {
    questionList=[]
    constructor(private title:string,private category:string,private language:string,private totaNumberOfQuestion:number,private requirements:Array<any>){
        this.title=title;
        this.category=category;
        this.language=language;
        this.totaNumberOfQuestion=totaNumberOfQuestion;
        this.requirements=requirements;

    }
    get getRequirments():Array<any>{
        return this.requirements;
    }
    
    appendQuestionList(questionList:Array<any>){
        this.questionList.push(questionList)
    }
    get getQuestionList():Array<any>{
        return this.questionList
    }
}


export class QCM implements FetchQuestion{
   
    constructor(private numberOfQuestion:number,private tag:string,private questionClient:ClientProxy){
       this.numberOfQuestion=numberOfQuestion;
       this.tag=tag;
       this.questionClient=questionClient;
    }
    questionList: any[];
    getQuestions(numberOfQuestion: number=this.numberOfQuestion, tag: string) {
        this.questionList=[4,5,6];
        
        return this.questionList;
    }
}

export class QCU implements FetchQuestion{
    constructor(private numberOfQuestion:number,private tag:string,private questionClient:ClientProxy){
        this.numberOfQuestion=numberOfQuestion;
        this.tag=tag;
        this.questionClient=questionClient
    }
    questionList: any[];
    getQuestions(numberOfQuestion: number=this.numberOfQuestion, tag: string=this.tag) {
        this.questionList=[1,2,3,4]
        
        this.questionClient.emit(QuestionTypePatterns.GET_QCU_QUESTION,{numberOfQuestion,tag});
        
        return this.questionList;
    }
}


interface FetchQuestion{
    questionList:Array<any>;
    getQuestions(numberOfQuestion:number,tag:string):Array<any>;
}

export enum QuestionType{
    QCM='QCM',
    QCU='QCU'
}