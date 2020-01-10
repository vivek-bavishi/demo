function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(function(su){
          return goodUsers.some(function(gu){
              return gu.id===su.id;
          });
      });
    };
  }
  
  module.exports = checkUsersValid



