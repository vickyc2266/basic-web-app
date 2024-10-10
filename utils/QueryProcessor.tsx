export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist." 
      
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const largestNumb = Math.max(...numbers);
      console.log(largestNumb); // Output the largest number
    } else {
      console.log("No numbers found.");
    }
  }

  else if (query.toLowerCase().includes("andrew")) {
    return (
      "vickyc"
    )
  }

  else if (query.toLowerCase().includes("name")) {
    return "Vicky Chen";
  }

  return "";
}
