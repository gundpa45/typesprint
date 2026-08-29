import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: [2, "Title should have at least 2 characters"],
            maxlength: [100, "Title should have at most 100 characters"],
        },

        description: {
            type: String,
            required: true,
            trim: true,
            minlength: [2, "Description should have at least 2 characters"],
            maxlength: [500, "Description should have at most 500 characters"],
        },

        difficulty: {
            type: String,
            required: true,
            enum: {
                values: ["beginner", "intermediate", "advanced"],
                message: "Invalid difficulty level",
            },
        },

        order: {
            type: Number,
            required: true,
            min: [1, "Order must be at least 1"],
        },

        content: {
            type: String,
            required: true,
            trim: true,
            minlength: [2, "Content should have at least 2 characters"],
            maxlength: [10000, "Content should have at most 10000 characters"],
        },
    },
    {
        timestamps: true,
    }
);

const lessonModel = mongoose.model("lesson", lessonSchema);

export default lessonModel;