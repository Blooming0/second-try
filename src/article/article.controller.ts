import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {faker} from '@faker-js/faker'
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);//the (+) convert this id from String to number
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
  
//   @Post('/fillUsers')
//   async fillUsers() {
//     const usersRepo = this.dataSource.getRepository('User');
//     const users = Array.from({ length: 1000 }, () => ({
//       name: faker.internet.userName(),
//       email: faker.internet.email(),
//     }));
//     await usersRepo.save(users);

//     return 'done';
//   }

//   @Post('/fillArticle')
//   async fillArticle() {
//     const articles = Array.from({ length: 1000 }, () => ({
//       title: faker.internet.userName(),
//       body: faker.internet.email(),
//     }));

//     await this.articleRepo.save(articles);

//     return 'done';
//   }
}
