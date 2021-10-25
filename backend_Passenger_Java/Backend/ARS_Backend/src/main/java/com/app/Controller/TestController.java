package com.app.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

	public TestController() {
		System.out.println("In Test Controlller");
	}
	@GetMapping("/one/{id}")
	public ResponseEntity<?> test(@PathVariable int id){
		
		System.out.println("In requst param  : "+id);
		Object obj=new Object();
		obj="Hello From First Controller";
		return ResponseEntity.ok(obj);
	}
	@GetMapping("/two")
	public String test2(@RequestParam String id){
		System.out.println("In Two : "+id);
		return "From Test2 Response";
		
	}
	@GetMapping("/three")
	public String test3(){
		return "From Test3 Response";
	}
	@GetMapping("/four")
	public String test4(@RequestParam String name){
		return "From Test4 Response";
	}
}
