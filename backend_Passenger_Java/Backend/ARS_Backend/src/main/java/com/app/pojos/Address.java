package com.app.pojos;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "address_id")
@Table(name="address")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="address_id")
	@JsonProperty("address_id")
	private int addrId;
	@Column(name="street",length = 50)
	private String street;
	
	@OneToOne(mappedBy = "addresses",fetch = FetchType.EAGER)
	private User user;
//	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name="state_id")
	private State state;
	
	
	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public Address() {
		System.out.println("In Address Pojo ctor");
	}

	public Address(String street, List<Address> addresses) {
		super();
		this.street = street;
	}


	public int getAddrId() {
		return addrId;
	}
	public void setAddrId(int addrId) {
		this.addrId = addrId;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}

	public User getUser() {
		return user;
	}
//
	public void setUser(User user) {
		this.user = user;
	}

//	@Override
//	public String toString() {
//		return "Address [addrId=" + addrId + ", street=" + street + ", user=" + user + "]";
//	}
//	
}
