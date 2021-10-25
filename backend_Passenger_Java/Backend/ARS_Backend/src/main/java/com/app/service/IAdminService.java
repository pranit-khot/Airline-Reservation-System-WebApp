package com.app.service;

import java.util.List;

import com.app.pojos.FlightSchedule;

public interface IAdminService {

	public List<FlightSchedule> showflightSchedule(String source,String destination);
}
