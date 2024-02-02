import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  /* @HttpCode(200) // 200 is the default. This decorator allows customization*/
  findAll(): object {
    return { data: 'This action returns all cats' };
  }

  /* 
  The method below shows how to use custom express responses with @Res() response
  parameter. The passthrough tells nest to use the express response object
  without disabling the nestjs response object as the default for the remainder
  of this route.
  */
  @Get('breeds')
  findAll2(@Res({ passthrough: true }) response: Response): Response {
    return response.status(200).send('Siamese cat');
  }
}
