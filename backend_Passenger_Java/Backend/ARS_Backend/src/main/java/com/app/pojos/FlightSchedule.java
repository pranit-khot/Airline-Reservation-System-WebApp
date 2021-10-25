package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "fls_id")
@Table(name="flight_schedule")
public class FlightSchedule {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name="fls_id")
	@JsonProperty("fls_id")
	private Integer flsId;
	@Column(name="flight_date")
	private LocalDate flightDate ;
	@Column(name="departure_time")
	private LocalTime departureTime;
	@Column(name="arrival_time")
	private LocalTime arrivalTime;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="ac_id")
	private AirCraft aircraftObj;

	//@JsonIgnore 
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="airfare_id")
	private Airfare airfare;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="rt_id")
	private Route routeId;

	@JsonIgnore 
	@OneToMany(mappedBy ="fcSchedule",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Transaction> transaction=new ArrayList<>();

	public FlightSchedule() {
		System.out.println("In FlightSchedule pojo");
	}
	
	public FlightSchedule(LocalDate filghtDate, LocalTime departureTime, LocalTime arrivalTime, AirCraft aircraft,
			Airfare airfare, List<Transaction> transaction) {
		super();
		this.flightDate = filghtDate;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.aircraftObj = aircraft;
		this.airfare = airfare;
		this.transaction = transaction;
	}

	public Integer getFlsId() {
		return flsId;
	}

	public void setFlsId(Integer flsId) {
		this.flsId = flsId;
	}


	public LocalTime getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(LocalTime departureTime) {
		this.departureTime = departureTime;
	}

	public LocalTime getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(LocalTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public AirCraft getAircraft() {
		return aircraftObj;
	}

	public void setAircraft(AirCraft aircraft) {
		this.aircraftObj = aircraft;
	}

	public Airfare getAirfare() {
		return airfare;
	}

	public void setAirfare(Airfare airfare) {
		this.airfare = airfare;
	}

	public List<Transaction> getTransaction() {
		return transaction;
	}

	public void setTransaction(List<Transaction> transaction) {
		this.transaction = transaction;
	}


	public LocalDate getFlightDate() {
		return flightDate;
	}

	public void setFlightDate(LocalDate flightDate) {
		this.flightDate = flightDate;
	}

	public Route getRouteId() {
		return routeId;
	}

	public void setRouteId(Route routeId) {
		this.routeId = routeId;
	}

	@Override
	public String toString() {
		return "FlightSchedule [flsId=" + flsId + ", flightDate=" + flightDate + ", departureTime=" + departureTime
				+ ", arrivalTime=" + arrivalTime + "]";
	}
	

	
	
}
