package com.app.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.SeatReservation;
@Repository
@Transactional
public class SeatDaoImpl implements ISeatDao {

	@Autowired
	private EntityManager manger;
	@Override
	public List<SeatReservation> loadSeats(int afid) {
		
		String jpql="select s from SeatReservation s where s.afid=:afid";
		List<SeatReservation> slist=manger.createQuery(jpql,SeatReservation.class).setParameter("afid", afid).getResultList();
		return slist;
	}
	@Override
	public SeatReservation bookSeat(int seatId, int userId, int afId) {
		System.out.println("Booking data is here : "+seatId+" "+userId+" "+afId);
		SeatReservation seat=manger.find(SeatReservation.class, seatId);
		seat.setStatus("true");
		seat.setUid(userId);
		manger.persist(seat);
		return seat;
	}

}
