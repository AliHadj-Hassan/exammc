import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, Ctx, EventPattern,MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ExamService } from './exam/exam.service';
import { Exam } from './exam/exam.schema';
import { ExamClass } from './exam/exam.class';
import { ExamDto } from './exam/exam.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private _examService:ExamService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @EventPattern('GET_BY_ID')
  async getExamById(data:Record<string,any>){
    console.log('Executing get exam by id ', data)
  }

  @EventPattern('GET_ALL')
  async getAllExams(data:Record<string,unknown>){
   console.log(data)
    // channelRef.ack('received')

  }
  @EventPattern('ADD_EXAM')
  async addExam(examConfig:any){
    
    const createdExam=new ExamClass(examConfig.title,examConfig.category,examConfig.language,examConfig.totaNumberOfQuestion,examConfig.requirements)

    this._examService.create(examConfig);



  }
}
