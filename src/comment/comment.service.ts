import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(CommentRepository)
        private commentRepository: CommentRepository,
    ) { }

    public async createComment(
        createCommentDto: CreateCommentDTO,
    ): Promise<Comment> {
        return await this.commentRepository.CreateOrEditditComment(createCommentDto);
    }


    public async getComments(): Promise<Comment[]> {
        //TODO get all comments from server and save to DB

        //return comments from DB
        return await this.commentRepository.find();
    }
}