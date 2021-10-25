package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BankDaoImpl;
import com.app.pojos.BankDetails;

@Service
public class BankService implements IBankService {

	@Autowired
	private BankDaoImpl dao;
	@Override
	public BankDetails verifyBank(BankDetails bank, int flsid) {
		
		return dao.verifyBank(bank, flsid);
		
	}

}
