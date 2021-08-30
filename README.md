# Warga Bantu Warga

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-47-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

[![codecov](https://codecov.io/gh/kawalcovid19/wargabantuwarga.com/branch/main/graph/badge.svg?token=zFsEIQ4bhy)](https://codecov.io/gh/kawalcovid19/wargabantuwarga.com) [![CI](https://github.com/kawalcovid19/wargabantuwarga.com/actions/workflows/test.yml/badge.svg)](https://github.com/kawalcovid19/wargabantuwarga.com/actions/workflows/test.yml) [![Deploy](https://github.com/kawalcovid19/wargabantuwarga.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/kawalcovid19/wargabantuwarga.com/actions/workflows/deploy.yml) [![Web Perf Check](https://github.com/kawalcovid19/wargabantuwarga.com/actions/workflows/lighthouse-ci-prod.yml/badge.svg)](https://github.com/kawalcovid19/wargabantuwarga.com/actions/workflows/lighthouse-ci-prod.yml)

A society initiative to circulate information about health facilities and devices for COVID-19.

## Purpose, Principles, and Guidelines

The purpose of this website is to republish publicly accessible Google Docs to be more mobile-friendly and performant.

> Why using Google Docs?

We are using Google Docs so that our content contributors can collaborate easily without the hassle of conventional CMSes.

### Principles

> What we're striving for:

#### ✅ Performance

Our website must be high-performant because our audience is spread across Indonesia with varying types of devices and network speed. A good measurement of it is Google's [Core Web Vitals](https://web.dev/vitals/).

#### ✅ Accessibility

Our website must be accessible so that we can reach more users and help more people.

#### ✅ Up-to-date Information

Any information posted on our website must be up-to-date to the latest version that our content editors published. We can tolerate delays to a certain degree for the sake of web performance, but it should be limited to less than an hour.

#### ✅ Iterative, Incremental Changes

Software development is **complex, cognitive work**. The simpler we can make something, then generally the easier it is to do. Similarly, the less amount of moving parts a software component has, the less prone it is to errors, and the less maintenance burden it gives us.

One of the simplest ways to reduce complexity is to reduce the scope. We can often postpone the less valuable parts of a large issue and do them later in order to get the most valuable parts into our user's hands faster.

> What we're going against:

#### ❌ Counter-productive Cosmetics

We can't afford to hurt web performance or to provide outdated information just for the sake of the beauty of the website.

#### ❌ Expensive Functionalities

We must carefully consider any additional client-side libraries that we include on the website. Unless its benefits outweigh the trade-off that we have to pay, we should avoid adding the functionality. Even if it is proven to be beneficial, we should strive to implement it in the best possible way. An excellent example of it is [Google Analytics](https://github.com/kawalcovid19/wargabantuwarga.com/issues/18).

#### ❌ Unmeasured Improvements

For any improvements on the website, we should continuously measure its impact on the [Core Web Vitals](https://web.dev/vitals/). If proven to hurt the metrics, we should revert the changes and find another way to implement them without degrading the performance.

### Testing Guidelines

In general, these are three guidelines that we need to pay attention to:

1. [Query priorities](https://testing-library.com/docs/queries/about#priority)
2. [Testing appearance and disappearance](https://testing-library.com/docs/guide-disappearance/)
3. [Opting in for interactions instead of events](https://testing-library.com/docs/guide-events/#interactions-vs-events)

Please ensure that all queries and assertions in your test files comply with those testing guidelines.

## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/kawalcovid19/wargabantuwarga.com.git
```

Then, install dependencies and fetch data to your local machine. **Note that we use Yarn, not npm.**

```bash
cd wargabantuwarga.com
yarn install
yarn mirror-box
```

Finally, run the development server.

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Frequently Used Tools

- [Measure Web Performance](https://web.dev/measure)
- [Measure Web Security](https://securityheaders.com/?q=https%3A%2F%2Fwww.wargabantuwarga.com%2F&followRedirects=on)
- [Convert .ico](https://icoconvert.com)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/)
- [Testing Playground](https://testing-playground.com/)

## Supporters

Special thanks goes to our supporters.

<p align="center">
  <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"><img height="80" src="https://user-images.githubusercontent.com/5663877/129595637-48c212e9-ac98-4e2f-943e-2c04b80ea888.png" alt="Netlify"></a>
  <a href="https://www.gitbook.com/" target="_blank" rel="noopener noreferrer"><img height="80" src="https://user-images.githubusercontent.com/56619123/128886904-5887e9e2-e444-4db5-81f8-5cd33a3d79ad.png" alt="GitBook Logo"></a>
  <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer"><img height="80" alt="Cypress" src="https://user-images.githubusercontent.com/5663877/129580266-2c4ac4a9-8a9b-4e2d-b0cd-2e3ea8568333.png" /></a>
</p>

## Contributing

See our contribution guidelines in these languages:

- [English](CONTRIBUTING.md)
- [Indonesian](CONTRIBUTING_ID.md)

When contributing to our project, please use English when communicating with other people in issues and/or pull requests. [Click here](CONTRIBUTING.md#why-are-we-using-english-in-our-issues--prs) to read why. ([Bahasa Indonesia](CONTRIBUTING_ID.md#mengapa-kita-menggunakan-bahasa-inggris-dalam-menulis-issue-dan-pull-request))

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://zainf.dev"><img src="https://avatars.githubusercontent.com/u/6315466?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zain Fathoni</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=zainfathoni" title="Code">💻</a> <a href="#projectManagement-zainfathoni" title="Project Management">📆</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=zainfathoni" title="Documentation">📖</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Azainfathoni" title="Reviewed Pull Requests">👀</a> <a href="#a11y-zainfathoni" title="Accessibility">️️️️♿️</a> <a href="#ideas-zainfathoni" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-zainfathoni" title="Maintenance">🚧</a> <a href="#mentoring-zainfathoni" title="Mentoring">🧑‍🏫</a> <a href="#security-zainfathoni" title="Security">🛡️</a> <a href="#tool-zainfathoni" title="Tools">🔧</a> <a href="#translation-zainfathoni" title="Translation">🌍</a></td>
    <td align="center"><a href="https://resir014.xyz"><img src="https://avatars.githubusercontent.com/u/5663877?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Resi Respati</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=resir014" title="Code">💻</a> <a href="#design-resir014" title="Design">🎨</a> <a href="#a11y-resir014" title="Accessibility">️️️️♿️</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=resir014" title="Documentation">📖</a> <a href="#ideas-resir014" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-resir014" title="Maintenance">🚧</a> <a href="#mentoring-resir014" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-resir014" title="Project Management">📆</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Aresir014" title="Reviewed Pull Requests">👀</a> <a href="#security-resir014" title="Security">🛡️</a> <a href="#tool-resir014" title="Tools">🔧</a> <a href="#translation-resir014" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/ekamuktia"><img src="https://avatars.githubusercontent.com/u/9606523?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ekamuktia</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Aekamuktia" title="Bug reports">🐛</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ekamuktia" title="Code">💻</a> <a href="#ideas-ekamuktia" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-ekamuktia" title="Maintenance">🚧</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Aekamuktia" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://dev.to/@ekafyi"><img src="https://avatars.githubusercontent.com/u/6597211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eka</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ekafyi" title="Code">💻</a> <a href="#design-ekafyi" title="Design">🎨</a> <a href="#ideas-ekafyi" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-ekafyi" title="Maintenance">🚧</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Aekafyi" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://mazipan.space"><img src="https://avatars.githubusercontent.com/u/7221389?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Irfan Maulana</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Amazipan" title="Bug reports">🐛</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=mazipan" title="Code">💻</a> <a href="#ideas-mazipan" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-mazipan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-mazipan" title="Maintenance">🚧</a> <a href="#mentoring-mazipan" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Amazipan" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://taxfix.de"><img src="https://avatars.githubusercontent.com/u/6219895?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aditya Purwa</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=adityapurwa" title="Code">💻</a> <a href="#ideas-adityapurwa" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-adityapurwa" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-adityapurwa" title="Maintenance">🚧</a> <a href="#tool-adityapurwa" title="Tools">🔧</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/hanihusam/"><img src="https://avatars.githubusercontent.com/u/25399426?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hani Husamuddin</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=hanihusam" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nibraswastaken"><img src="https://avatars.githubusercontent.com/u/74199335?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nibraswastaken</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=nibraswastaken" title="Code">💻</a> <a href="#infra-nibraswastaken" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#tool-nibraswastaken" title="Tools">🔧</a> <a href="#ideas-nibraswastaken" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://kalwabed.xyz"><img src="https://avatars.githubusercontent.com/u/49640654?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kalwabed Rizki</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=kalwabed" title="Documentation">📖</a> <a href="#translation-kalwabed" title="Translation">🌍</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=kalwabed" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ihsanrabb"><img src="https://avatars.githubusercontent.com/u/47909781?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ihsanrabb</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ihsanrabb" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/emer7"><img src="https://avatars.githubusercontent.com/u/21377166?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gilbert Emerson</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=emer7" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://andriawan.com"><img src="https://avatars.githubusercontent.com/u/13099373?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Muhammad Irwan Andriawan</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=andriawan" title="Documentation">📖</a> <a href="#ideas-andriawan" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Aandriawan" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://tjandradarmo.me"><img src="https://avatars.githubusercontent.com/u/46013258?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tjandra Darmo</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=TjandraD" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Namchee"><img src="https://avatars.githubusercontent.com/u/32661241?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cristopher</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=Namchee" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=Namchee" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/faizrktm"><img src="https://avatars.githubusercontent.com/u/46273747?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Faiz Azmi Rekatama</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=faizrktm" title="Code">💻</a> <a href="#tool-faizrktm" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/ardiwilda"><img src="https://avatars.githubusercontent.com/u/87063733?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ardiwilda</b></sub></a><br /><a href="#content-ardiwilda" title="Content">🖋</a></td>
    <td align="center"><a href="http://linkedin.com/in/kevinmingtarja/"><img src="https://avatars.githubusercontent.com/u/69668484?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Mingtarja</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=kevinmingtarja" title="Code">💻</a></td>
    <td align="center"><a href="https://renggaprakosonugroho.my.id/"><img src="https://avatars.githubusercontent.com/u/14950309?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rengga Prakoso Nugroho</b></sub></a><br /><a href="#content-vzrenggamani" title="Content">🖋</a></td>
    <td align="center"><a href="https://fatihkalifa.com"><img src="https://avatars.githubusercontent.com/u/1614415?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fatih Kalifa</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=pveyes" title="Documentation">📖</a> <a href="#design-pveyes" title="Design">🎨</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/pulls?q=is%3Apr+reviewed-by%3Apveyes" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=pveyes" title="Code">💻</a></td>
    <td align="center"><a href="http://kitabisa.com"><img src="https://avatars.githubusercontent.com/u/23743497?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bara E. Brahmantika</b></sub></a><br /><a href="#ideas-baraeb92" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-baraeb92" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#projectManagement-baraeb92" title="Project Management">📆</a></td>
    <td align="center"><a href="https://suliskh.com"><img src="https://avatars.githubusercontent.com/u/24476578?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kukuh Sulistyo</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=suliskh" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ekiriandra-seo"><img src="https://avatars.githubusercontent.com/u/85287011?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ekiriandra-seo</b></sub></a><br /><a href="#ideas-ekiriandra-seo" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/syauqy"><img src="https://avatars.githubusercontent.com/u/3627108?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Syauqy Nurul Aziz</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=syauqy" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=syauqy" title="Documentation">📖</a></td>
    <td align="center"><a href="https://linktr.ee/funfuncfunction"><img src="https://avatars.githubusercontent.com/u/50759463?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Muhammad Fauzan</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=fncolon" title="Documentation">📖</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=fncolon" title="Code">💻</a> <a href="#ideas-fncolon" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://hendraaagil.space"><img src="https://avatars.githubusercontent.com/u/54741166?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hendra Agil Syaputra</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=hendraaagil" title="Code">💻</a></td>
    <td align="center"><a href="http://kusiaga.com"><img src="https://avatars.githubusercontent.com/u/19145812?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Burhan Ahmed</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=burhanahmeed" title="Code">💻</a></td>
    <td align="center"><a href="http://mukhlis.id"><img src="https://avatars.githubusercontent.com/u/27577560?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mukhlis</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=mukhlisakbr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/nkristoporus"><img src="https://avatars.githubusercontent.com/u/35729243?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kristoporus Nathan Wilianto</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=nkristoporus" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/abui-am"><img src="https://avatars.githubusercontent.com/u/50738961?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abui</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=abui-am" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/ramarahmanda"><img src="https://avatars.githubusercontent.com/u/12446260?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ramarahmanda</b></sub></a><br /><a href="#ideas-ramarahmanda" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ramarahmanda" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/morezam"><img src="https://avatars.githubusercontent.com/u/74182139?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohammad Hamzehei</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=morezam" title="Code">💻</a></td>
    <td align="center"><a href="http://doni.dev"><img src="https://avatars.githubusercontent.com/u/7299491?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Doni Rubiagatra</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=rubiagatra" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://umarhadi.dev"><img src="https://avatars.githubusercontent.com/u/31447862?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Umar Hadi Siswanto</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=umarhadi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Widi-ps"><img src="https://avatars.githubusercontent.com/u/69189062?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Widi-ps</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3AWidi-ps" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.ryanadhi.tech/"><img src="https://avatars.githubusercontent.com/u/35433920?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Adhi</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ryanadhi" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=ryanadhi" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/maziyank"><img src="https://avatars.githubusercontent.com/u/3317904?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bakhtiar Amaludin</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=maziyank" title="Code">💻</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Amaziyank" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/asaadam"><img src="https://avatars.githubusercontent.com/u/1397612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Akbar</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=asaadam" title="Code">💻</a> <a href="#security-asaadam" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/dekwahdimas"><img src="https://avatars.githubusercontent.com/u/56619123?v=4?s=100" width="100px;" alt=""/><br /><sub><b>IGN Bagus Dimas W.</b></sub></a><br /><a href="#example-dekwahdimas" title="Examples">💡</a> <a href="#data-dekwahdimas" title="Data">🔣</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=dekwahdimas" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.narainvitation.com"><img src="https://avatars.githubusercontent.com/u/13805020?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nasrul Gunawan</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=nasrulgunawan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/iamyuu"><img src="https://avatars.githubusercontent.com/u/45778229?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yusuf</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=iamyuu" title="Code">💻</a></td>
    <td align="center"><a href="https://fadil.dev/"><img src="https://avatars.githubusercontent.com/u/10627998?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nur Fadillah Fajar</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=fadillicious" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/renomureza"><img src="https://avatars.githubusercontent.com/u/49445216?v=4?s=100" width="100px;" alt=""/><br /><sub><b>R.M. Reza</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=renomureza" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://adindap.com"><img src="https://avatars.githubusercontent.com/u/70412?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adinda Praditya</b></sub></a><br /><a href="#security-apraditya" title="Security">🛡️</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=apraditya" title="Documentation">📖</a></td>
    <td align="center"><a href="http://albarranaufala.github.io/albarra-portfolio"><img src="https://avatars.githubusercontent.com/u/54704525?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Albarra Naufala Erdanto</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/issues?q=author%3Aalbarranaufala" title="Bug reports">🐛</a> <a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=albarranaufala" title="Code">💻</a></td>
    <td align="center"><a href="http://adibfirman.github.io"><img src="https://avatars.githubusercontent.com/u/24794196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adib Firman</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=adibfirman" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/ranggarppb"><img src="https://avatars.githubusercontent.com/u/44335152?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rangga Putra Pertama</b></sub></a><br /><a href="#tool-ranggarppb" title="Tools">🔧</a></td>
    <td align="center"><a href="https://wisesa.dev"><img src="https://avatars.githubusercontent.com/u/35674157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anvaqta Tangguh Wisesa</b></sub></a><br /><a href="https://github.com/kawalcovid19/wargabantuwarga.com/commits?author=svspicious" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
