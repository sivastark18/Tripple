package com.example.demo.service;

import com.example.demo.entity.Booking;
import com.example.demo.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public void saveBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    public void updateBooking(Long id, Booking booking) {
        Booking existingBooking = bookingRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Booking not found with ID: " + id));
        // Update fields
        existingBooking.setRiderName(booking.getRiderName());
        existingBooking.setRiderAge(booking.getRiderAge());
        existingBooking.setRiderGender(booking.getRiderGender());
        existingBooking.setRiderExperience(booking.getRiderExperience());
        existingBooking.setRiderContact(booking.getRiderContact());
        existingBooking.setRiderEmail(booking.getRiderEmail());
        existingBooking.setTourName(booking.getTourName());
        existingBooking.setAccommodationType(booking.getAccommodationType());
        existingBooking.setNumRiders(booking.getNumRiders());
        existingBooking.setTripType(booking.getTripType());
        existingBooking.setBikeType(booking.getBikeType());
        existingBooking.setBikeModel(booking.getBikeModel());
        bookingRepository.save(existingBooking);
    }

    public void deleteBooking(Long id) {
        if (!bookingRepository.existsById(id)) {
            throw new EntityNotFoundException("Booking not found with ID: " + id);
        }
        bookingRepository.deleteById(id);
    }
}
