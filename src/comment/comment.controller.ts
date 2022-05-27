import {
    Controller,
    Post,
    Body,
    Get,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { Comment } from './comment.entity';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @Post('create')
    public async createComment(
        @Body() createCommentDto: CreateCommentDTO,
    ): Promise<Comment> {
        const comment = await this.commentService.createComment(createCommentDto);
        return comment;
    }

    @Get('all')
    public async getComments(): Promise<Comment[]> {
        const comments = await this.commentService.getComments();
        return comments;
    }
}