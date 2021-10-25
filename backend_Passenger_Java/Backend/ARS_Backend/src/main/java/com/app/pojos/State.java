package com.app.pojos;

import java.util.*;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "state_id")
@Table(name = "state")
public class State {

	@Id //PK 
	@GeneratedValue(strategy = GenerationType.IDENTITY) //strategy = AUTO will be replaced : auto_increment
	//@Column(name = "state_id")
	@JsonProperty("state_id")
	private Integer stateId;
	
	@Column(name = "state_name")
	private String stateName;
	
	@Column(name = "country")
	private String country;
	
	@OneToMany(mappedBy = "state",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Address> address=new ArrayList<>();
	
	public State() {
		System.out.println("in cnstr of "+getClass().getName());
	}

	public State(String stateName, String country) {
		super();
		this.stateName = stateName;
		this.country = country;
	}

	public int getStateId() {
		return stateId;
	}

	public String getStateName() {
		return stateName;
	}

	public String getCountry() {
		return country;
	}

	public void setStateId(int stateId) {
		this.stateId = stateId;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public void setStateId(Integer stateId) {
		this.stateId = stateId;
	}
	
}
