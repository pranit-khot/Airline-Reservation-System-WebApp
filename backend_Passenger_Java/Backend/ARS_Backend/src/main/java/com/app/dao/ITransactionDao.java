package com.app.dao;

import com.app.pojos.Transaction;

public interface ITransactionDao {

	public Transaction flightTransact(int uid,int fid);
}
