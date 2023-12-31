const { User, Thought } = require('../models');


module.exports = {
    //get all users
    async getAllUsers(req, res) {
        try {
            const dbUserData = await User.find({}).populate('thoughts').populate('friends');
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //get one user by id
    async getUserById({ params }, res) {
        try {
            const dbUserData = await User.findOne({ _id: params.id }).populate('thoughts').populate('friends');
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

    //create user
    async createUser({ body }, res) {
        try {
            const dbUserData = await User.create(body);
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //update user by id
    async updateUser(req, res) {
        try {
            const filter = { _id: req.params.id };
            const updatedUserData = await User.findOneAndUpdate(filter, req.body, { new: true, runValidators: true });

            if (!updatedUserData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            res.json(updatedUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //delete user by id
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
                
            const thought = await Thought.deleteMany({ _id: { $in: user.thoughts } });

            if (!thought) {
                return res.status(404).json({ message: 'User deleted, but no thoughts found!' });
            }

            res.json({ message: 'User and associated thoughts deleted!' });

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //add friend to user
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            const friend = await User.findOneAndUpdate(
                { _id: req.params.friendId },
                { $addToSet: { friends: req.params.userId } },
                { new: true }
            );

            if (!friend) {
                return res.status(404).json({ message: 'No friend found with this id!' });
            }

            res.json({ message: 'Friend added!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //remove friend from user
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            const friend = await User.findOneAndUpdate(
                { _id: req.params.friendId },
                { $pull: { friends: req.params.userId } },
                { new: true }
            );

            if (!friend) {
                return res.status(404).json({ message: 'No friend found with this id!' });
            }

            res.json({ message: 'Friend removed!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

};