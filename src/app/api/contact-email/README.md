# Contact Email Form

Author: Halvor Brunt. DM if any questions.

## Packages

Uses Node package `node-mailer`.

## Flow

1. User fills in form, and submits
2. Input is validated on client side
3. Input is validated at server side (api) (see notes below)
4. `contact-email` Api sends an email to `frivilig@hulen.no` with the provided email in 'cc' (copy).


Notes:
- Whether the job (verv) is in fact correct is not validated on server-side. Would require an e
- If either or both emails have correct syntax, but are not a valid emails according to the mailservers, no error is thrown. Then a failure email is sent to the `videresending@hulen.no`. Fixing this would require sending an email in advance with a confirmation-link. Which is unecessary. Instead we prompt the user to check that they got a confirmation mail instead



