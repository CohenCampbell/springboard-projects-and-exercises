function createAccount(pin, amount = 0) {
  return {
    checkBalance(inPin) {
      if (inPin == pin) return `$${amount}`;
      return "Invalid PIN.";
    },
    deposit(inPin, inAmount) {
      if (inPin !== pin) return "Invalid PIN.";
      amount += inAmount;
      return `Succesfully deposited $${inAmount}. Current balance: $${amount}.`;
    },
    withdraw(inPin, inWithdraw) {
      if (inPin !== pin) return "Invalid PIN.";
      if (inWithdraw > amount)
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      amount -= inWithdraw;
      return `Succesfully withdrew $${inWithdraw}. Current balance: $${amount}.`;
    },

    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
