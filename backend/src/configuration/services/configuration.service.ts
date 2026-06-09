import configFactory from '@/configuration/factories/config.factory';
import {
  AppConfig,
  AppEnvironment,
} from '@/configuration/schemes/appConfig.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  private readonly configInstance = configFactory();

  public get appConfig(): AppConfig {
    return this.configInstance.app;
  }

  public get IsDev(): boolean {
    return this.appConfig.env === AppEnvironment.Development;
  }
}
