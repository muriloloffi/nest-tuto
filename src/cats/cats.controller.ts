import { Controller, Get, HttpCode, Res } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200) /* 200 is the default. This decorator allows customization*/
  findAll(): object {
    return { data: 'This action returns all cats'};
  }

  @Get('breeds')
  findAll2(@Res() response): string {
    return response.status(200).send('Siamese cat');
  }
}
