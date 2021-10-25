package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.dao.UserDaoImpl;
import com.app.pojos.Address;
import com.app.pojos.Transaction;
import com.app.pojos.User;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	public UserDaoImpl dao;
	public UserController() {
		System.out.println("In User Controller");
	}
	
	@RequestMapping("/login")
	public ResponseEntity<?> userLogin(@RequestBody User u) {
		try {
		System.out.println("Here we get : "+u.toString());
		
		User user=dao.CheckUser(u.getEmail(), u.getPassword());
		if(user!=null)
			return new ResponseEntity<>(user,HttpStatus.OK);
		else 
			return null;
		}
		catch(RuntimeException ex) {
			System.out.println("Login Failed : "+ex);
		}
		return null;
	}


	@RequestMapping("/register")
	public ResponseEntity<?> userRegisteration(@RequestBody User u) {
	String message="Registration Failed";
	Object obj=new Object();
	obj=message;
	try {
	if(dao.registerUser(u)!=null);
	message="Registration Success";
	obj=message;
	return new ResponseEntity<>(HttpStatus.OK);
	}
	catch(RuntimeException ex) {
	System.out.println("Registration Exception : "+ex);
	}
	return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
	
	@PutMapping("address/{id}")
	public ResponseEntity<?> addAddress(@RequestBody Address address,@PathVariable int id) {
		String message="Address Updation Failed";
		Object obj=new Object();
		obj=message;
		try {
			System.out.println("The Given param id : "+id);
			System.out.println("Address : "+address.toString());
			if(dao.addAddress(address,id)!=null) {
				message="Address Updated Successfully";
				obj=message;
				return new ResponseEntity<>(HttpStatus.OK);
			}
		}
			catch(RuntimeException ex) {
				System.out.println("Address Exception : "+ex);
			}
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
	
	//show transactions to user
	@GetMapping("/show/{uid}")
	public ResponseEntity<?> showTranscation(@PathVariable int uid)
	{	
		System.out.println("In Show Controller : "+uid);
		List<Transaction> transac=dao.showTransactions(uid);
		//Transaction transaction=user.getTransaction();
//		for (Transaction transaction : transac) {
//			//transaction.setUser(null);
//			//transaction.setFcSchedule(null);
//			return  ResponseEntity.ok(transaction);
//		}
		return  ResponseEntity.ok(transac);
//		System.out.println("The User Transaction is : "+transaction);
		//return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	//showUserProfile
	@GetMapping("/showprofile/{uid}")
	public ResponseEntity<?> showProfile(@PathVariable int uid)
	{	
		System.out.println("In Show Controller : "+uid);
		User u=dao.showUserProfile(uid);
		return  ResponseEntity.ok(u);

	}
	
	//Forgot password
	@PutMapping("/forgot/{uid}")
	public String forgotPassword(@RequestBody User u,@PathVariable int uid) {
		try {
			String message=dao.changePassword(u, uid);
			return message;
		}catch(RuntimeException ex) {
			System.out.println("Forgot password exception : "+ex);
		}
		return "Forgot password failed";
	}
}
