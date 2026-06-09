import { AppConfig } from '@/configuration/schemes/appConfig.schema';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';

export class RootConfig {
  @IsDefined({
    message: 'The root application configuration is missing or empty',
  })
  @ValidateNested()
  @Type(() => AppConfig)
  app!: AppConfig;
}
