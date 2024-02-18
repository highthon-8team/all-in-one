import prisma from "../_lib/prisma";

export function createAlarm(userId: number, startedAt: string) {
  return prisma.alarm.create({
    data: {
      userId: userId,
      started_at: new Date(startedAt),
    },
  });
}
export function findAlarmById(userId: number) {
  return prisma.alarm.findFirst({
    where: {
      userId: userId,
    },
  });
}
export function updateAlarm(startedAt: string, alarmId: number) {
  return prisma.alarm.update({
    where: {
      id: alarmId,
    },
    data: {
      started_at: new Date(startedAt),
    },
  });
}
