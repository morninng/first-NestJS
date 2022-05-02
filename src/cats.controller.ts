import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'this is a cat';
  }

  @Get('test')
  test(@Res() res: Response) {
    res.status(HttpStatus.OK).json(['sss']);
  }
}
