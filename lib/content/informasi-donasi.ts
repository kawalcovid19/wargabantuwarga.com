import informasiDonasi from "~/_content/donasi/informasi-donasi.json";

export type Donations = Donation[];

export type Donation = {
  readonly donations: DonationDetail[];
};
export type DonationDetail = {
  readonly name: string;
  readonly url: string;
  readonly image: string;
  readonly description: string;
};

export default informasiDonasi as unknown as Donation;
