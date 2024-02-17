import prisma from "../lib/prisma";

export function createDream(dreamText: string, userId: number) {
  return prisma.dream.create({
    data: {
      userId : Number(userId),
      dream_text: dreamText
    },
  });
}

export function findDreamByUserId(userId: number) {
  return prisma.dream.findMany({
    where: {
      userId : userId
    }
  })
}