import { notFoundError } from "@/errors";
import hotelRepository from "@/repositories/hotels-repository";
import ticketRepository from "@/repositories/ticket-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";

async function getHotels() {
  const hotels = await hotelRepository.findHotels();

  if (!hotels) {
    throw notFoundError();
  }
  return hotels;
}

async function getRooms(hotelId: number) {
  const rooms = await hotelRepository.findRooms(hotelId);

  if (!rooms) {
    throw notFoundError();
  }

  return rooms;
}

async function getIncludesHotel(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }
  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) {
    throw notFoundError();
  }
  if (ticket.TicketType.includesHotel === true) {
    return true;
  }

  return false;
}

async function getHotelById(hotelId: number) {
  const hotel = await hotelRepository.findHotelById(hotelId);

  if (!hotel) {
    throw notFoundError();
  }

  return hotel;
}

const hotelService = {
  getHotels,
  getRooms,
  getHotelById,
  getIncludesHotel,
};

export default hotelService;
