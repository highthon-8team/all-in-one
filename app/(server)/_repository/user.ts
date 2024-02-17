import prisma from "../lib/prisma";

export function createUser(userId: string, password: string) {
  return prisma.user.create({
    data: {
      userId: userId,
      password: password,
    },
  });
}

export function findUserByUserId(userId: string) {
  return prisma.user.findFirst({
    where: { userId },
  });
}

export function findUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}
