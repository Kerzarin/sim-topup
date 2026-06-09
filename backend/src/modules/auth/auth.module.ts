import { AuthService } from '@/modules/auth/services/auth.service';
import { JwtTokensService } from '@/modules/auth/services/jwtTokens.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [AuthService, JwtTokensService],
  exports: [AuthService],
})
export class AuthModule {}
