import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('test')
  test(@Res() res: Response) {
    res.status(HttpStatus.OK).json(['sss']);
  }
}
