import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { RoutesDriverService } from './routes-driver/routes-driver.service';

@Module({
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService],
})
export class RoutesModule {}
