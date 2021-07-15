# Warga Bantu Warga

A society initiative to circulate information about health facilities and devices for COVID-19.

## Purpose and Principles

TThe purpose of this website is to republish publicly accessible Google Docs to be more mobile-friendly and performant.

> Why using Google Docs?

We are using Google Docs so that our content contributors can collaborate easily without the hassle of conventional CMSes.

### Principles

> What we're striving for:

#### ✅ Performance

Our website must be high-performant because our audience spread across Indonesia with varying types of devices and network speed. A good measurement of it is Google's [Core Web Vitals](https://web.dev/vitals/).

#### ✅ Accessibility

Our website must be accessible so that we can reach more users and help more people.

#### ✅ Up-to-date Information

Any information posted on our website must be up-to-date to the latest version that our content editors published. We can tolerate delays to a certain degree for the sake of web performance, but it should be limited to less than an hour.

> What we're going against:

#### ❌ Counter-productive Cosmetics

We can't afford to hurt web performance or to provide outdated information just for the sake of the beauty of the website.

#### ❌ Expensive Functionalities

We must carefully consider any additional client-side libraries that we include on the website. Unless its benefits outweigh the trade-off that we have to pay, we should avoid adding the functionality. Even if it is proven to be beneficial, we should strive to implement it in the best possible way. An excellent example of it is [Google Analytics](https://github.com/kawalcovid19/wargabantuwarga.com/issues/18).

#### ❌ Unmeasured Improvements

For any improvements on the website, we should continuously measure its impact on the [Core Web Vitals](https://web.dev/vitals/). If proven to hurt the metrics, we should revert the changes and find another way to implement them without degrading the performance.

## Getting Started

First, install dependencies and fetch data to your local machine

```bash
cd wargabantuwarga.com
yarn install
yarn fetch-wbw
```

Then, run the development server:

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
- [Convert .ico](https://icoconvert.com)

## Contributing

See our [contributing guidelines](CONTRIBUTING.md).
