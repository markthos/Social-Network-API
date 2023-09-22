const { Schema } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Reaction is required',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'Username is required'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// export the ReactionSchema
module.exports = ReactionSchema;