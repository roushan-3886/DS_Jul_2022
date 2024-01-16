
public class Bank {

	public static void main(String[] args) {
		System.out.println("bank started.....");
		BankAccount bkObj = new BankAccount();
		bkObj.setBankAccount(20154, "Roushan", 70000);
		bkObj.printBankAccount();
		BankAccount bkObj1 = new BankAccount();
		bkObj1.setBankAccount(78459, "Rishabh", 73000);
		bkObj1.printBankAccount();
		double transfer = 5000.855;
		System.out.println("Fund transfer started");
		bkObj.withdraw(transfer);
		System.out.println("Fund transfered......");
		bkObj.printBankAccount();
		bkObj1.deposite(transfer);
		System.out.println("Fund Deposited");
		bkObj1.printBankAccount();
	}
}
class BankAccount
{
	int accountnumber;
	String accountHolderName;
	double balance;
	
	void setBankAccount(int x,String y,double z)
	{
		System.out.println("setBAnkAccount(int x, String y,double z......)");
		accountnumber=x;
		accountHolderName=y;
		balance=z;
		
	}
	double calculateSimpleInterest(float rateOfInterest, int period)
			{
		double simpleInterest = (balance*rateOfInterest*period)/100.0f;
		return simpleInterest;
		
	}
	 void withdraw(double amountToWithdraw) {
		 System.out.println("Withdrawing...."+amountToWithdraw);
		 balance = balance-amountToWithdraw;
	 }
	 void deposite(double amountToDeposite) {
		 System.out.println("Withdrawing...."+amountToDeposite);
		 balance = balance-amountToDeposite;
	 }
	 double getbalance() {
		 return balance;
	 }
	 void printBankAccount() {
		 System.out.println("Acno    :"+accountnumber);
		 System.out.println("ACName  :"+accountHolderName);
		 System.out.println("ACBAL   :"+balance);
		 System.out.println("....................");
		 
	 }
	}

	