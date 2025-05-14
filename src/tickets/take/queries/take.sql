/* @name take */
UPDATE tickets
SET status = :newStatus!::integer
where id = :ticketId!::uuid;