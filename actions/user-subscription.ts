import { auth, currentUser } from "@clerk/nextjs";
import { getUserSubscription } from "@/db/queries";

export const createStripeUrl = async () => {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) throw new Error("Unauthorized.");
  return { data: "UPI payment will be available soon." };
};
