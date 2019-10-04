const mockData = [
  {
    name: 'Alaa Abdelnaby',
    year_start: '1991',
    year_end: '1995',
    position: 'F-C',
    height: '6-10',
    weight: '240',
    birth_date: 'June 24, 1968',
    college: 'Duke University'
  },
  {
    name: 'Zaid Abdul-Aziz',
    year_start: '1969',
    year_end: '1978',
    position: 'C-F',
    height: '6-9',
    weight: '235',
    birth_date: 'April 7, 1946',
    college: 'Iowa State University'
  },
  {
    name: 'Kareem Abdul-Jabbar',
    year_start: '1970',
    year_end: '1989',
    position: 'C',
    height: '7-2',
    weight: '225',
    birth_date: 'April 16, 1947',
    college: 'University of California, Los Angeles'
  },
  {
    name: 'Mahmoud Abdul-Rauf',
    year_start: '1991',
    year_end: '2001',
    position: 'G',
    height: '6-1',
    weight: '162',
    birth_date: 'March 9, 1969',
    college: 'Louisiana State University'
  },
  {
    name: 'Tariq Abdul-Wahad',
    year_start: '1998',
    year_end: '2003',
    position: 'F',
    height: '6-6',
    weight: '223',
    birth_date: 'November 3, 1974',
    college: 'San Jose State University'
  },
  {
    name: 'Shareef Abdur-Rahim',
    year_start: '1997',
    year_end: '2008',
    position: 'F',
    height: '6-9',
    weight: '225',
    birth_date: 'December 11, 1976',
    college: 'University of California'
  },
  {
    name: 'Tom Abernethy',
    year_start: '1977',
    year_end: '1981',
    position: 'F',
    height: '6-7',
    weight: '220',
    birth_date: 'May 6, 1954',
    college: 'Indiana University'
  },
  {
    name: 'Forest Able',
    year_start: '1957',
    year_end: '1957',
    position: 'G',
    height: '6-3',
    weight: '180',
    birth_date: 'July 27, 1932',
    college: 'Western Kentucky University'
  },
  {
    name: 'John Abramovic',
    year_start: '1947',
    year_end: '1948',
    position: 'F',
    height: '6-3',
    weight: '195',
    birth_date: 'February 9, 1919',
    college: 'Salem International University'
  },
  {
    name: 'Alex Abrines',
    year_start: '2017',
    year_end: '2018',
    position: 'G-F',
    height: '6-6',
    weight: '190',
    birth_date: 'August 1, 1993',
    college: ''
  },
  {
    name: 'Alex Acker',
    year_start: '2006',
    year_end: '2009',
    position: 'G',
    height: '6-5',
    weight: '185',
    birth_date: 'January 21, 1983',
    college: 'Pepperdine University'
  },
  {
    name: 'Don Ackerman',
    year_start: '1954',
    year_end: '1954',
    position: 'G',
    height: '6-0',
    weight: '183',
    birth_date: 'September 4, 1930',
    college: 'Long Island University'
  },
  {
    name: 'Mark Acres',
    year_start: '1988',
    year_end: '1993',
    position: 'F-C',
    height: '6-11',
    weight: '220',
    birth_date: 'November 15, 1962',
    college: 'Oral Roberts University'
  },
  {
    name: 'Bud Acton',
    year_start: '1968',
    year_end: '1968',
    position: 'F',
    height: '6-6',
    weight: '210',
    birth_date: 'January 11, 1942',
    college: 'Hillsdale College'
  },
  {
    name: 'Quincy Acy',
    year_start: '2013',
    year_end: '2018',
    position: 'F',
    height: '6-7',
    weight: '240',
    birth_date: 'October 6, 1990',
    college: 'Baylor University'
  },
  {
    name: 'Alvan Adams',
    year_start: '1976',
    year_end: '1988',
    position: 'C-F',
    height: '6-9',
    weight: '210',
    birth_date: 'July 19, 1954',
    college: 'University of Oklahoma'
  },
  {
    name: 'Don Adams',
    year_start: '1971',
    year_end: '1977',
    position: 'F',
    height: '6-6',
    weight: '210',
    birth_date: 'November 27, 1947',
    college: 'Northwestern University'
  },
  {
    name: 'George Adams',
    year_start: '1973',
    year_end: '1975',
    position: 'F-G',
    height: '6-5',
    weight: '210',
    birth_date: 'May 15, 1949',
    college: 'Gardner-Webb University'
  },
  {
    name: 'Hassan Adams',
    year_start: '2007',
    year_end: '2009',
    position: 'G',
    height: '6-4',
    weight: '220',
    birth_date: 'June 20, 1984',
    college: 'University of Arizona'
  },
  {
    name: 'Jordan Adams',
    year_start: '2015',
    year_end: '2016',
    position: 'G',
    height: '6-5',
    weight: '209',
    birth_date: 'July 8, 1994',
    college: 'University of California, Los Angeles'
  },
  {
    name: 'Michael Adams',
    year_start: '1986',
    year_end: '1996',
    position: 'G',
    height: '5-10',
    weight: '162',
    birth_date: 'January 19, 1963',
    college: 'Boston College'
  },
  {
    name: 'Steven Adams',
    year_start: '2014',
    year_end: '2018',
    position: 'C',
    height: '7-0',
    weight: '255',
    birth_date: 'July 20, 1993',
    college: 'University of Pittsburgh'
  },
  {
    name: 'Rafael Addison',
    year_start: '1987',
    year_end: '1997',
    position: 'F-G',
    height: '6-7',
    weight: '215',
    birth_date: 'July 22, 1964',
    college: 'Syracuse University'
  },
  {
    name: 'Bam Adebayo',
    year_start: '2018',
    year_end: '2018',
    position: 'C-F',
    height: '6-10',
    weight: '243',
    birth_date: 'July 18, 1997',
    college: 'University of Kentucky'
  },
  {
    name: 'Rick Adelman',
    year_start: '1969',
    year_end: '1975',
    position: 'G',
    height: '6-1',
    weight: '175',
    birth_date: 'June 16, 1946',
    college: 'Loyola Marymount University'
  },
  {
    name: 'Jeff Adrien',
    year_start: '2011',
    year_end: '2015',
    position: 'F',
    height: '6-7',
    weight: '245',
    birth_date: 'February 10, 1986',
    college: 'University of Connecticut'
  },
  {
    name: 'Arron Afflalo',
    year_start: '2008',
    year_end: '2018',
    position: 'G',
    height: '6-5',
    weight: '210',
    birth_date: 'October 15, 1985',
    college: 'University of California, Los Angeles'
  },
  {
    name: 'Maurice Ager',
    year_start: '2007',
    year_end: '2011',
    position: 'G',
    height: '6-5',
    weight: '202',
    birth_date: 'February 9, 1984',
    college: 'Michigan State University'
  },
  {
    name: 'Mark Aguirre',
    year_start: '1982',
    year_end: '1994',
    position: 'F-G',
    height: '6-6',
    weight: '232',
    birth_date: 'December 10, 1959',
    college: 'DePaul University'
  },
  {
    name: 'Blake Ahearn',
    year_start: '2008',
    year_end: '2012',
    position: 'G',
    height: '6-2',
    weight: '190',
    birth_date: 'May 27, 1984',
    college: 'Missouri State University'
  },
  {
    name: 'Danny Ainge',
    year_start: '1982',
    year_end: '1995',
    position: 'G',
    height: '6-4',
    weight: '175',
    birth_date: 'March 17, 1959',
    college: 'Brigham Young University'
  },
  {
    name: 'Matthew Aitch',
    year_start: '1968',
    year_end: '1968',
    position: 'F',
    height: '6-7',
    weight: '230',
    birth_date: 'September 21, 1944',
    college: 'Michigan State University'
  },
  {
    name: 'Alexis Ajinca',
    year_start: '2009',
    year_end: '2017',
    position: 'C',
    height: '7-2',
    weight: '248',
    birth_date: 'May 6, 1988',
    college: ''
  },
  {
    name: 'Henry Akin',
    year_start: '1967',
    year_end: '1969',
    position: 'C-F',
    height: '6-10',
    weight: '225',
    birth_date: 'July 31, 1944',
    college: 'Morehead State University'
  },
  {
    name: 'Josh Akognon',
    year_start: '2013',
    year_end: '2013',
    position: 'G',
    height: '5-11',
    weight: '185',
    birth_date: 'February 10, 1986',
    college: 'California State University, Fullerton'
  },
  {
    name: 'Solomon Alabi',
    year_start: '2011',
    year_end: '2012',
    position: 'C',
    height: '7-1',
    weight: '251',
    birth_date: 'March 21, 1988',
    college: 'Florida State University'
  },
  {
    name: 'Mark Alarie',
    year_start: '1987',
    year_end: '1991',
    position: 'F',
    height: '6-8',
    weight: '217',
    birth_date: 'December 11, 1963',
    college: 'Duke University'
  },
  {
    name: 'Gary Alcorn',
    year_start: '1960',
    year_end: '1961',
    position: 'C',
    height: '6-9',
    weight: '225',
    birth_date: 'October 8, 1936',
    college: 'California State University, Fresno'
  },
  {
    name: 'Furkan Aldemir',
    year_start: '2015',
    year_end: '2015',
    position: 'F-C',
    height: '6-10',
    weight: '240',
    birth_date: 'August 9, 1991',
    college: ''
  },
  {
    name: 'Cole Aldrich',
    year_start: '2011',
    year_end: '2018',
    position: 'C',
    height: '6-11',
    weight: '250',
    birth_date: 'October 31, 1988',
    college: 'University of Kansas'
  },
  {
    name: 'LaMarcus Aldridge',
    year_start: '2007',
    year_end: '2018',
    position: 'F-C',
    height: '6-11',
    weight: '260',
    birth_date: 'July 19, 1985',
    college: 'University of Texas at Austin'
  },
  {
    name: 'Chuck Aleksinas',
    year_start: '1985',
    year_end: '1985',
    position: 'C',
    height: '6-11',
    weight: '260',
    birth_date: 'February 26, 1959',
    college: 'University of Connecticut'
  },
  {
    name: 'Cliff Alexander',
    year_start: '2016',
    year_end: '2016',
    position: 'F',
    height: '6-8',
    weight: '245',
    birth_date: 'November 16, 1995',
    college: 'University of Kansas'
  },
  {
    name: 'Cory Alexander',
    year_start: '1996',
    year_end: '2005',
    position: 'G',
    height: '6-1',
    weight: '185',
    birth_date: 'June 22, 1973',
    college: 'University of Virginia'
  },
  {
    name: 'Courtney Alexander',
    year_start: '2001',
    year_end: '2003',
    position: 'G',
    height: '6-5',
    weight: '205',
    birth_date: 'April 27, 1977',
    college: 'California State University, Fresno'
  },
  {
    name: 'Gary Alexander',
    year_start: '1994',
    year_end: '1994',
    position: 'F',
    height: '6-7',
    weight: '240',
    birth_date: 'November 1, 1969',
    college: 'University of South Florida'
  },
  {
    name: 'Joe Alexander',
    year_start: '2009',
    year_end: '2010',
    position: 'F',
    height: '6-8',
    weight: '230',
    birth_date: 'December 26, 1986',
    college: 'West Virginia University'
  },
  {
    name: 'Victor Alexander',
    year_start: '1992',
    year_end: '2002',
    position: 'C-F',
    height: '6-9',
    weight: '265',
    birth_date: 'August 31, 1969',
    college: 'Iowa State University'
  },
  {
    name: 'Steve Alford',
    year_start: '1988',
    year_end: '1991',
    position: 'G',
    height: '6-2',
    weight: '183',
    birth_date: 'November 23, 1964',
    college: 'Indiana University'
  },
  {
    name: 'Bill Allen',
    year_start: '1968',
    year_end: '1968',
    position: 'C-F',
    height: '6-8',
    weight: '205',
    birth_date: '',
    college: 'New Mexico State University'
  },
  {
    name: 'Bob Allen',
    year_start: '1969',
    year_end: '1969',
    position: 'F',
    height: '6-9',
    weight: '205',
    birth_date: 'July 17, 1946',
    college: 'Marshall University'
  },
  {
    name: 'Jarrett Allen',
    year_start: '2018',
    year_end: '2018',
    position: 'F-C',
    height: '6-10',
    weight: '234',
    birth_date: 'April 21, 1998',
    college: 'University of Texas at Austin'
  },
  {
    name: 'Jerome Allen',
    year_start: '1996',
    year_end: '1997',
    position: 'G',
    height: '6-4',
    weight: '184',
    birth_date: 'January 28, 1973',
    college: 'University of Pennsylvania'
  },
  {
    name: 'Kadeem Allen',
    year_start: '2018',
    year_end: '2018',
    position: 'G',
    height: '6-3',
    weight: '192',
    birth_date: 'January 15, 1993',
    college: 'University of Arizona'
  },
  {
    name: 'Lavoy Allen',
    year_start: '2012',
    year_end: '2017',
    position: 'F-C',
    height: '6-9',
    weight: '260',
    birth_date: 'February 4, 1989',
    college: 'Temple University'
  },
  {
    name: 'Lucius Allen',
    year_start: '1970',
    year_end: '1979',
    position: 'G',
    height: '6-2',
    weight: '175',
    birth_date: 'September 26, 1947',
    college: 'University of California, Los Angeles'
  },
  {
    name: 'Malik Allen',
    year_start: '2002',
    year_end: '2011',
    position: 'F-C',
    height: '6-10',
    weight: '255',
    birth_date: 'June 27, 1978',
    college: 'Villanova University'
  },
  {
    name: 'Randy Allen',
    year_start: '1989',
    year_end: '1990',
    position: 'F',
    height: '6-8',
    weight: '220',
    birth_date: 'January 26, 1965',
    college: 'Florida State University'
  },
  {
    name: 'Ray Allen',
    year_start: '1997',
    year_end: '2014',
    position: 'G',
    height: '6-5',
    weight: '205',
    birth_date: 'July 20, 1975',
    college: 'University of Connecticut'
  },
  {
    name: 'Tony Allen',
    year_start: '2005',
    year_end: '2018',
    position: 'G-F',
    height: '6-4',
    weight: '213',
    birth_date: 'January 11, 1982',
    college: 'Oklahoma State University'
  },
  {
    name: 'Willie Allen',
    year_start: '1972',
    year_end: '1972',
    position: 'F',
    height: '6-6',
    weight: '230',
    birth_date: 'February 8, 1949',
    college: 'University of Miami'
  },
  {
    name: 'Odis Allison',
    year_start: '1972',
    year_end: '1972',
    position: 'F',
    height: '6-6',
    weight: '195',
    birth_date: 'October 2, 1949',
    college: 'University of Nevada, Las Vegas'
  },
  {
    name: 'Lance Allred',
    year_start: '2008',
    year_end: '2008',
    position: 'C',
    height: '6-11',
    weight: '250',
    birth_date: 'February 2, 1981',
    college: 'Weber State University'
  },
  {
    name: 'Darrell Allums',
    year_start: '1981',
    year_end: '1981',
    position: 'F',
    height: '6-9',
    weight: '220',
    birth_date: 'September 12, 1958',
    college: 'University of California, Los Angeles'
  },
  {
    name: 'Morris Almond',
    year_start: '2008',
    year_end: '2012',
    position: 'G',
    height: '6-6',
    weight: '225',
    birth_date: 'February 2, 1985',
    college: 'Rice University'
  },
  {
    name: 'Derrick Alston',
    year_start: '1995',
    year_end: '1997',
    position: 'F',
    height: '6-11',
    weight: '225',
    birth_date: 'August 20, 1972',
    college: 'Duquesne University'
  },
  {
    name: 'Rafer Alston',
    year_start: '2000',
    year_end: '2010',
    position: 'G',
    height: '6-2',
    weight: '171',
    birth_date: 'July 24, 1976',
    college: 'California State University, Fresno'
  },
  {
    name: 'Peter Aluma',
    year_start: '1999',
    year_end: '1999',
    position: 'C',
    height: '6-10',
    weight: '260',
    birth_date: 'April 23, 1973',
    college: 'Liberty University'
  },
  {
    name: 'John Amaechi',
    year_start: '1996',
    year_end: '2003',
    position: 'C-F',
    height: '6-10',
    weight: '270',
    birth_date: 'November 26, 1970',
    college: 'Pennsylvania State University'
  },
  {
    name: 'Ashraf Amaya',
    year_start: '1996',
    year_end: '1997',
    position: 'F',
    height: '6-8',
    weight: '230',
    birth_date: 'November 23, 1971',
    college: 'Southern Illinois University'
  },
  {
    name: 'Al-Farouq Aminu',
    year_start: '2011',
    year_end: '2018',
    position: 'F',
    height: '6-9',
    weight: '220',
    birth_date: 'September 21, 1990',
    college: 'Wake Forest University'
  },
  {
    name: 'Lou Amundson',
    year_start: '2007',
    year_end: '2016',
    position: 'F',
    height: '6-9',
    weight: '220',
    birth_date: 'December 7, 1982',
    college: 'University of Nevada, Las Vegas'
  },
  {
    name: 'Bob Anderegg',
    year_start: '1960',
    year_end: '1960',
    position: 'F-G',
    height: '6-3',
    weight: '200',
    birth_date: 'August 24, 1937',
    college: 'Michigan State University'
  },
  {
    name: 'Chris Andersen',
    year_start: '2002',
    year_end: '2017',
    position: 'F-C',
    height: '6-10',
    weight: '245',
    birth_date: 'July 7, 1978',
    college: 'Blinn College'
  },
  {
    name: 'David Andersen',
    year_start: '2010',
    year_end: '2011',
    position: 'C',
    height: '6-11',
    weight: '245',
    birth_date: 'June 23, 1980',
    college: ''
  },
  {
    name: 'Alan Anderson',
    year_start: '2006',
    year_end: '2017',
    position: 'G-F',
    height: '6-6',
    weight: '220',
    birth_date: 'October 16, 1982',
    college: 'Michigan State University'
  },
  {
    name: 'Andrew Anderson',
    year_start: '1968',
    year_end: '1970',
    position: 'G',
    height: '6-2',
    weight: '184',
    birth_date: 'July 6, 1945',
    college: 'Canisius College'
  },
  {
    name: 'Antonio Anderson',
    year_start: '2010',
    year_end: '2010',
    position: 'G',
    height: '6-6',
    weight: '215',
    birth_date: 'June 5, 1985',
    college: 'University of Memphis'
  },
  {
    name: 'Cliff Anderson',
    year_start: '1968',
    year_end: '1971',
    position: 'G-F',
    height: '6-2',
    weight: '200',
    birth_date: 'September 7, 1944',
    college: "Saint Joseph's University"
  },
  {
    name: 'Dan Anderson',
    year_start: '1968',
    year_end: '1969',
    position: 'C',
    height: '6-10',
    weight: '230',
    birth_date: 'February 15, 1943',
    college: 'Augsburg College'
  },
  {
    name: 'Dan Anderson',
    year_start: '1975',
    year_end: '1976',
    position: 'G',
    height: '6-2',
    weight: '185',
    birth_date: 'January 1, 1951',
    college: 'University of Southern California'
  },
  {
    name: 'Derek Anderson',
    year_start: '1998',
    year_end: '2008',
    position: 'G',
    height: '6-5',
    weight: '194',
    birth_date: 'July 18, 1974',
    college: 'University of Kentucky'
  },
  {
    name: 'Dwight Anderson',
    year_start: '1983',
    year_end: '1983',
    position: 'G',
    height: '6-3',
    weight: '185',
    birth_date: 'December 28, 1960',
    college: 'University of Southern California'
  },
  {
    name: 'Eric Anderson',
    year_start: '1993',
    year_end: '1994',
    position: 'F',
    height: '6-9',
    weight: '220',
    birth_date: 'May 26, 1970',
    college: 'Indiana University'
  },
  {
    name: 'Greg Anderson',
    year_start: '1988',
    year_end: '1998',
    position: 'F-C',
    height: '6-10',
    weight: '230',
    birth_date: 'June 22, 1964',
    college: 'University of Houston'
  },
  {
    name: 'J.J. Anderson',
    year_start: '1983',
    year_end: '1985',
    position: 'F',
    height: '6-8',
    weight: '195',
    birth_date: 'September 23, 1960',
    college: 'Bradley University'
  },
  {
    name: 'James Anderson',
    year_start: '2011',
    year_end: '2016',
    position: 'G-F',
    height: '6-6',
    weight: '213',
    birth_date: 'March 25, 1989',
    college: 'Oklahoma State University'
  },
  {
    name: 'Jerome Anderson',
    year_start: '1976',
    year_end: '1977',
    position: 'G',
    height: '6-5',
    weight: '195',
    birth_date: 'October 9, 1953',
    college: 'West Virginia University'
  },
  {
    name: 'Justin Anderson',
    year_start: '2016',
    year_end: '2018',
    position: 'G',
    height: '6-6',
    weight: '228',
    birth_date: 'November 19, 1993',
    college: 'University of Virginia'
  },
  {
    name: 'Kenny Anderson',
    year_start: '1992',
    year_end: '2005',
    position: 'G',
    height: '6-0',
    weight: '168',
    birth_date: 'October 9, 1970',
    college: 'Georgia Institute of Technology'
  },
  {
    name: 'Kim Anderson',
    year_start: '1979',
    year_end: '1979',
    position: 'F',
    height: '6-7',
    weight: '200',
    birth_date: 'May 12, 1955',
    college: 'University of Missouri'
  },
  {
    name: 'Kyle Anderson',
    year_start: '2015',
    year_end: '2018',
    position: 'F-G',
    height: '6-9',
    weight: '230',
    birth_date: 'September 20, 1993',
    college: 'University of California, Los Angeles'
  },
  {
    name: 'Michael Anderson',
    year_start: '1989',
    year_end: '1989',
    position: 'G',
    height: '5-11',
    weight: '184',
    birth_date: 'March 23, 1966',
    college: 'Drexel University'
  },
  {
    name: 'Nick Anderson',
    year_start: '1990',
    year_end: '2002',
    position: 'F-G',
    height: '6-6',
    weight: '205',
    birth_date: 'January 20, 1968',
    college: 'University of Illinois at Urbana-Champaign'
  },
  {
    name: 'Richard Anderson',
    year_start: '1983',
    year_end: '1990',
    position: 'F-C',
    height: '6-10',
    weight: '240',
    birth_date: 'November 19, 1960',
    college: 'University of California, Santa Barbara'
  },
  {
    name: 'Ron Anderson',
    year_start: '1985',
    year_end: '1994',
    position: 'F-G',
    height: '6-7',
    weight: '215',
    birth_date: 'October 15, 1958',
    college: 'California State University, Fresno'
  },
  {
    name: 'Ryan Anderson',
    year_start: '2009',
    year_end: '2018',
    position: 'F',
    height: '6-10',
    weight: '240',
    birth_date: 'May 6, 1988',
    college: 'University of California'
  },
  {
    name: 'Shandon Anderson',
    year_start: '1997',
    year_end: '2006',
    position: 'F-G',
    height: '6-6',
    weight: '208',
    birth_date: 'December 31, 1973',
    college: 'University of Georgia'
  },
  {
    name: 'Willie Anderson',
    year_start: '1989',
    year_end: '1997',
    position: 'G-F',
    height: '6-7',
    weight: '190',
    birth_date: 'January 8, 1967',
    college: 'University of Georgia'
  },
  {
    name: 'Wally Anderzunas',
    year_start: '1970',
    year_end: '1970',
    position: 'C-F',
    height: '6-7',
    weight: '220',
    birth_date: 'January 11, 1946',
    college: 'Creighton University'
  }]

  module.exports = mockData;