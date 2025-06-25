# Word Filters

Word filters let you automatically replace specific words or phrases in posts and messages across your board.

This is a simple string replacement system — filters match exact words only. There is no support for pattern matching or wildcards.

You can access the filter settings from the **Board Config** section of the Admin Control Panel.

## Adding a Filter

To add a new filter, provide:

- **Text to replace**: The word or phrase you want to block.
- **Replacement**: What the word should be replaced with. This can be another word or a censored version (e.g. `****`)

![Add Filter](/screenshots/admin/word-filters.png)

Filters apply automatically to all new content posted by users, including forum posts, private messages, and topic titles.

## Notes

- Filters are applied after BBCode parsing.
- Filters apply globally across the entire board.
- You can update or remove filters at any time.

