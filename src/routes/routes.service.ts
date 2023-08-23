import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prismaService: PrismaService) {}

  async create(createRouteDto: CreateRouteDto) {
    return this.prismaService.route.create({
      data: {
        name: createRouteDto.name,
        source: {
          name: 'Origem',
          location: {
            lat: 0,
            lng: 0,
          },
        },
        destination: {
          name: 'Destination',
          location: {
            lat: 0,
            lng: 0,
          },
        },
        distance: 0,
        duration: 0,
        directions: '{}',
      },
    });
  }

  findAll() {
    return this.prismaService.route.findMany();
  }
}
