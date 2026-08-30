export interface AuthPayload {
    userId: string;
    role: "user" | "admin";
}