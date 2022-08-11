function winningTicket(str) {
  const tickets = str.trim().split(/\s*,\s*/);
  const pattern =
    /(?=.{20}).*?(?=(?<char>[@#$^]))(?<match>\k<char>{6,}).*(?<=.{10})\k<match>.*/;

  for (const ticket of tickets) {
    const validTicket = pattern.exec(ticket);

    if (validTicket) {
      const len = validTicket.groups.match.length;
      const char = validTicket.groups.char;

      if (len >= 6) {
        let message = `ticket "${ticket}" - ${len}${char}`;

        if (len === 10) {
          message += ' Jackpot!';
        }

        console.log(message);
      }
    } else if (ticket.length !== 20) {
      console.log('invalid ticket');
    } else {
      console.log(`ticket "${ticket}" - no match`);
    }
  }
}

winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');
// winningTicket('$$$$$$$$$$$$$$$$$$$$');
