import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.name.middleName("male"),
      image: faker.name.middleName("male"),
    },
  });
}

export async function createRoom(hotelId: number) {
  return prisma.room.create({
    data: {
      name: faker.name.middleName("male"),
      capacity: 5,
      hotelId: hotelId,
    },
  });
}
