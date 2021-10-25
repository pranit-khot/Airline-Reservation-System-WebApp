package com.app.pojos;

import javax.persistence.*;

@Entity
@Table(name="bank")
public class BankDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bankId")
	private Integer bankId;
	
	@Column(name="accNo",length = 50)
	private int accNo;
	@Column(name="cvv",length = 4)
	private int cvv;
	@Column(name="balance",length = 50)
	private int balance;
	@Column(name="uid",length = 10)
	private int uid;
	
	public BankDetails() {
		System.out.println("In Bank Details pojo");
	}

	public BankDetails(int accNo, int cvv, int balance, int uid) {
		super();
		this.accNo = accNo;
		this.cvv = cvv;
		this.balance = balance;
		this.uid = uid;
	}

	public Integer getBankId() {
		return bankId;
	}
	public void setBankId(Integer bankId) {
		this.bankId = bankId;
	}
	public int getAccNo() {
		return accNo;
	}
	public void setAccNo(int accNo) {
		this.accNo = accNo;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}


	@Override
	public String toString() {
		return "BankDetails [bankId=" + bankId + ", accNo=" + accNo + ", cvv=" + cvv + ", balance=" + balance + ", uid="
				+ uid + "]";
	}
	
	

}
