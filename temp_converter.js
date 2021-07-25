

// temp coverter


function temp_converter(from, reading) {
  if (from === "celsius") {
	return (reading * 9/5) + 32 + " degree F";
  } else {
	return (reading -32) * 5 / 9 + " degree celsius";
  }
}


temp_converter("celsius", 0); // "32 degree F"

temp_converter("", 32); // "0 degree celsius"


