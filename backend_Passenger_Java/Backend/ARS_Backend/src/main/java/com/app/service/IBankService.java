package com.app.service;

import com.app.pojos.BankDetails;

public interface IBankService {

	public BankDetails verifyBank(BankDetails bank,int flsid);
}
