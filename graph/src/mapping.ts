import { BigInt, Address } from "@graphprotocol/graph-ts";
import { Withdrawal } from '../generated/Lock/Lock'
import { WithdrawalEvent } from "../generated/schema";

export function handleWithdrawal(event: Withdrawal): void {
  let id = event.transaction.hash.toString()
  let withdrawal = new WithdrawalEvent(id);

  withdrawal.amount = event.params.amount.toString();
  withdrawal.when = event.params.when.toString();

  withdrawal.save();
}
