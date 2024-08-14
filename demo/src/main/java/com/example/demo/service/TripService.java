package com.example.demo.service;

import com.example.demo.entity.Trip;
import com.example.demo.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TripService {

    @Autowired
    private TripRepository tripRepository;

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    public Trip getTripById(Long id) {
        return tripRepository.findById(id).orElse(null);
    }

    public void deleteTrip(Long id) {
        tripRepository.deleteById(id);
    }

    public void updateTrip(Long id, Trip updatedTrip) {
        Optional<Trip> tripOptional = tripRepository.findById(id);
        if (tripOptional.isPresent()) {
            Trip trip = tripOptional.get();
            trip.setName(updatedTrip.getName());
            trip.setLocation(updatedTrip.getLocation());
            trip.setDuration(updatedTrip.getDuration());
            trip.setBestTime(updatedTrip.getBestTime());
            trip.setTemperature(updatedTrip.getTemperature());
            trip.setDistance(updatedTrip.getDistance());
            trip.setUpcomingDeparture(updatedTrip.getUpcomingDeparture());
            trip.setRating(updatedTrip.getRating());
            trip.setDetails(updatedTrip.getDetails());
            trip.setImage(updatedTrip.getImage());
            tripRepository.save(trip);
        }
    }

    public void updateTripImage(Long id, byte[] image) {
        Optional<Trip> tripOptional = tripRepository.findById(id);
        if (tripOptional.isPresent()) {
            Trip trip = tripOptional.get();
            trip.setImage(image);
            tripRepository.save(trip);
        }
    }

	public Trip addTrip(Trip trip) {
		// TODO Auto-generated method stub
		return null;
	}

	public Trip updateTrip(Trip trip) {
		// TODO Auto-generated method stub
		return null;
	}
}
