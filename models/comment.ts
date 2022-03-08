import { Document, Schema, model } from 'mongoose';

import { CommentInterface } from '../utils/types';

interface CommentDocument extends CommentInterface, Document {}

const CommentSchema = new Schema<CommentDocument>(
  {
    comment: {
      type: String,
      required: true
    },
    commented_by: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: true
    },
    commented_raid: {
      type: Schema.Types.ObjectId,
      ref: 'Raid',
      required: true
    }
  },
  { timestamps: true }
);

export const Comment = model<CommentDocument>('Comment', CommentSchema);