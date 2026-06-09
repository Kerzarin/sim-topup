import configFactory from '@/configuration/config.factory';
import { RootConfig } from '@/configuration/schemes';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configFactory],
      cache: true,
    }),
  ],
  providers: [
    {
      provide: RootConfig,
      useFactory: () => {
        return configFactory();
      },
    },
  ],
  exports: [RootConfig],
})
export class ConfigurationModule {}
