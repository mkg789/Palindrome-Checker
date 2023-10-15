function palindrome(str) {
    let mkg = str.toLowerCase();
    const replaced = mkg.replace(/[^a-z0-9]/gi, '');
    let p = "";
    for(let i =replaced.length-1;i>=0;i--){
      p+=replaced[i];
    }
    if(replaced===p){
      return true;
    }
    else{
      return false;
    }
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));