import { AuthService } from '@/modules/auth/services/auth.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
