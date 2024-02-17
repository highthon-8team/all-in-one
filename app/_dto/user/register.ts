import { User } from "@prisma/client";

export interface RegisterRequestDto extends Omit<User,"id"> {}
