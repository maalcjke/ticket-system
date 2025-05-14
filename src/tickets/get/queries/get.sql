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
WHERE created_at >= :dateFrom::timestamp
  AND created_at <= :dateTo::timestamp
ORDER BY created_at DESC
LIMIT :limit::int
OFFSET :offset::int;