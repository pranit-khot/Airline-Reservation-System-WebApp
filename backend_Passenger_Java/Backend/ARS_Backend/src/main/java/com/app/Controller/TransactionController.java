package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.TransactionDaoImpl;
import com.app.pojos.Transaction;

@RestController
@CrossOrigin
@RequestMapping("/transaction")

public class TransactionController {

	@Autowired
	private TransactionDaoImpl dao;
	public TransactionController() {
		System.out.println("In Transaction Controller");
	}	
	
	@GetMapping("/book/{uid}/{fid}")
	public ResponseEntity<?> flightTransaction(@PathVariable int uid,@PathVariable int fid)
	{
		
		try {
			System.out.println("Request Is here :");
			Transaction transac=dao.flightTransact(uid, fid);
			if(transac!=null)
			{
				return new ResponseEntity<>(transac,HttpStatus.OK);
				//return new ResponseEntity<>(transac,HttpStatus.OK);
			}
		}catch(RuntimeException ex)
		{
			System.out.println("Transaction Exception : "+ex);
		}
		return null;
		//return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
