package com.app.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminDaoImpl;
import com.app.pojos.AirCraft;
import com.app.pojos.Airfare;
import com.app.pojos.FlightSchedule;

@Service
public class AdminService implements IAdminService {

	@Autowired
	private AdminDaoImpl dao;
	@Override
	public List<FlightSchedule> showflightSchedule(String source, String destination) {
		List<FlightSchedule> newFlist=new ArrayList<>();
		
		List<FlightSchedule> flist=dao.showflightSchedule(source, destination);
		for (FlightSchedule flightSchedule : flist) {
		
			FlightSchedule fs=new FlightSchedule();
			Airfare airfare=new Airfare();
			AirCraft aircraft=new AirCraft();
			
			fs.setFlsId(flightSchedule.getFlsId());
			fs.setArrivalTime(flightSchedule.getArrivalTime());
			fs.setDepartureTime(flightSchedule.getDepartureTime());
			fs.setFlightDate(flightSchedule.getFlightDate());
			
			airfare.setAirfareId(flightSchedule.getAirfare().getAirfareId());
			airfare.setFare(flightSchedule.getAirfare().getFare());
			
			aircraft.setAcId(flightSchedule.getAircraft().getAcId());
			aircraft.setCapacity(flightSchedule.getAircraft().getCapacity());
			
			fs.setAirfare(airfare);
			fs.setAircraft(aircraft);
			newFlist.add(fs);
			
		}
		return newFlist;
	}

}
