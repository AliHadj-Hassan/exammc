import { Body, Controller, Get, Post, Req, Res  } from '@nestjs/common';
import {Request, Response} from 'express'
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
constructor(private _examService:ExamService){
    
}

@Get()
getExam()
{
    return 'get Exam';
}

// @Get('question')
// getQuestion(@Req() req:Request,@Res() res:Response){
//     return this._examService.findQuestion().subscribe({next:(question:any)=>{
//         // console.log('question are ',question)
//         return res.send(question.data)
//     }})
// }

@Post()
createExam(@Req() req:Request){
    console.log(req.body)
    return this._examService.create(req.body);
}

}
