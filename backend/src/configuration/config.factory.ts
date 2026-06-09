import { RootConfig } from '@/configuration/schemes';
import { Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

const logger = new Logger('ConfigFactory');

export default (): RootConfig => {
  const configInstance = plainToInstance(RootConfig, process.env, {
    exposeDefaultValues: true,
    strategy: 'excludeAll',
  });

  const errors = validateSync(configInstance, { skipMissingProperties: false });

  if (errors.length > 0) {
    logger.error(`Error in configuration`);

    errors.forEach((error) => {
      if (error.constraints) {
        const errorMessages = Object.values(error.constraints).join(', ');
        logger.error(` - [${error.property}]: ${errorMessages}`);
      }

      if (error.children && error.children.length > 0) {
        error.children.forEach((childError) => {
          if (childError.constraints) {
            const childMessages = Object.values(childError.constraints).join(
              ', ',
            );
            logger.error(
              ` - [${error.property}.${childError.property}]: ${childMessages}`,
            );
          }
        });
      }
    });

    process.exit(1);
  }

  return configInstance;
};
