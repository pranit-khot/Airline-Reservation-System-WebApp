package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "rt_id")
@Table(name = "route")
public class Route {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column(name = "rt_id")
	@JsonProperty("rt_id")
	private Integer rtId;
	
	@Column(name = "source", length = 32, nullable = false)
	private String source;
	
	@Column(name = "destination", length = 32, nullable = false)
	private String destination;
	
	@Column(name = "route_code", length = 16, unique = true, nullable = false)
	private String routeCode;
	

	@OneToOne(mappedBy = "route")
	private Airfare airfare;
	

	@OneToMany(mappedBy ="routeId",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FlightSchedule> flslist=new ArrayList<>();

	public Route() {
		System.out.println("in route ctor");
	}

	public Route( String source, String destination, String routeCode) {
		super();
		
		this.source = source;
		this.destination = destination;
		this.routeCode = routeCode;
	}

	
	public Integer getRtId() {
		return rtId;
	}

	public void setRtId(Integer rtId) {
		this.rtId = rtId;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getRouteCode() {
		return routeCode;
	}

	public void setRouteCode(String routeCode) {
		this.routeCode = routeCode;
	}

	@Override
	public String toString() {
		return "Route [rtId=" + rtId + ", source=" + source + ", destination=" + destination + ", routeCode="
				+ routeCode + "]";
	}
	
}
