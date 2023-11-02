import { body } from "express-validator";

export class UserValidator {
    static signup() {
        return [
            body("name", "Name is required").isString(),
            body("email", "Email is required").isEmail(),
            body("password", "Password is required")
                .isAlphanumeric()
                .isLength({ min: 8, max: 32 })
                .withMessage("Password must be between 8-32 characters"),
            body("phone", "Phone number is required").isString(),
            body("type", "User type is required").isString(),
            body("status", "User status is required").isString(),
            // .custom((value, { req }) => {
            //     if (req.body.email) return true;
            //     else {
            //         throw new Error("Email cannot be empty");
            //     }
            // }),
        ];
    }
}
