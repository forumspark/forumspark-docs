# Section Management

ForumSpark gives you fine-grained control over your board structure by letting you create and manage individual sections. Sections can be either **categories** (containers) or **forums** (postable areas), depending on how you configure them.

## Watch: Setting Up a Basic Forum Structure

<iframe width="560" height="315" src="https://www.youtube.com/embed/mZKQpxHsypk?si=-rnb-xVBhIm21w8b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you're just getting started, this short video walks through the basics of creating categories and forums using the Admin CP.

## Accessing the Admin Panel

To begin managing sections, access your Admin Control Panel through the User menu in the top-right navigation bar. Select **"Admin CP"** from the dropdown.

Once inside, look under the **Forum Sections** menu and click **"Create Sections"**.

## Creating a New Section

When creating a new section, start by providing the basic information:

- **Location**: Select where this section should appear in the forum hierarchy. You can create a top-level category or place this forum under an existing section.
- **Name**: The title of the section. This will be shown in the forum index.
- **Description**: A short summary explaining the section's purpose. BBCode is supported here.

![Create Forum View](/screenshots/admin/create-forum.png)

## Posting Controls

These options determine how users can interact with the section:

- **Allow posting**: If disabled, the section becomes a container and cannot contain topics.
- **Post count enabled**: Determines whether posts in this section contribute to the user’s post count.
- **Allow users to create polls**: Enables poll creation inside topics.
- **Enable best answer**: Lets topic authors select a best answer, useful for Q&A-style sections.
- **Users can only see topics made by themselves**: Useful for support areas or private submissions. Admins and moderators can still see all topics.

## Templates

You can select a **template** to be prefilled when users create a new topic in this section. This is helpful for guiding users in structured posts like bug reports, feedback, or applications.

## Topic Sorting & Redirection

- **Sort topics by**: Choose the default topic order (e.g., latest reply time, creation date).
- **Sort direction**: Ascending or descending.
- **Redirect forum**: Turn this section into a redirect link to another URL.

## Forum Access

Permissions are assigned per user group for the following actions:

- **View**: Whether users can see the section exists
- **Read**: Whether they can read individual topics
- **Reply**: Whether they can post replies
- **Start**: Whether they can start new topics

These settings let you define public, private, or restricted-access sections depending on your needs.

## Forum Moderators

You can assign moderators to a section by selecting one or more **user groups**. Any users within these groups will receive elevated privileges in this section, regardless of their global role.

At this time, **individual users cannot be assigned as section moderators** directly. This is an intentional design choice to keep moderation roles easier to manage and consistent at the group level.

## Tips

- Use containers for grouping related forums without allowing posting.
- Support-style sections often benefit from enabling the "users can only see their own topics" option.
- You can update or reorganize sections at any time by editing them in the Section Manager.
