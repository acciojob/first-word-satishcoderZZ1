function firstWord(s) {
  // your code here
	s=s.trimStart();
	const firstSpaceIndex=s.indexOf(' ');

	if(firstSpaceIndex===-1){
		return s;
	}
	return s.substring(0,firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
