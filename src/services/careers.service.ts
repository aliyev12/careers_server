import { PrismaClient } from "@prisma/client";
import { EStatus, IJobApplication } from "../interfaces";

const prisma = new PrismaClient();

export async function getMultiple(page = 1) {
  const jobApplications = await prisma.jobApplication.findMany();
  return { jobApplications };
}

export async function getOne(id: string) {
  const jobApplication = await prisma.jobApplication.findUnique({
    where: { id },
  });
  return { jobApplication };
}

export async function create(newJobApplication: IJobApplication) {
  try {
    const jobApplication = await prisma.jobApplication.create({
      data: newJobApplication,
    });
    return { status: EStatus.success, data: jobApplication };
  } catch (error) {
    return { status: EStatus.fail, data: error };
  }
}

export async function update(id: string, newJobApplication: IJobApplication) {
  const jobApplication = await prisma.jobApplication.update({
    where: { id },
    data: newJobApplication,
  });
  return { jobApplication };
}

export async function remove(id: string) {
  const jobApplication = await prisma.jobApplication.delete({
    where: { id },
  });
  return { jobApplication };
}
