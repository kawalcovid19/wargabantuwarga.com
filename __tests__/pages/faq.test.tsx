import React from "react";

// import { faqBuilder } from "~/lib/__mocks__/builders/faq";
// import faqs from "~/lib/data/faqs";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FaqPage from "../../pages/faq";

// import { perBuild } from "@jackfranklin/test-data-bot";

jest.mock("~/lib/data/faqs");
jest.mock("next/router", () => require("next-router-mock"));

describe("FaqPage", () => {
  it("renders the title correctly", () => {
    render(<FaqPage />);

    expect(screen.getByText(/pertanyaan yang sering ditanyakan/i))
      .toMatchInlineSnapshot(`
      <h1
        class="text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate"
      >
        Pertanyaan yang sering ditanyakan
      </h1>
    `);
  });

  it("renders the questions and answers correctly", () => {
    render(<FaqPage />);

    setTimeout(() => {
      expect(
        screen.getByText(
          "Apakah boleh beraktivitas setelah isoman tapi hasil pcr masih positive?",
        ),
      ).toBeVisible();
      expect(
        screen.getByText(
          "Asalkan di akhir isolasi anda sudah tidak bergejala, anda dinyatakan sudah bebas isolasi. Tetap patuhi prokes saat beraktivitas.",
        ),
      ).toBeVisible();
    }, 200);
  });

  it("renders the links correctly", () => {
    render(<FaqPage />);

    setTimeout(() => {
      const link = screen.getByText(
        "Protokol Tata Laksana COVID-19, Buku Saku Ed. 2",
      );

      expect(screen.getByText(/sumber:/i)).toBeVisible();
      expect(link).toBeVisible();
      expect(link).toHaveAttribute(
        "href",
        "https://covid19.go.id/p/protokol/protokol-tatalaksana-covid-19-di-indonesia",
      );
    }, 200);
  });

  it("renders the source without link correctly", () => {
    render(<FaqPage />);

    setTimeout(() => {
      expect(screen.getByText(`Sumber: Saran Dokter`)).toBeVisible();
    }, 200);
  });

  it("performs the search functionality correctly", () => {
    const firstJawaban =
      "Kontrol di Fasilitas Kesehatan Tingkat Pertama (Puskesmas) setelah 10 hari karantina untuk pemantauan klinis (jika tanpa gejala).";
    const secondJawaban =
      "Tanpa gejala / derajat ringan tidak perlu dirawat di rumah sakit. Derajat sedang / berat lebih baik dirawat di rumah sakit.";

    render(<FaqPage />);

    setTimeout(() => {
      expect(screen.getByText(firstJawaban)).toBeVisible();

      userEvent.type(
        screen.getByRole("textbox", {
          name: /cari pertanyaan:/i,
        }),
        secondJawaban,
      );
      userEvent.click(
        screen.getByRole("button", {
          name: /cari/i,
        }),
      );

      expect(screen.queryByText(firstJawaban)).not.toBeInTheDocument();
      expect(screen.getByText(secondJawaban)).toBeVisible();
    }, 200);
  });

  it("performs the filter functionality correctly", () => {
    const firstJawaban =
      "Kontrol di Fasilitas Kesehatan Tingkat Pertama (Puskesmas) setelah 10 hari karantina untuk pemantauan klinis (jika tanpa gejala).";
    const secondKategori = "Kontak Erat";
    const secondJawaban = "2-14 hari";

    render(<FaqPage />);

    setTimeout(() => {
      expect(screen.getByText(firstJawaban)).toBeVisible();

      userEvent.selectOptions(
        screen.getByRole("combobox", {
          name: /kategori pertanyaan/i,
        }),
        secondKategori,
      );

      expect(screen.queryByText(firstJawaban)).not.toBeInTheDocument();
      expect(screen.getByText(secondJawaban)).toBeVisible();
    }, 200);
  });
});
