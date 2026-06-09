import { AppConfig } from '@/configuration/schemes/appConfig.schema';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class RootConfig {
  @ValidateNested()
  @Type(() => AppConfig)
  app!: AppConfig;
}
