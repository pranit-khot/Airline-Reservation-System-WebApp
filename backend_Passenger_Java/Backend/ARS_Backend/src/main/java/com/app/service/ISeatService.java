package com.app.service;

import java.util.List;

import com.app.pojos.SeatReservation;

public interface ISeatService {

	public List<SeatReservation> loadSeats(int afid);
	
	//Book Flight
	public SeatReservation bookSeat(int seatId,int userId,int afId);
}
