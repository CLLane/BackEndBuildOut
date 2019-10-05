# BYOB API Web Server
  This API allows you to query data about NBA players and the colleges they attended.  You can query players and colleges as well as add a college or player.  You are also allowed to delete a player.  

  You can use your browser to access URLs. Heroku was used for deployment. 

## Base URL

  All URLs referenced in the documentation have the following base: 

  > https://byob-round2.herokuapp.com

  The API is served over HTTPS. To ensure data privacy, HTTP is supported through localhost.

## Calls 

  * GET
    > /api/v1/colleges
      - Will query for all colleges and return an array of     college object.
        *example return* 
          