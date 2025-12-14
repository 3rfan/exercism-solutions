export function decodedResistorValue(input: string[]) : string {
  
  let totalOhms = ((COLORS.indexOf(input[0]) * 10) + COLORS.indexOf(input[1])) *  10**(COLORS.indexOf(input[2]));
  let prefix = "ohms";
  
  if (totalOhms >= 1_000_000_000) {
    prefix = "gigaohms";
    totalOhms /= 1_000_000_000;
  } else if (totalOhms >= 1_000_000) {
    prefix = "megaohms";
    totalOhms /= 1_000_000;
  } else if (totalOhms >= 1_000) {
    prefix = "kiloohms";
    totalOhms /= 1_000;
  }

  return totalOhms + " " + prefix;

}

export const COLORS: string[] = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];
