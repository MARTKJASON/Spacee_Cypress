import dayjs from 'dayjs';

Cypress.Commands.add('selectRandomId', () => {
    const ids = ['#listing_4394', '#listing_5642', '#listing_5643', '#listing_4247'];
    const randomIndex = Math.floor(Math.random() * ids.length);
    const randomId = ids[randomIndex];
    cy.get(randomId);
  });


  Cypress.Commands.add('selectRandomDateTime', () => {
    const today = dayjs();
    const tomorrow = today.add(1, 'day');
    const nextYear = today.add(1, 'year');
  
    const randomYear = getRandomYear(today.year(), nextYear.year());
    const randomMonth = getRandomMonth(today, nextYear, randomYear);
    const randomDay = getRandomDay(today, randomMonth, randomYear);
  
    const startTime = getRandomTime(); // Generate random time in 24-hour format
  
    // Select the year
    cy.get('.mbsc-calendar-year').click()
    .select(randomYear.toString());
  
    // Select the month
    cy.get('.mbsc-calendar-month').click()
    .select(randomMonth.toString());
  
    // Select the day
    cy.get('.mbsc-calendar').select(randomDay.toString());
  
    cy.get('.mbsc-calendar').click();
    cy.get('.mbsc-calendar').contains(startTime).click();
  });

  function getRandomYear(startYear, endYear) {
    return Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  }
  
  function getRandomMonth(today, nextYear, randomYear) {
    const startMonth = (today.year() === randomYear) ? today.month() + 1 : 1;
    const endMonth = (nextYear.year() === randomYear) ? nextYear.month() : 12;
    return Math.floor(Math.random() * (endMonth - startMonth + 1)) + startMonth;
  }
  
  function getRandomDay(today, randomMonth, randomYear) {
    const startDay = (today.year() === randomYear && today.month() + 1 === randomMonth) ? today.date() + 1 : 1;
    const endDay = dayjs(`${randomYear}-${randomMonth}`).daysInMonth();
    return Math.floor(Math.random() * (endDay - startDay + 1)) + startDay;
  }
  
  function getRandomTime() {
    const hour = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    const minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    return `${hour}:${minute}`;
  }
  
  
  
  
  