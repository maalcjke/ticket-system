/* @name status */
UPDATE tickets
SET
    status = :newStatus!::integer,
    reason = :reason::text
where id = :ticketId!::uuid;

/* @name statusAll */
UPDATE tickets
SET status = :newStatus
WHERE status = :oldStatus;