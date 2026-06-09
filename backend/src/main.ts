import 'reflect-metadata';

import { ConfigurationService } from '@/configuration/services/configuration.service';
import { AppModule } from '@/modules/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigurationService);

  const logger = new Logger(bootstrap.name);
  await app.listen(config.appConfig.port, () => {
    logger.log(
      `Application ${config.appConfig.appName} successfully started on http://${config.appConfig.host}:${config.appConfig.port}`,
    );
  });
}
bootstrap();
