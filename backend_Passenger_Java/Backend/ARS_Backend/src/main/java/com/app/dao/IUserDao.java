package com.app.dao;

import java.util.List;

import com.app.pojos.Address;
import com.app.pojos.Transaction;
import com.app.pojos.User;

public interface IUserDao {
	public User CheckUser(String email,String password);
	
	public String registerUser(User u);
	
	public String addAddress(Address address,int id);
	
	//To show transaction
	public List<Transaction> showTransactions(int uid);
	
	//Forgot password
	public String changePassword(User u, int uid);
	
}
