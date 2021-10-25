package com.app.dao;

import java.util.List;

import com.app.pojos.SeatReservation;

public interface ISeatDao {

	public List<SeatReservation>loadSeats(int afid);
	
	//Book Flight
		public SeatReservation bookSeat(int seatId,int userId,int afId);
}
