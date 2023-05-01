package entities;

import java.util.ArrayList;
import java.util.List;

public class Applicant {
	private String name;
	private Integer age;
	private Boolean hired;
	private List<WorkloadType> eligibleWorkloadTypesList = new ArrayList<>();
	
	Applicant(String name, Integer age) {
		this.name = name;
		this.age = age;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Integer getAge() {
		return age;
	}
	
	public void setAge(Integer age) {
		this.age = age;
	}
	
	public Boolean checkHired() {
		return hired;
	}
	
	public void setHired() {		
		this.hired = true;
	}
	
	//overload
	public void setHired(List<WorkloadType> newWorkloadTypesList) {		
		this.hired = true;
		setWorkloadType(newWorkloadTypesList);
	}
	
	public void setWorkloadType(List<WorkloadType> newWorkloadTypesList) {			
		this.eligibleWorkloadTypesList.addAll(newWorkloadTypesList);
	}
	
	public List<WorkloadType> getWorkloadTypesList() {		
		return this.eligibleWorkloadTypesList;
	}
}



