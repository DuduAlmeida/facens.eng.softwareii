package entities;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class HiringTests {

	@Test
	public void testHire16YearsOldApplicant()
	{
		boolean expected = true;

		Company company = new Company("FIT");
		Applicant candidate = new Applicant("C. Ohde", 16);
		
		assertEquals(expected, company.toHire(candidate));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.PARTIAL));
		assertEquals(expected, !candidate.getWorkloadTypesList().contains(WorkloadType.FULL_TIME));
	}
	
	@Test
	public void testHireApplicantBetween16and55YearsOld()
	{
		boolean expected = true;
		
		Company company = new Company("FIT");
		Applicant candidate = new Applicant("C. Ohde", 32);
		
		assertEquals(expected, company.toHire(candidate));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.PARTIAL));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.FULL_TIME));
	}

	@Test
	public void testHire55YearsOldApplicant()
	{
		boolean expected = true;
		
		Company company = new Company("FIT");
		Applicant candidate = new Applicant("C. Ohde", 55);
		
		assertEquals(expected, company.toHire(candidate));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.PARTIAL));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.FULL_TIME));
	}
	
	@Test
	public void testDoNotHireApplicantUnderTheAgeOf16()
	{
		boolean expected = false;
		
		Company company = new Company("FIT");
		Applicant candidate = new Applicant("Ronald", 15);
		
		assertEquals(expected, company.toHire(candidate));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.PARTIAL));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.FULL_TIME));
	}
	
	@Test
	public void testDoNotHireApplicantOverTheAgeOf55()
	{
		boolean expected = false;
		
		Company company = new Company("FIT");
		Applicant candidate = new Applicant("Robert De Niro", 56); //"The Intern"
		
		assertEquals(expected, company.toHire(candidate));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.PARTIAL));
		assertEquals(expected, candidate.getWorkloadTypesList().contains(WorkloadType.FULL_TIME));
	}
}

