import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  /* @HttpCode(200) // 200 is the default. This decorator allows customization*/
  findAll(): string {
    return 'This action returns all cats';
  }

  /* 
  The method below shows how to use custom express responses with @Res() response
  parameter. The passthrough tells nest to use the express response object
  without disabling the nestjs response object as the default for the remainder
  of this route.
  */
  @Get('breedsv0')
  findAll2(@Res({ passthrough: true }) response: Response): Response {
    return response.status(200).send('Siamese cat');
  }
}
