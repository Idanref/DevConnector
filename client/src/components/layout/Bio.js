import React from 'react';

function capitalizeTheFirstLetterOfEachWord(sentence) {
  var separateWord = sentence.toLowerCase().split(' ');
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(' ');
}

const Bio = ({ profile }) => {
  if (profile.bio)
    return (
      <>
        <p style={{ fontSize: '1.08rem' }}>
          <i className='fas fa-bookmark lead'></i>
          {' ' + capitalizeTheFirstLetterOfEachWord(profile.bio)}
        </p>
        <br></br>
      </>
    );
  else return '';
};

export default Bio;
