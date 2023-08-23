import { Controller, Get, Post, Body } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { RouterSerializar } from './route.serializer';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  async findAll() {
    const routes = await this.routesService.findAll();
    return routes.map((route) => new RouterSerializar(route));
  }
}
