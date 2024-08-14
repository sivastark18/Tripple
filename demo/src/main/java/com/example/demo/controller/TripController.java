package com.example.demo.controller;

import com.example.demo.entity.Trip;
import com.example.demo.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin/trips")
@CrossOrigin(origins = "http://localhost:3000")
public class TripController {

    @Autowired
    private TripService tripService;

    @GetMapping
    public List<Trip> getAllTrips() {
        return tripService.getAllTrips();
    }

    @GetMapping("/{id}")
    public Trip getTripById(@PathVariable Long id) {
        return tripService.getTripById(id);
    }

    @PostMapping("/{id}/image")
    public ResponseEntity<String> uploadImage(@PathVariable Long id, @RequestParam("image") MultipartFile image) {
        try {
            tripService.updateTripImage(id, image.getBytes());
            return ResponseEntity.ok("Image uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image");
        }
    }

    @DeleteMapping("/{id}/image")
    public ResponseEntity<String> deleteImage(@PathVariable Long id) {
        try {
            tripService.updateTripImage(id, null);
            return ResponseEntity.ok("Image deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete image");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTrip(@PathVariable Long id) {
        try {
            tripService.deleteTrip(id);
            return ResponseEntity.ok("Trip deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete trip: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateTrip(@PathVariable Long id, @RequestBody Trip trip) {
        try {
            tripService.updateTrip(id, trip);
            return ResponseEntity.ok("Trip updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update trip: " + e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<Trip> addTrip(@RequestParam("name") String name,
                                        @RequestParam("location") String location,
                                        @RequestParam("duration") String duration,
                                        @RequestParam("bestTime") String bestTime,
                                        @RequestParam("temperature") String temperature,
                                        @RequestParam("distance") String distance,
                                        @RequestParam("upcomingDeparture") String upcomingDeparture,
                                        @RequestParam("rating") String rating,
                                        @RequestParam("details") String details,
                                        @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {
        Trip trip = new Trip();
        trip.setName(name);
        trip.setLocation(location);
        trip.setDuration(duration);
        trip.setBestTime(bestTime);
        trip.setTemperature(temperature);
        trip.setDistance(distance);
        trip.setUpcomingDeparture(upcomingDeparture);
        trip.setRating(rating);
        trip.setDetails(details);
        if (image != null) {
            trip.setImage(image.getBytes());
        }
        Trip savedTrip = tripService.addTrip(trip);
        return ResponseEntity.ok(savedTrip);
    }

    @PutMapping("/{id}/with-image")
    public ResponseEntity<Trip> updateTripWithImage(@PathVariable Long id,
                                           @RequestParam("name") String name,
                                           @RequestParam("location") String location,
                                           @RequestParam("duration") String duration,
                                           @RequestParam("bestTime") String bestTime,
                                           @RequestParam("temperature") String temperature,
                                           @RequestParam("distance") String distance,
                                           @RequestParam("upcomingDeparture") String upcomingDeparture,
                                           @RequestParam("rating") String rating,
                                           @RequestParam("details") String details,
                                           @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {
        Trip trip = tripService.getTripById(id);
        if (trip == null) {
            return ResponseEntity.notFound().build();
        }
        trip.setName(name);
        trip.setLocation(location);
        trip.setDuration(duration);
        trip.setBestTime(bestTime);
        trip.setTemperature(temperature);
        trip.setDistance(distance);
        trip.setUpcomingDeparture(upcomingDeparture);
        trip.setRating(rating);
        trip.setDetails(details);
        if (image != null) {
            trip.setImage(image.getBytes());
        }
        Trip updatedTrip = tripService.updateTrip(trip);
        return ResponseEntity.ok(updatedTrip);
    }
}