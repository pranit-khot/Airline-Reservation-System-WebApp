package com.app.dao;

import java.util.ArrayList;
import java.util.List;

import javax.jws.soap.SOAPBinding.Use;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hibernate.service.spi.Manageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.Address;
import com.app.pojos.Admin;
import com.app.pojos.BankDetails;
import com.app.pojos.Transaction;
import com.app.pojos.User;
@Repository
@Transactional
public class UserDaoImpl implements IUserDao {

	@Autowired
	private EntityManager manger;

	//login user
	public User CheckUser(String email,String password) {
		
		String jpql="select u from User u where u.email=:em and u.password=:pass";
		User u=manger.createQuery(jpql,User.class).setParameter("em",email).setParameter("pass",password).getSingleResult();
		return u;
	}

	//register user
	@Override
	public String registerUser(User u) {
		System.out.println("in registerUser dao "+getClass().getName());
		String message = "Registration failed";
		
		//System.out.println("User Address  : "+u.getAddresses());
		manger.persist(u);
		User user=manger.find(User.class, u.getUserId());
		System.out.println("User Find : "+user);
		if (user!=null) {
			BankDetails b =new BankDetails();
			b.setBalance(1000000);
			b.setAccNo(123123123);
			b.setCvv(111);
			b.setUid(user.getUserId());
			manger.persist(b);
		message = "Registraion Sussessfull";
		}
		return message;
	}

	//add address
	@Override
	public String addAddress(Address address,int id) {
		
		System.out.println("In Address registrer dao : ");
		User u=manger.find(User.class,id);
	//	u.addAddress(address);
		u.setAddresses(address);
		manger.persist(u);
		return "Address Successfully added";
	}

	//show transactions
	@Override
	public List<Transaction> showTransactions(int uid) {
		List<Transaction> trlist=new ArrayList<>();
		String jpql="select t from Transaction t where t.user.userId=:uid";
		System.out.println(jpql);
		List<Transaction> transac=manger.createQuery(jpql, Transaction.class).setParameter("uid",uid).getResultList();
		
		for (Transaction transaction : transac) {
			
			if(transaction.getUser().getUserId()!=0)
			{
				Transaction t=new Transaction();
				t.setTsId(transaction.getTsId());
				t.setBookingDate(transaction.getBookingDate());
				t.setDepartureDate(transaction.getDepartureDate());
				t.setFcSchedule(transaction.getFcSchedule());;
				trlist.add(t);
			}
		}
		//System.out.println("User details : "+transac.toString());
//		User user=manger.find(User.class,uid);
//		if(user!=null)
//		{
//		   System.out.println("Transaction details : "+user.getTransaction().getBookingDate());
//	       System.out.println("Transaction details : "+user.getTransaction().getTsId());
//		   System.out.println("Transaction details : "+user.getTransaction().toString());
//		   return user;
//		}
		return trlist;
		//return null;
	}
	// show user profile
	public User showUserProfile(int uid) {
		
		User user=manger.find(User.class, uid);
		if(user !=null)
		  return user;
		return null;
	}
	
//forgot password
	@Override
	public String changePassword(User u, int uid) {
		
		User user=manger.find(User.class, uid);
		user.setPassword(u.getPassword());
		manger.persist(user);
		return "Password changed successfully";
	}
}
