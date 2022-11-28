import { prisma } from "@/config";

async function findHotels() {
  return prisma.hotel.findMany();
}

async function findRooms(hotelId: number) {
  return prisma.hotel.findUnique({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

async function findHotelById(hotelId: number) {
  return prisma.hotel.findUnique({
    where: {
      id: hotelId,
    },
  });
}

const hotelRepository = {
  findHotels,
  findRooms,
  findHotelById,
};

export default hotelRepository;
