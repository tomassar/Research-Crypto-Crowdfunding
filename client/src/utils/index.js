// Calculate the number of days left until the given deadline
export const calculateDaysLeft = (deadline) => {
    const timeDifference = new Date(deadline).getTime() - Date.now();
    const remainingDays = timeDifference / (1000 * 3600 * 24);
  
    return remainingDays.toFixed(0);
  };
  
  // Calculate the percentage of the goal achieved based on the raised amount
  export const calculateProgressPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };
  
  // Check if the given image URL is valid by loading it and invoking the callback
  export const checkImageValidity = (url, callback) => {
    const image = new Image();
    image.src = url;
  
    if (image.complete) callback(true);
  
    image.onload = () => callback(true);
    image.onerror = () => callback(false);
  };
  