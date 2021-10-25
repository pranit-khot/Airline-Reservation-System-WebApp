package com.app.dao;

import com.app.pojos.BankDetails;

public interface IBankDao {

	public BankDetails verifyBank(BankDetails bank,int flsid);
}
