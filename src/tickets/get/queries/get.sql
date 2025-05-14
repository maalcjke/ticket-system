/* @name get */
SELECT
    id,
    status,
    title,
    body,
    reason,
    created_at,
    updated_at
FROM tickets
WHERE created_at >= to_timestamp(:dateFrom, 'DD.MM.YYYY')
  AND created_at <= to_timestamp(:dateTo, 'DD.MM.YYYY') + INTERVAL '1 day' - INTERVAL '1 second'
ORDER BY created_at DESC
LIMIT :limit::int
OFFSET :offset::int;