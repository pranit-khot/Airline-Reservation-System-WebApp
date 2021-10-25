package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.BankDetails;
import com.app.service.IBankService;

@RestController
@CrossOrigin
@RequestMapping("/bank")
public class BankController {

	@Autowired 
	private IBankService service;
	public BankController() {
		System.out.println("In Bank Controller");
	}
	
	@PostMapping("/verify/{flsid}")
	public ResponseEntity<?> verifyBankDetails(@RequestBody BankDetails bank,@PathVariable int flsid){
		try {
		BankDetails bankobj=service.verifyBank(bank, flsid);
		return new  ResponseEntity<>(bankobj,HttpStatus.OK);
		}
		catch(RuntimeException ex) {
			System.out.println("Exception in transaction : "+ex);
		}
		return null;
	}
}
