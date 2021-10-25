package com.app.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ISeatDao;
import com.app.pojos.SeatReservation;

@Service
public class SeatService implements ISeatService {

	@Autowired
	private ISeatDao seat;
	@Override
	public List<SeatReservation> loadSeats(int afid) {
		List<SeatReservation> slist=seat.loadSeats(afid);
		for (SeatReservation seatReservation : slist) {
			System.out.println(seatReservation.toString());
		}
		return slist;
	}
	@Override
	public SeatReservation bookSeat(int seatId, int userId, int afId) {
		
		SeatReservation seatobj=seat.bookSeat(seatId, userId, afId);
		return seatobj;
	}
}
