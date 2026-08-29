import {z} from "zod"


export const createLesson = z.object({
    title:z.string()
    .trim()
    .min(2,"minimum lenght should 2 for the title ")
    .max(100,"maximum length should be 100 for the title"),
    

    description:z.string()
    .trim()
    .min(10,"minimum length should be 10 for the description")
    .max(500,"maximum length should be 500 for the description"),

      difficulty: z.enum(
        ["beginner", "intermediate", "advanced"],
        "Invalid difficulty level"
    ),

    order: z
        .number()
        .int("Order must be an integer")
        .min(1, "Order must be at least 1"),

    content: z
        .string()
        .trim()
        .min(2, "Content should have at least 2 characters")
        .max(10000, "Content should have at most 10000 characters"),

})

export const updateLesson = createLesson.partial()