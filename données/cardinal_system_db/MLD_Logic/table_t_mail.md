# Table : T_MAIL

```sql
CREATE TABLE T_MAIL (
    mail_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id       UUID NOT NULL REFERENCES T_AVATARS(avatar_id),
    recipient_id    UUID NOT NULL REFERENCES T_AVATARS(avatar_id),
    subject         VARCHAR(100) NOT NULL,
    body            TEXT,
    attached_yrds   INT DEFAULT 0 CHECK (attached_yrds >= 0),
    attached_item   VARCHAR(30) REFERENCES T_ITEMS_DICT(item_id),
    attached_qty    INT DEFAULT 0,
    status          VARCHAR(10) DEFAULT 'unread' CHECK (status IN ('unread','read','claimed','expired')),
    sent_at         TIMESTAMP DEFAULT NOW(),
    expires_at      TIMESTAMP DEFAULT (NOW() + INTERVAL '30 days')
);

CREATE INDEX idx_mail_recipient ON T_MAIL(recipient_id, status);
```
