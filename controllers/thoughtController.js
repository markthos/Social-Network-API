const { update } = require('cypress/types/lodash');
const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find({});
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // get one thought by id
    async getThoughtById({ params }, res) {
        try {
            const dbThoughtData = await Thought.findOne({ _id: params.id });
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // add thought to user
    async addThought({ params, body }, res) {
        try {
            const dbThoughtData = await Thought.create(body);
            const dbUserData = await User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            );
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    
    // update thought by id
    async updateThought(req, res) {
        try {
            const updateThoughtData = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updateThoughtData) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }

            res.json(updateThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // remove thought
    async removeThought({ params }, res) {
        try {
            const dbThoughtData = await Thought.findOneAndDelete({ _id: params.id });
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // add reaction to thought
    async addReaction({ params, body }, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $push: { reactions: body } },
                { new: true, runValidators: true }
            );
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // remove reaction from thought
    async removeReaction({ params }, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $pull: { reactions: { reactionId: params.reactionId } } },
                { new: true, runValidators: true }
            );
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json({ message: 'Reaction deleted!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};