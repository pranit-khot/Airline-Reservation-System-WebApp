package com.app.Controller;

import java.util.List;

import org.springframework.aop.ThrowsAdvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AdminDaoImpl;
import com.app.pojos.Admin;

import com.app.pojos.AirCraft;
import com.app.pojos.FlightSchedule;

import com.app.pojos.Airfare;
import com.app.pojos.Route;

import com.app.pojos.User;
import com.app.service.IAdminService;


@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private AdminDaoImpl dao;
	
	@Autowired
	private IAdminService serviceObj;
	public AdminController() {
	
		System.out.println("In Admin Controller Ctor : "+getClass().getName());
	}
	
	@RequestMapping("/login")
	public ResponseEntity<?> adminLogin(@RequestBody Admin a) {
		try {
		Admin admin=dao.CheckAdmin(a.getEmail(), a.getPassword());
		if(admin!=null)
			return new ResponseEntity<>(admin,HttpStatus.OK);
		else 
			return null;
		}catch(RuntimeException ex) {
			System.out.println("Login failed : "+ex);
		}
		return null;
	}

	/*
	 * @RequestMapping("/addAirfare") public String addAirfare(@RequestBody Airfare
	 * airfare) { try { if(dao.addAirFare(airfare)!=null); return
	 * "Airfare added successfully"; } catch(RuntimeException ex) {
	 * System.out.println("Airfare addding Exception : "+ex); } return
	 * "Airfare add failed"; }
	 */
	
	@RequestMapping("/addAirfare/{rtId}")
	public String addAirfare(@RequestBody Airfare airfare,  @PathVariable int rtId) {
		try {
		if(dao.addAirFare(airfare, rtId)!=null);
			
			return "Airfare added successfully";
		}
		catch(RuntimeException ex) {
			System.out.println("Airfare addding Exception : "+ex);
		}
		return "Airfare add failed";
	}

	@RequestMapping("/addRoute")
	public String addRoute(@RequestBody Route route) {
		try {
		if(dao.addRoute(route)!=null);
			return "Route added successfully";
		}
		catch(RuntimeException ex) {
			System.out.println("Route addding Exception : "+ex);
		}
		return "Route add failed";
	}
	
	@PutMapping("/addSchedule/{acId}/{afId}/{rtId}")
	public String scheduleFlight(@RequestBody FlightSchedule flightschedule,@PathVariable int acId, @PathVariable int afId,  @PathVariable int rtId) {
		try {
			if(dao.addFlightSchedule(flightschedule, acId, afId, rtId)!=null);
			return "flight schedule Success";
		}
		catch(RuntimeException ex) {
			System.out.println("flight schedule Exception : "+ex);
		}
		return "flight schedule failed";
	}
	
	@RequestMapping("/addAircraft")
	public ResponseEntity<?> addAircraft(@RequestBody AirCraft aircraft) {
		
			try {
				if(dao.addAircraft(aircraft)!=null);
				return new ResponseEntity<>(HttpStatus.OK);
			}
			catch(RuntimeException ex) {
				System.out.println("add aircraft Exception : "+ex);
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
	}
	
	@RequestMapping("/flightScedule/{source}/{destination}")
	public ResponseEntity<?> flightSchedule(@PathVariable String source,@PathVariable String destination){
		System.out.println(source+"   "+destination);
		List<FlightSchedule> flist=serviceObj.showflightSchedule(source,destination);
		return new ResponseEntity<>(flist,HttpStatus.OK);
	}
	
	@RequestMapping("/showRoutes")
	public ResponseEntity<?> showRoutes(){
		List<Route> routes=dao.getRoutes();
		return new ResponseEntity<>(routes,HttpStatus.OK);
	}
	
	@RequestMapping("/showAircraft")
	public ResponseEntity<?> fetchAllAircraft() {
		System.out.println("in fetch all aircraft");
		List<AirCraft> aircraft = dao.showAircraft();
		if(aircraft.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(aircraft,HttpStatus.OK);
	}
	
	@RequestMapping("/showAirfare")
	public ResponseEntity<?> fetchAllAirfare() {
		System.out.println("in fetch all airfare");
		List<Airfare> airfare = dao.showAirFare();
		if(airfare.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(airfare,HttpStatus.OK);
	}
	
	@RequestMapping("/showUser")
	public ResponseEntity<?> fetchAllUser() {
		System.out.println("in fetch all user");
		List<User> user = dao.showUser();
		if(user.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(user,HttpStatus.OK);
	}

	//get flight schedule by id
	
	@RequestMapping("/flightSc")
	public ResponseEntity<?> fligthById(){
		return null;
	}
}
