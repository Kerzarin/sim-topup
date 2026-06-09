import { ConfigurationService } from '@/configuration/services/configuration.service';
import { Global, Module } from '@nestjs/common';
@Global()
@Module({
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
