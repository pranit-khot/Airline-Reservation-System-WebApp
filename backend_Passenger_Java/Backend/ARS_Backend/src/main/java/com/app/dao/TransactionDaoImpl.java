package com.app.dao;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.FlightSchedule;
import com.app.pojos.Transaction;
import com.app.pojos.User;

import net.bytebuddy.asm.Advice.Local;

@Repository
@Transactional
public class TransactionDaoImpl implements ITransactionDao {

	@Autowired
	private EntityManager manager;
	@Override
	public Transaction flightTransact(int uid, int fid) {
		Transaction transaction=new Transaction();
		System.out.println("Date : "+LocalDate.now());
		
		transaction.setBookingDate(LocalDate.now());
		
		User u=manager.find(User.class, uid);
		FlightSchedule f=manager.find(FlightSchedule.class, fid);
		System.out.println("Get Flight date : "+f.getFlightDate());
		transaction.setDepartureDate(f.getFlightDate());
		if(u!=null)
			transaction.setUser(u);
		if(f!=null)
			transaction.setFcSchedule(f);
		
		manager.persist(transaction);
		return transaction;
	}

}
