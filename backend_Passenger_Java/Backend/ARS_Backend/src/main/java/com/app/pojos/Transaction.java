package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "transaction_id")
@Table(name = "transaction")
public class Transaction {


//	@Autowired
//	private static final long SerialVersionUID=1L;
//	
	@Id //PK 
	@GeneratedValue(strategy = GenerationType.IDENTITY) //strategy = AUTO will be replaced : auto_increment
	//@Column(name = "transaction_id")
	@JsonProperty("transaction_id")
	private Integer tsId;
	
	@Column(name = "booking_date")
	private LocalDate bookingDate;
	
	@Column(name = "departure_date")
	private LocalDate departureDate;
	
	//@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	//@JsonIgnore
//	@JsonBackReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="fls_id",nullable = false)
	private FlightSchedule fcSchedule;

	public Transaction() {
		System.out.println("In Transaction pojo");
	}

	public Transaction(LocalDate bookingDate, LocalDate departureDate, User user, FlightSchedule fcSchedule) {
		super();
		this.bookingDate = bookingDate;
		this.departureDate = departureDate;
		this.user = user;
		this.fcSchedule = fcSchedule;
	}

	public Integer getTsId() {
		return tsId;
	}
	
	public void setTsId(Integer tsId) {
		this.tsId = tsId;
	}


	public LocalDate getBookingDate() {
		return bookingDate;
	}


	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}


	public LocalDate getDepartureDate() {
		return departureDate;
	}


	public void setDepartureDate(LocalDate departureDate) {
		this.departureDate = departureDate;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public FlightSchedule getFcSchedule() {
		return fcSchedule;
	}


	public void setFcSchedule(FlightSchedule fcSchedule) {
		this.fcSchedule = fcSchedule;
	}


	@Override
	public String toString() {
		return "Transaction [tsId=" + tsId + ", bookingDate=" + bookingDate + ", departureDate=" + departureDate
				+ ", user=" + user + ", fcSchedule=" + fcSchedule + "]";
	}
	
	
	
	
}
