import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article)private articleRepo: Repository<Article>){}


  async create(createArticleDto: CreateArticleDto) {
    const created =  await this.articleRepo.save(createArticleDto);
    return created;
  }

  findAll() {
    return this.articleRepo.find();
  }

  findOne(id: number) {
    return this.articleRepo.findOneBy({id});
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const existingArticle = await this.articleRepo.findOneBy({id:id});
    existingArticle.title = updateArticleDto.title
    existingArticle.body = updateArticleDto.body
    const update = this.articleRepo.save(existingArticle)
    return existingArticle
  }

  remove(id: number) {
    const deletedArticle = this.articleRepo.delete(id);
    return ` removes article with id:#${id} from the database >>{}`
  }

  
}
