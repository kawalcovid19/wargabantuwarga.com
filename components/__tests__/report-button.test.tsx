import React from "react";

import { ReportButton } from "../report-button";

import { render } from "@testing-library/react";

describe("ReportButton", () => {
  it("opens the form link with correct query params on click", () => {
    render(
      <ReportButton
        contact={{
          id: "225",
          kebutuhan: "Ambulans",
          keterangan: "Jasa Sewa Ambulans",
          lokasi: "DKI Jakarta",
          penyedia: "Ambulancesiaga.com",
          slug: "ambulancesiaga.com-225",
          kontak:
            '<a target="_blank" rel="noreferrer" href="https://www.google.com/url?q=http://wa.me/6281517520208&amp;sa=D&amp;source=editors&amp;ust=1626879109270000&amp;usg=AOvVaw0c9-raS-WAMi1G0iOua18v">081517520208</a>',
          alamat: "",
          link: "",
          tambahan_informasi:
            "Jasa ambulance bisa pengantaran ke luar kota, jam operasional 24 jam, Melayani pasien covid maupun jenazah covid. Terdapat paket untuk peti jenazah",
          terakhir_update: "15/7/2021",
          verifikasi: 1,
          bentuk_verifikasi: "Verifikasi via Telepon",
        }}
        provinceName="DKI Jakarta"
      />,
    );
    // TODO: Perform assertions
  });
});
