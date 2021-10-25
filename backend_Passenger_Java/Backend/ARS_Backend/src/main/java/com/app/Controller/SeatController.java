package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.pojos.SeatReservation;
import com.app.service.ISeatService;

@RestController
@CrossOrigin
@RequestMapping("/seat")
public class SeatController {

	@Autowired
	private ISeatService service;
	
	public SeatController() {
		System.out.println("In Seat Controller");
	}
	
	@RequestMapping("/loadseat/{af}")
	public ResponseEntity<?> loadSeats(@PathVariable int af){
	
		System.out.println("In load seats :" +af);
		List<SeatReservation> slist=service.loadSeats(af);
		return new ResponseEntity<>(slist,HttpStatus.OK);
	}

	@RequestMapping("/reserveseat/{seatId}/{uid}/{afId}")
	public ResponseEntity<?> reserveSeat(@PathVariable int seatId,@PathVariable int uid,@PathVariable int afId){
		try {
			System.out.println("Booking data is here : "+seatId+" "+uid+" "+afId);
			SeatReservation seatobj=service.bookSeat(seatId, uid, afId);
			return new ResponseEntity<>(seatobj,HttpStatus.OK);
		}catch(RuntimeException ex)	{
			System.out.println("Booking Exception : "+ex);
		}
		return null;
	}
}
