package com.app.pojos;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "ac_id")
@Table(name = "aircraft")
public class AirCraft {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name = "ac_id")
	@JsonProperty("ac_id")
	private Integer acId;

	@Column(name = "capacity", nullable = false)
	private int capacity;

	@JsonIgnore
	@OneToMany(mappedBy ="aircraftObj",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FlightSchedule> flightSc=new ArrayList<>();
	
	public AirCraft() {
		System.out.println("in aircraft ctor");
	}

	public AirCraft(int capacity) {
		super();

		this.capacity = capacity;
	}

	public Integer getAcId() {
		return acId;
	}
	
	public void setAcId(Integer acId) {
		this.acId = acId;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public List<FlightSchedule> getFlightSc() {
		return flightSc;
	}

	public void setFlightSc(List<FlightSchedule> flightSc) {
		this.flightSc = flightSc;
	}

	@Override
	public String toString() {
		return "AirCraft [acId=" + acId + ", capacity=" + capacity + "]";
	}

}
