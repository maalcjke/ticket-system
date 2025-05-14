/* @name resolve */
UPDATE tickets
SET
    status = :newStatus!::integer,
    reason = :reason::text
where id = :ticketId!::uuid;