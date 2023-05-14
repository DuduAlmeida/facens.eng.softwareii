package entities;

import java.util.ArrayList;
import java.util.List;

public class Company {
	private String name;
	private List<Applicant> employees = new ArrayList<>();
	
	Company(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}	
	
	public boolean toHire(Applicant applicant) {
		boolean checkHired = false;
		
		List<WorkloadType> eligibleWorkloadTypes = getEligibleWorkloadTypes(applicant.getAge());
		
		if (!eligibleWorkloadTypes.isEmpty()) 
		{
			checkHired = true;
			employees.add(applicant);
			applicant.setHired(eligibleWorkloadTypes);
		} 
		
		return(checkHired); 
	}

	public static List<WorkloadType> getEligibleWorkloadTypes(Integer applicantAge){
		List<WorkloadType> eligibleWorkloadType = new ArrayList<>();
		
		for(WorkloadType auxEnum: WorkloadType.values())
		{			
			if(applicantAge >= auxEnum.getMinAge() && applicantAge <= auxEnum.getMaxAge())
			{
				eligibleWorkloadType.add(auxEnum);
			}
		}
		
		return(eligibleWorkloadType);
	}
}

