import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforma automaticamente os tipos
      whitelist: true, // Remove propriedades extras
      forbidNonWhitelisted: true, // Retorna erro se houver propriedades não listadas
    }),
  );
  await app.listen(3000);
}
bootstrap();

