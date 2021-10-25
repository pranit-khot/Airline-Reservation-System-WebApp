package com.app.pojos;

import javax.persistence.*;

@Entity
@Table(name="seat_reservation")
public class SeatReservation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer seatId;
	
	@Column(name="seat_no")
	private int seatno;
	
	@Column(name="status")
	private String status;
	
	@Column(name="uid")
	private int uid;
	
	@Column(name="afid")
	private int afid;
	
	
	public SeatReservation() {
		System.out.println("In Seat Reservation");
	}


	public SeatReservation(int seatno, String status, int uid, int afid) {
		super();
		this.seatno = seatno;
		this.status = status;
		this.uid = uid;
		this.afid = afid;
	}




	public Integer getSeatId() {
		return seatId;
	}


	public void setSeatId(Integer seatId) {
		this.seatId = seatId;
	}


	public int getSeatno() {
		return seatno;
	}


	public void setSeatno(int seatno) {
		this.seatno = seatno;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public int getUid() {
		return uid;
	}


	public void setUid(int uid) {
		this.uid = uid;
	}


	public int getAfid() {
		return afid;
	}


	public void setAfid(int afid) {
		this.afid = afid;
	}


	@Override
	public String toString() {
		return "SeatReservation [seatId=" + seatId + ", seatno=" + seatno + ", status=" + status + ", uid=" + uid
				+ ", afid=" + afid + "]";
	}


	
	
	
	
}
