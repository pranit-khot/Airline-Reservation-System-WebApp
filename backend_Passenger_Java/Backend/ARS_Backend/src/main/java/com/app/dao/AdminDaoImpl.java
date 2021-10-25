package com.app.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.apache.catalina.Manager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Admin;

import com.app.pojos.AirCraft;
import com.app.pojos.Airfare;
import com.app.pojos.FlightSchedule;

import com.app.pojos.Airfare;

import com.app.pojos.Route;
import com.app.pojos.SeatReservation;
import com.app.pojos.User;

@Transactional
@Repository
public class AdminDaoImpl implements IAdminDao {

	@Autowired
	private EntityManager manger;
	//private EntityManager manger1;
	
	@Override
	public Admin CheckAdmin(String email,String password) {
		String jpql="select a from Admin a where a.email=:em and a.password=:pass";
		Admin a=manger.createQuery(jpql,Admin.class).setParameter("em",email).setParameter("pass",password).getSingleResult();
		return a;
	}

	@Override
	public String addAircraft(AirCraft aircraft) {
		
		System.out.println("in admin dao "+getClass().getName());
		String message = "aircraft adding failed";
		
		
		manger.persist(aircraft);
		AirCraft f=manger.find(AirCraft.class, aircraft.getAcId());
		//adding seats to the seat_reservation table by aircraft id
		int j=11;
		for(int i=1;i<=f.getCapacity();i++)
		{
			SeatReservation seat=new SeatReservation();
			seat.setAfid(f.getAcId());
			seat.setSeatno(j);
			j++;
			seat.setStatus("false");
			manger.persist(seat);
		}
		
		System.out.println("User : "+f);
		
		if (f!=null) {
			message = "aircraft Sussessfully added";
		}
		return message;
	}

	@Override
	public String addFlightSchedule(FlightSchedule flightschedule, int acId, int afId, int rtId) {
	
		System.out.println("in admin dao "+getClass().getName());
		String message = "schedule adding failed";
		AirCraft air=manger.find(AirCraft.class, acId);
		Airfare airfare=manger.find(Airfare.class, afId);
		Route route=manger.find(Route.class, rtId);
		
		flightschedule.setAircraft(air);
		flightschedule.setRouteId(route);
		flightschedule.setAirfare(airfare);
		
		manger.persist(flightschedule);
		
		FlightSchedule f=manger.find(FlightSchedule.class, flightschedule.getFlsId());
		System.out.println("User : "+f);
		
		if (f!=null) {
			message = "Schedule Sussessfully added";
		}
		return message;
	}
	public String addAirFare(Airfare airfare, int rtId) {
		System.out.println("in addAirFare "+getClass().getName());
		String message = "add Airfare failed";
		Route route = manger.find(Route.class, rtId);
		airfare.setRoute(route);
		manger.persist(airfare);
		
		Airfare af = manger.find(Airfare.class, airfare.getAirfareId());
		System.out.println("Airfare Found : "+af);
		
		if (af!=null) {
		message = "Airfare added successfuly!!!";
		}
		return message;
	}
	
	@Override
	public String addRoute(Route route) {
		System.out.println("in addRoute "+getClass().getName());
		String message = "add Route failed";
		manger.persist(route);
		
		
		Route r = manger.find(Route.class, route.getRtId());
		System.out.println("Route Found : "+r);
		
		if (r!=null) {
		message = "Route added successfuly!!!";

		}
		return message;
	}

	@Override
	public List<FlightSchedule> showflightSchedule(String source,String destination) {
		
		String jpql="select f from FlightSchedule f where f.routeId.source=:source and  f.routeId.destination=:destination";
		
		List<FlightSchedule>flist= manger.createQuery(jpql,FlightSchedule.class).setParameter("source",source ).setParameter("destination", destination).getResultList();
		
//		AirCraft aircraft=manger.find(AirCraft.class,acId);
//		Airfare airfare=manger.find(Airfare.class, afId);
//		Route route=manger.find(Route.class, rtId);
//		if(aircraft!=null)
//			fls.setAircraft(aircraft);
//		if(airfare!=null)
//			fls.setAirfare(airfare);
//		if(airfare.)
		return flist;
	}

	@Override
	public List<Route> getRoutes() {
		
		String jpql="select r from Route r";
		List<Route> route=manger.createQuery(jpql,Route.class).getResultList();
		return route;
	}

	public List<AirCraft> showAircraft() {
		String jpql=("select a from AirCraft a");
		return manger.createQuery(jpql,AirCraft.class).getResultList();
	}
	
	public List<Airfare> showAirFare() {
		String jpql=("select a from Airfare a");
		return manger.createQuery(jpql,Airfare.class).getResultList();
	}
	
	public List<User> showUser() {
		String jpql=("select u from User u");
		return manger.createQuery(jpql,User.class).getResultList();
	}
}
