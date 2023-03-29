const tvShows = [
    {
    title: 'Planet Earth II',
    score: 9.5,
    year: 2016,
    numRatings: 5000
    },
    {
    title: 'Planet Earth',
    score: 9.4,
    year: 2006,
    numRatings: 5000
    },
    {
    title: 'Breaking Bad',
    score: 9.4,
    year: 2008,
    numRatings: 6000
    },
    {
    title: 'Band Of Brothers',
    score: 9.4,
    year: 2001,
    numRatings: 4900
    },
    {
    title: 'Chernobyl',
    score: 9.3,
    year: 2019,
    numRatings: 4900
    },
    {
    title: 'Jingle All The Way',
    score: 7.1,
    year: 1996,
    numRatings: 5000
    },
    {
    title: 'The Wire',
    score: 9.3,
    year: 2002,
    numRatings: 6000
    }
   ]
  
  const highestScore = tvShows.reduce((prev, curr) => {
    let value = prev.score > curr.score ? prev : curr;
    return value;
  });
  // console.log('debugger : ' + JSON.stringify(highestScore.score, 0, 4));
  var hasDuplicate = Boolean;
  tvShows.map((value) => value.score).sort().sort((pre, curr) => {
    if (pre === curr) {
      return (hasDuplicate = true);
    } else {
      hasDuplicate = false;
    }
      return pre;
    }); 
    if (hasDuplicate === true) {
      console.log("duplicate found") 
    const highestnumRatings = tvShows.reduce((prev, curr) => {
      let ratingValue = prev.numRatings > curr.numRatings ? prev : curr;
      return ratingValue; 
    });
    console.log("highest ratings: " + JSON.stringify(highestnumRatings, 0, 4));
  }
  else{
    console.log("no duplicate found");
    console.log('highest score : ' + JSON.stringify(highestScore, 0, 4));
  }
  
  /* ---- FIND SECOND HIGHEST ----*/

  let uniqueArray = [...new Set(tvShows)];
  let secondHighestScore = uniqueArray.sort()[uniqueArray.length - 2];
  console.log("The second largets element is" + JSON.stringify(secondHighestScore, 0, 4)); 
  
  