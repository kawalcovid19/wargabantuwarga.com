import entityGroups from "~/data/wbw-lbh.json";

export type EntityGroup = {
  readonly id: number;
  readonly name: string;
  readonly slug: string;
  readonly data: LawFirm[];
};

export type LawFirm = {
  readonly id: string;
  readonly nama_lbh: string;
  readonly slug: string;
  readonly alamat?: string;
  readonly nomor_kontak?: string;
  readonly email?: string;
  readonly website?: string;
  readonly ig?: string;
  readonly twitter?: string;
  readonly facebook?: string;
  readonly youtube?: string;
  readonly link_donasi?: string;
  readonly verifikasi: number;
};

export default entityGroups as unknown as EntityGroup;
