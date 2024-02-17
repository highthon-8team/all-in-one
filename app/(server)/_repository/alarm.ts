import prisma from "../_lib/prisma";

export function createAlarm(userId: number) {
  return prisma.alarm.create({
    data: {
      userId: userId,
      started_at: new Date("2025-01-05T16:28:33.983Z"),
    },
  });
}
export function findAlarmById(alarmId: number) {
  return prisma.alarm.findFirst({
    where: {
      id: alarmId,
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
