/*
    @name create
    @param tickets -> ((status, title, body, reason)...)
*/
INSERT INTO tickets (status, title, body, reason)
VALUES :tickets;
