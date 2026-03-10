# Custom Domains

ForumSpark allows you to connect your own domain name to your forum board. Instead of using the default `yourboard.forumspark.net` address, you can serve your forum from a domain like `forum.example.com`.

You can manage custom domains from the **ForumSpark** section in the Admin Control Panel.

[[toc]]

## Adding a Domain

To add a custom domain, go to **ForumSpark > Domain Manager** and enter your domain name.

The domain must be a valid fully qualified domain name. For example:

- `forum.example.com`
- `community.mysite.org`
- `example.com`

![Add Custom Domain](/screenshots/admin/add-domain.png)

## Setting Up DNS

Before your domain can be verified, you need to create a **CNAME record** with your domain provider that points to the ForumSpark infrastructure.

1. Log in to your domain registrar or DNS provider.
2. Create a new **CNAME** record for your domain.
3. Set the target/value to the address shown in the Admin CP.
4. Save the record and wait for DNS propagation (this can take up to 48 hours, but is usually much faster).

> Note: DNS changes can take time to propagate. If verification fails initially, try again after a few minutes.

## Verification

After adding a domain, ForumSpark will automatically attempt to verify it by checking the CNAME record. The verification process runs shortly after the domain is added.

- **Pending**: The domain has been added but is not yet verified.
- **Verified**: The CNAME record has been confirmed and the domain is ready to use.

If verification fails, check that your CNAME record is correctly configured and try again.

## Primary Domain

Once a domain is verified, you can set it as your board's **primary domain**. The primary domain is the address that ForumSpark will use as the canonical URL for your board.

If no custom domain is configured, your board will continue to be accessible via the default `yourboard.forumspark.net` address.

## Removing a Domain

You can delete a custom domain at any time from the Domain Manager. However, you cannot delete the domain you are currently accessing the board through.

## Notes

- You can add multiple custom domains to your board.
- Only verified domains can be set as the primary domain.
- SSL certificates are provisioned automatically for verified custom domains.
- If you remove your primary custom domain, the board will fall back to the default ForumSpark subdomain.
