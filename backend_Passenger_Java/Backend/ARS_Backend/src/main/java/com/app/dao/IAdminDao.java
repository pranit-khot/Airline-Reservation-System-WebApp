package com.app.dao;

import java.util.List;

import com.app.pojos.Admin;

import com.app.pojos.AirCraft;
import com.app.pojos.FlightSchedule;

import com.app.pojos.Airfare;
import com.app.pojos.Route;
import com.app.pojos.User;


public interface IAdminDao {
	public Admin CheckAdmin(String email,String password);

	public String addAircraft(AirCraft aircraft);
	
	public String addFlightSchedule(FlightSchedule flightschedule, int acId, int afId, int rtId); 

	//add airfare
	public String addAirFare(Airfare airfare, int rtId);
	
	public String addRoute(Route route);

	//show flight schedule
	public List<FlightSchedule> showflightSchedule(String source,String destination );

	//show routes
	
	public List<Route> getRoutes();
	
	public List<AirCraft> showAircraft();
	
	public List<Airfare> showAirFare();
	
	public List<User> showUser();
	
}
