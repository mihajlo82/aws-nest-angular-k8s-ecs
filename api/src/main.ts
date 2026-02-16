import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   app.enableCors({
    origin: 'http://localhost:4200', // allow Angular frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // if you need cookies/auth
  });

  
  await app.listen(3000);
}
bootstrap();
