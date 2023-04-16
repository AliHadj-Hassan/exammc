import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamController } from './exam/exam.controller';
import {MongooseModule} from '@nestjs/mongoose'
import { Exam, ExamSchema } from './exam/exam.schema';
import { ExamService } from './exam/exam.service';
import { HttpModule } from '@nestjs/axios';
import {ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/exam'),
MongooseModule.forFeature([{name:Exam.name,schema:ExamSchema}]),
HttpModule,
ClientsModule.register([
  {
    name:'QUESTION_NODE',
    transport:Transport.RMQ,
    options:{
        urls:['amqp://admin:admin@127.0.0.1:15672'],
        queue:'question_queue',
        noAck: false,
        queueOptions: {
          durable: false,
        },
    }
  }
])
],
  controllers: [AppController, ExamController],
  providers: [AppService, ExamService],
})
export class AppModule {}
