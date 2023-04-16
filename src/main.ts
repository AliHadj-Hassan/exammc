import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const cloud='mqps://cnbgswus:KqwjuTc8DFf2mmFGfY-uHy2JljgyEgoU@rat.rmq2.cloudamqp.com/cnbgswus'
  const local='amqp://admin:admin@localhost:5672'
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport:Transport.RMQ,
      options:{
      urls:[local],
      queue:'exam_queue',
      noAck:false,
      queueOptions: {
        durable: false,
        
      },

  }
    },
  );
  // const app2 = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport:Transport.TCP,
  //     options:{
  //       port:3005,
  //       host:"0.0.0.0"

  // }
  //   },
  // );
  // await app2.listen();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();

  
}
bootstrap();
