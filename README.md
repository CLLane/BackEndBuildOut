# BYOB API Web Server
  This API allows you to query data about NBA players and the colleges they attended.  You can query players and colleges as well as add a college or player.  You are also allowed to delete a player.  

  You can use your browser to access URLs. Heroku was used for deployment. 

## Base URL

  All URLs referenced in the documentation have the following base: 

  > https://byob-round2.herokuapp.com

  The API is served over HTTPS. To ensure data privacy, HTTP is supported through localhost.

## Calls 

### GET
/api/v1/colleges

Will query for all colleges and return an array of college objects.
      
*example succesful return* 
        
> [{ "id": 1, "college": "Duke University", "created_at": "2019-10-04T16:37:12.041Z", "updated_at": "2019-10-04T16:37:12.041Z" }, { "id": 2, "college": "Iowa State University", "created_at": "2019-10-04T16:37:12.047Z", "updated_at": "2019-10-04T16:37:12.047Z" }]

---------

/api/v1/colleges/:id

Will query the college table for a specific college by id.

*example succesful return*
          
> [{ "id": 100, "college": "University of Oregon", "created_at": "2019-10-04T16:37:12.195Z", "updated_at": "2019-10-04T16:37:12.195Z" }]

*example error return*

> { "error": "Could not find a college with id 500" }

----------

/api/v1/players

Will query for all players and return an array of player objects.  

*example succesful return*

> [{ "id": 1,"name": "Shareef Abdur-Rahim","position": "F","height": "6-9","weight": "225","birth_date": "December  11, 1976","college_id": 6,"year_start": "1997","year_end": "2008" }, { "id": 2,"name": "Tom Abernethy","position": "F","height": "6-7","weight": "220","birth_date": "May 6, 1954","college_id": 7,"year_start": "1977","year_end": "1981" }]

-----------

/api/v1/players/:id

Will query the college table for a specific college by id.
        
*example succesful return*
          
> [{"id": 74,"name": "Chris Andersen","position": "F-C","height": "6-10","weight": "245","birth_date": "July 7, 1978","college_id": 54,"year_start": "2002","year_end": "2017" }]
        
*example succesful return*

> { "error": "Could not find a player with id 900" }

### POST 
/api/v1/colleges

 A body is required for POST requests. The body should be structured in JSON. 

 *example body*

 > { "college": "Greek International" }

 *example succesful return*

 A succesful request will return the newly added college id in the form of an object.
             
 > { "id": 190 }

 *example error respnse*

 > {error: Expected format: { college: <String> }. You're missing a \"college"\ property. }
  
  ------------

### /api/v1/players

      - A body is required for POST requests. The body should be structured in JSON. The API is set up to find the proper college_id by comparing   strings be as explicet as possible with the Universities name for instance if a player went to UCLA write out "University of California Los Angeles".

        *example body*

          > { "name": "Greg","position": "C","height": "6-0","weight": "180","birth_date": "1988-08-03","college_id": "University of Georgia","year_start": "2019","year_end":"2020" }
        
        *example succesful return*

          - A succesful request will return the newly added players id in the form of an object.
            > { "id": 500 }

        *example error return* 

          > { "error": "Expected format: {name: < String >, position: < String >, height: < String >, weight: < String >, birth_date: < String >,college_id: < String >, year_start: < String > } You're missing a \"year_end\" property." }

  ### DELETE
    ### /api/v1/players/:id

      - A DELETE request can be made by the above path where the ':id' is the id of the player you would like to delete.

        *example succesful return*

          > 'The player was deleted'

        *example error return*

          > { "error": "Could not find a player with id 9461" }

