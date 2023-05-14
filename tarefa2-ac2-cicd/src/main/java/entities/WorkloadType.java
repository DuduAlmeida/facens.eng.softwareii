package entities;

public enum WorkloadType {
	
	PARTIAL(16, 55), FULL_TIME(18, 55);
	
	private int minAge;
	private int maxAge;
	
	WorkloadType(int minAge, int maxAge)
	{
		this.minAge = minAge;
		this.maxAge = maxAge;
	}
	
	public int getMinAge() {
		return this.minAge;
	}
	
	public int getMaxAge() {
		return this.maxAge;
	}
}

