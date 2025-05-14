/* @name create */
INSERT INTO tickets (status, title, body, reason)
VALUES (:status, :title, :body, :reason);
