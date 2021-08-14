# Contributing to WargaBantuWarga

## How to contribute

In this project, we are heavily utilising GitHub features to document and signal any progress in the website development.

### Finding or creating issues

Most contributions start from defining issues. Anyone can open an issue for discussion. You can head to [this link](https://guides.github.com/features/issues/) for deep understanding about Issues. Specifically, you can start finding several Issues in [our Issues tab](https://github.com/kawalcovid19/wargabantuwarga.com/issues). There are only two categories in Issues section, Open and Closed.

#### Open Issues

Open Issues are issues that need more attention and need to be resolved. Contributors should pick any of the Open Issues and start working on them.

#### Closed Issues

Closed Issues are issues that have been completed or doesn't need further action. Closed issues can be reopened if contributors find any issues related to it sometime in the future.

Please pay attention on every issue attribute. Every issue might be referenced by other contributors through [Linked Pull Requests](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). If an issue has a linked pull request, that means the issue is currently being handled. To avoid working on the same issue, contributors were strongly encouraged to submit a [draft pull request](https://github.blog/2019-02-14-introducing-draft-pull-requests/) first when they start working on an issue.

#### For Beginners: `good first issue` label

As mentioned [here](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/), `good first issue` is a label feature from GitHub which created to help beginner contributors in contributing to an open-source project. `good first issue` informed us about the difficulty level of an issue. This means that an issue with `good first issue` label suits perfectly for contributors that would like to have their first contribution to an open-source project.

How to find issues with `good first issue` label:

1. The easiest way is to go into the `github.com/<owner>/<repository>/contribute` link. In this case, you can go into [this link](https://github.com/kawalcovid19/wargabantuwarga.com/contribute). That link will list all of the issues with the `good first issue` label.
2. Another way is to head over into the [Issues](https://github.com/kawalcovid19/wargabantuwarga.com/issues) section of the repository, then click the Labels section beside Milestones. There you can see a lot of labels for the issues in the repository. Then find and click the `good first issue` label.

### Working on issues

#### Get ready

Before working on an issue, please make sure to:

1. Fork the repo properly. Even you have done it before, it's still advised that you read / skim [the official guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository).
2. Clone **your forked repository** and set it up by following the [Getting Started guide](https://github.com/kawalcovid19/wargabantuwarga.com#getting-started).
3. Check any open [pull requests](https://github.com/kawalcovid19/wargabantuwarga.com/pulls) that no one is working on the issue.
4. Create a new branch from the `main` branch.

#### Issue assignment & Communication

Once you're ready with your branch and have something to contribute, you'll want to
let everyone know that you are working on the issue. To communicate this, we
are using GitHub's Draft Pull Requests.

Draft Pull Request is like a regular Pull Request but it can't be merged until
it's marked as "ready for review". It signals other contributors that [it's a
work in progress](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).
This is necessary to signal other contributors that the work for the particular
issue has started and it is still in progress. Also, it is a better approach to
use as a communication tool between contributors because we can provide
additional information other than viewing the changed files.

Therefore, when you have at least one commit **it's important to create a Draft
Pull Request** to let everyone know that the issue is assigned to you.

#### Creating a Draft Pull Request

Steps to creating a Draft Pull Request:

1. Commit and push your new changes into the remote repository.
2. Head over to the Pull requests section on your forked repository, hit New pull request.
   ![Hint-1](https://user-images.githubusercontent.com/46013258/126284390-c2bd1aa6-fdc2-4aa6-a945-031f02db038e.png)
3. Pick your forked repository for the head repository, and compare with the branch that you are having changes in.
   ![Hint-2](https://user-images.githubusercontent.com/46013258/126285036-27b49325-62a2-4a6c-b216-5bae261788da.png)
4. Put a clear title and description in your pull request. Make sure the
   description follows [our guide below](#formatting-pull-request-description).
   ![Hint-3](https://user-images.githubusercontent.com/46013258/126286179-04341e30-1224-49cb-9b9a-3c3aee99c308.png)
5. Pick Create draft pull request (like in the image above) and hit the green button.
6. Don't forget to mark your Draft Pull Request as Ready for review after you commit all of the changes.

#### Formatting Pull Request Description

To properly [link a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue), there is one tiny requirement text to put in a Pull Request description.
Please make sure to mention the issue that you're working on correctly. Replace
this text `<!-- mention the issue that you're trying to close with this PR -->`
from the template with the issue number. Example:

```markdown
Closes #318

## Description

Update **`Start working on Issues`** section with clearer instructions on getting ready to work on an issue.
```

## FAQ

### Why are we using English in our issues & PRs?

There are several reasons we're using English while communicating in GitHub Issues & PRs:

1. It's more natural for software engineers to communicate in English because it involves many technical terms in English. Trying to translate them into Bahasa Indonesia posing a risk of miscommunication, while keeping them in English requires us to do a lot of _italic_ formatting, according to [PUEBI](https://puebi.js.org/huruf/miring).
2. It accustoms the contributors, which are mostly Indonesian, to communicate in English. It is important to increase our English reading and writing skills because the vast majority of the global open-source communities are using Engish as the main language.
3. It makes this project easier to be recognised globally. So if we need to get more support from the global communities, they could easily understand what we are doing and help us out with their access and competence. e.g., providing us free credits for their services, advocating us to global leaders, or contributing directly to our codebase.

## Additional Notes

### Issue and Pull Request Labels

Issue labels are a tool to group issues into one or more categories.
It helps us track and manage issues and pull requests.

Please open an issue on [`kawalcovid19/wargabantuwarga.com`](https://github.com/kawalcovid19/wargabantuwarga.com/issues) if you have suggestions for new labels.

#### Type of Issue and Issue State

| Label name         | `/wargabantuwarga.com`                                                                    | Description                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `blocked`          | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/blocked)              | Issues blocked by something else.                                                                                    |
| `bug`              | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/bug)                  | Confirmed bugs or reports that are very likely to be bugs.                                                           |
| `enhancement`      | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/enhancement)          | New feature or request.                                                                                              |
| `epic`             | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/epic)                 | A master issue thread which contains other smaller issues.                                                           |
| `good first issue` | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/good%20first%20issue) | Less complex issues which would be good first issues to work on for users who want to contribute to WargaBantuWarga. |
| `help wanted`      | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/help%20wanted)        | Issue that need extra attention.                                                                                     |
| `invalid`          | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/invalid)              | Issues which aren't valid (e.g. user errors).                                                                        |
| `question`         | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/question)             | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce).           |
| `wontfix`          | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/wontfix)              | The WargaBantuWarga team will not fix these issues for now.                                                          |

#### Topic Categories

| Label name                    | `/wargabantuwarga.com`                                                                             | Description                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `ci-cd`                       | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/ci-cd)                         | Continuous Integration & Continuous Delivery.              |
| `design`                      | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/design)                        | Issue related to design.                                   |
| `documentation`               | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/documentation)                 | Improvements or additions to documentation.                |
| `dx`                          | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/dx)                            | Developer Experience.                                      |
| `ui`                          | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/ui)                            | User interface.                                            |
| `ux`                          | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/ux)                            | User experience.                                           |
| `seo`                         | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/seo)                           | Search engine optimization.                                |
| `scripting`                   | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/scripting)                     | Issue related to the code.                                 |
| `testing`                     | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/testing)                       | Automated testing.                                         |
| `netlify-cms/draft`           | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/netlify-cms%2Fdraft)           | Draft for content changes in Netlify CMS.                  |
| `netlify-cms/pending_publish` | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/netlify-cms%2Fpending_publish) | Content changes ready to be published through Netlify CMS. |
| `netlify-cms/pending_review`  | [search](https://github.com/kawalcovid19/wargabantuwarga.com/labels/netlify-cms%2Fpending_review)  | Content changes pending review in Netlify CMS.             |
