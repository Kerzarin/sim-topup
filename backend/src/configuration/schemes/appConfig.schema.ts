import { Expose, Type } from 'class-transformer';
import {
  IsEnum,
  IsFQDN,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export enum AppEnvironment {
  Development = 'development',
  Production = 'production',
  Testing = 'testing',
}

export class AppConfig {
  @Expose({ name: 'PORT' })
  @IsNumber({}, { message: 'The port must be a number' })
  @Min(1, { message: 'The port cannot be less than 1' })
  @Max(65535, { message: 'The port cannot be larger than 65535' })
  @Type(() => Number)
  port!: number;

  @Expose({ name: 'HOST' })
  @IsFQDN(
    { require_tld: false },
    { message: 'The host must be a valid domain or localhost.' },
  )
  host!: string;

  @Expose({ name: 'NODE_ENV' })
  @IsString({ message: 'The environment must be a string' })
  @IsEnum(AppEnvironment, {
    message: 'Allowed values for env: development, production, testing',
  })
  env!: AppEnvironment;

  @Expose({ name: 'APP_NAME' })
  @IsString({ message: 'The application name must be a string' })
  @IsNotEmpty({ message: 'The application name must not be empty' })
  appName!: string;
}
