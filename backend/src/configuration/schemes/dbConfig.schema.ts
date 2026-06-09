import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class DbConfig {
  @Expose({ name: 'PG_URL' })
  @IsString({ message: 'The PG_URL must be a string' })
  @IsNotEmpty({ message: 'The PG_URL must not be empty' })
  @IsUrl(
    {
      protocols: ['postgresql', 'postgres'],
      require_tld: false,
      require_protocol: true,
    },
    {
      message:
        'The PG_URL must be a valid PostgreSQL connection string (e.g., postgresql://user:pass@localhost:5432/db)',
    },
  )
  pgUrl!: string;
}
