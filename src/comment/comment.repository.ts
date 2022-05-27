import { Repository, EntityRepository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDTO } from './dto/create-comment.dto';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {

    public async CreateOrEditditComment(
        createCommentDto: CreateCommentDTO,
        editedComment?: Comment,
    ): Promise<Comment> {
        const { author, body, rated } = createCommentDto;

        if(!editedComment) {
            editedComment = new Comment();
        }
        
        editedComment.author = author;
        editedComment.body = body;
        editedComment.rated = rated;
        
        await editedComment.save();
        return editedComment;
    }
}