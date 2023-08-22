import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesDriverService {
  constructor(private prismaService: PrismaService) {}

  createOrUpdate(dto: { route_id: string; lat: number; lng: number }) {
    return this.prismaService.routeDriver.upsert({
      include: {
        route: true,
      },
      where: {
        route_id: dto.route_id,
      },
      update: {
        route_id: dto.route_id,
        points: {
          set: {
            location: {
              lat: dto.lat,
              lng: dto.lng,
            },
          },
        },
      },
      create: {
        route_id: dto.route_id,
        points: {
          set: {
            location: {
              lat: dto.lat,
              lng: dto.lng,
            },
          },
        },
      },
    });
  }
}