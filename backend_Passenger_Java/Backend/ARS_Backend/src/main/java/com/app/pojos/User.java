package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "user_id")
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name = "user_id")
	@JsonProperty("user_id")
	private Integer userId;

	@Column(name = "first_name", length = 50)
	private String firstName;

	@Column(name = "last_name", length = 50)
	private String lastName;

	@Column(name = "email", length = 50, unique = true, nullable = false)
	private String email;

	@Column(name = "password", length = 100, nullable = false)
	private String password;

	@Column(name = "phone", length = 10, unique = true, nullable = false)
	private String phone;

	@Column(name = "passport_number", length = 100, unique = true, nullable = false)
	private String passportNumber;

	//Address mapping
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "addr_id")
	private Address addresses;
	
	//@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Transaction> transaction=new ArrayList<>();
	
	public User() {
		System.out.println("In User Pojo constructor : " + getClass().getName());
	}

	public User(String firstName, String lastName, String email, String password, String phone, String passportNumber) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.passportNumber = passportNumber;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassportNumber() {
		return passportNumber;
	}

	public void setPassportNumber(String passportNumber) {
		this.passportNumber = passportNumber;
	}

	
	public Address getAddresses() {
		return addresses;
	}
//

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
//
	public void setAddresses(Address addresses) {
		this.addresses = addresses;
	}

	public List<Transaction> getTransaction() {
		return transaction;
	}

	public void setTransaction(List<Transaction> transaction) {
		this.transaction = transaction;
	}

//	public void addAddress(Address a)
//	{
//		//p ---> c
//		this.addresses=a;
//		a.setUser(this);//c ---> p
//	}
//	public void removeAddress(Address a)
//	{
//		this.studentAdr=null;
//		a.setStud(null);
//	}
	@Override
	public String toString() {
		return "user [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", phone=" + phone + ", passportNumber=" + passportNumber + "]";
	}

}
