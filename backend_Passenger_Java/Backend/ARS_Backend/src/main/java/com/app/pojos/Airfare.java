package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "airfare_id")
@Table(name = "airfare")
public class Airfare {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name = "airfare_id")
	@JsonProperty("airfare_id")
	private Integer airfareId;

	@Column(name = "fare")
    private int fare;
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "rt_id")
	private Route route;
	
	@JsonIgnore
	@OneToMany(mappedBy ="airfare",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FlightSchedule> flightSc=new ArrayList<>();
	
	public Airfare() {
		
		System.out.println("In Airfare Pojo constructor : " + getClass().getName());
      }
	
	
	public Airfare(int fare) {
		super();
		this.fare = fare;
	}


	public Integer getAirfareId() {
		return airfareId;
	}

	public void setAirfareId(Integer airfareId) {
		this.airfareId = airfareId;
	}


	public int getFare() {
		return fare;
	}


	public void setFare(int fare) {
		this.fare = fare;
	}


	public Route getRoute() {
		return route;
	}


	public void setRoute(Route route) {
		this.route = route;
	}


	public List<FlightSchedule> getFlightSc() {
		return flightSc;
	}


	public void setFlightSc(List<FlightSchedule> flightSc) {
		this.flightSc = flightSc;
	}


	@Override
	public String toString() {
		return "Airfare [airfareId=" + airfareId + ", fare=" + fare + "]";
	}


	

}
