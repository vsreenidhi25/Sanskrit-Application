import { auth } from "@clerk/nextjs"


const adminIds = [ "user_2dGb6YEarBAQHrNYoB5dMtISRWK"];


export const getIsAdmin = async () => {
  const { userId } = await auth(); 

if (!userId) { 
  return false; 
}
return adminIds.indexOf(userId) != -1;
};