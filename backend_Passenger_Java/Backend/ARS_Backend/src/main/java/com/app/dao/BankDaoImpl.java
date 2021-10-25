package com.app.dao;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.BankDetails;
import com.app.pojos.FlightSchedule;

@Repository
@Transactional
public class BankDaoImpl implements IBankDao{

	@Autowired
	private EntityManager manager;
	@Override
	public BankDetails verifyBank(BankDetails bank, int flsid) {
		int accNo=bank.getAccNo();
		int cvv=bank.getCvv();
		int uid=bank.getUid();
		
		System.out.println("In Verify bank dao : "+bank.getAccNo()+" "+bank.getCvv()+" "+bank.getUid()+" "+flsid);
		FlightSchedule flsobj=manager.find(FlightSchedule.class, flsid);
		
		int fare=flsobj.getAirfare().getFare();
		
		String jpql="select b from BankDetails b where b.accNo=:accNo and b.cvv=:cvv and b.uid=:uid";
	
		BankDetails bankobj=manager.createQuery(jpql,BankDetails.class).setParameter("accNo",accNo).
			setParameter("cvv",cvv).setParameter("uid",uid).getSingleResult();
		if(bankobj!=null) {
			System.out.println("Verification done success");
				if(bankobj.getBalance()>fare)
					{
					bankobj.setBalance(bankobj.getBalance()-fare);
					manager.persist(bankobj);
					return bankobj;
					}
				else
					return null;
			}
		else
		return null; 
	}

}
