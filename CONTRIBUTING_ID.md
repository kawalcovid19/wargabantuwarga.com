# Berkontribusi ke WargaBantuWarga

- [Cara berkontribusi](#cara-berkontribusi)
  - [Menemukan atau membuat _issues_](#menemukan-atau-membuat-issues)
    - [_Open Issues_](#open-issues)
    - [_Closed Issues_](#closed-issues)
    - [Untuk Pemula: label _`good first issue`_](#untuk-pemula-label-good-first-issue)
  - [Panduan bekerja](#panduan-bekerja)
    - [Persiapan](#persiapan)
    - [Penugasan _issue_ & komunikasi](#penugasan-issue--komunikasi)
    - [Pembuatan _Draft Pull Request_](#pembuatan-draft-pull-request)
    - [Pemberian deskripsi _pull pequest_](#pemberian-deskripsi-pull-request)
    - [Menonaktifkan GitHub Actions](#menonaktifkan-github-actions)
- [Pertanyaan yang sering ditanyakan](#pertanyaan-yang-sering-ditanyakan)
  - [Mengapa kita menggunakan bahasa Inggris dalam menulis _issue_ dan _pull request_?](#mengapa-kita-menggunakan-bahasa-inggris-dalam-menulis-issue-dan-pull-request)
- [Catatan Tambahan](#catatan-tambahan)
  - [Label pada _issue_ dan _pull request_](#label-pada-issue-dan-pull-request)
    - [Tipe _Issue_ and _Issue State_](#tipe-issue-and-issue-state)
    - [Kategori](#kategori)

## Cara berkontribusi

Dalam proyek ini, kita memaksimalkan penggunaan fitur-fitur GitHub untuk mendokumentasikan dan memberikan sinyal terhadap kemajuan apapun dalam pengerjaan website ini.

### Menemukan atau membuat _issues_

Sebagian besar kontribusi berawal dari membuat _Issues_. Tiap orang dapat memulai membuat _Issues_ untuk diskusi. Anda dapat mengunjungi [pranala ini](https://guides.github.com/features/issues/) untuk pemahaman lebih lanjut mengenai _Issues_. Secara spesifik, Anda dapat menemukan _Issues_ [di tab **Issues** ini](https://github.com/kawalcovid19/wargabantuwarga.com/issues). Hanya ada dua kategori bagian pada _Issues_, yakni _Open_ dan _Closed Issues_.

#### _Open Issues_

_Open Issues_ merupakan kategori yang membutuhkan perhatian lebih serta penyelesaian. Kontributor disarankan menelusuri bagian _Open Issues_ dan mulai mengerjakannya.

#### _Closed Issues_

_Closed Issues_ merupakan kategori _issue_ yang sudah selesai dikerjakan atau tidak membutuhkan aksi lanjutan. _Issue_ dengan status _closed_ dapat kembali diubah menjadi _open_ ketika kontibutor menemukan _issue_ yang berhubungan di masa mendatang.

Mohon perhatikan tiap atribut _issue_. Tiap _issue_ kemungkinan dikerjakan oleh kontributor lain melalui [_Linked Pull Requests_](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). Ini berarti _issue_ sedang dalam penanganan. Untuk menghindari pekerjaan yang sama, kontributor sangat dianjurkan untuk mengajukan sebuah [_draft pull request_](https://github.blog/2019-02-14-introducing-draft-pull-requests/) terlebih dahulu setiap kali hendak mengerjakan suatu _issue_.

#### Untuk Pemula: label _`good first issue`_

Seperti yang tertulis [di sini](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/), _`good first issue`_ merupakan sebuah fitur label dari GitHub yang diciptakan untuk membantu para kontributor pemula dalam berkontribusi ke sebuah proyek _open-source_. _`good first issue`_ memberitakan kita mengenai tingkat kesulitan dari sebuah _issue_. Ini berarti, bahwa sebuah _issue_ dengan label _`good first issue`_ cocok sekali bagi kontributor pemula yang ingin melakukan kontribusi pertama mereka ke sebuah proyek _open-source_.

Bagaimana cara mencari _issue_ dengan label _`good first issue`_:

1. Cara paling mudah adalah dengan mengunjungi pranala `github.com/<owner>/<repository>/contribute`. Dalam hal ini, Anda dapat mengunjungi [pranala ini](https://github.com/kawalcovid19/wargabantuwarga.com/contribute). Pranala tersebut akan memberikan daftar dari semua _issue_ dengan label _`good first issue`_.
2. Atau cara lainnya adalah dengan mengunjungi bagian [_Issues_](https://github.com/kawalcovid19/wargabantuwarga.com/issues) dari sebuah repository, lalu klik bagian _Labels_ di sebelah _Milestones_. Di sana, Anda dapat melihat banyak label untuk _issues_ yang terdapat dalam repository tersebut. Lalu cari dan klik label `good first issue`.

### Panduan bekerja

#### Persiapan

Sebelum mengerjakan sebuah _issue_, pastikan hal-hal berikut:

1. _Fork_ repositorynya dengan benar. Meskipun Anda sudah pernah melakukannya, kami masih menyarankan untuk membaca [manual resminya](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository).
2. _Clone_ _forked repository_ Anda dan ikuti [_Getting Started guide_](https://github.com/kawalcovid19/wargabantuwarga.com#getting-started).
3. Periksa di [_pull requests_](https://github.com/kawalcovid19/wargabantuwarga.com/pulls) dan tidak ada orang lain yang sedang mengerjakan _issue_ tersebut.
4. Buat _branch_ baru dari `main`.

#### Penugasan _issue_ & komunikasi

Saat Anda sudah siap dengan _branch_ dan memiliki sesuatu untuk berkontribusi,
Anda perlu untuk memberitahu orang-orang bahwa Anda sedang mengerjakan _issue_
tersebut. Untuk mengkomunikasikan hal ini, kami menggunakan _Draft Pull Requests_
dari GitHub.

_Draft Pull Request_ merupakan _pull request_ biasa, namun ia tidak dapat
digabungkan ke _branch_ utama sampai statusnya diubah menjadi "ready for
review". _Draft Pull Request_ menandakan bahwa _pull request_ ini [masih sedang dalam pengerjaan](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).
Hal ini diperlukan untuk memberikan sinyal kepada kontributor lainnya bahwa
pekerjaan dalam menyelesaikan _issue_ tersebut sudah dimulai dan masih
dikerjakan. Membuat _Draft Pull Request_ juga merupakan cara yang lebih baik sebagai
media komunikasi antar kontributor karena informasi tambahan bisa disediakan di
sana, selain melihat perubahan file-file.

Dengan demikian, ketika Anda memiliki setidaknya 1 _commit_, sangat penting
bagi Anda untuk membuat suatu _Draft Pull Request_ untuk mengumumkan kepada
orang-orang bahwa _issue_ itu sedang Anda kerjakan.

#### Pembuatan _Draft Pull Request_

Langkah-langkah untuk membuat _Draft Pull Request_:

1. _Commit_ dan _push_ perubahan terbaru ke _forked repository_ Anda. Mohon merujuk ke [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) untuk membuat pesan _commit_ atau Anda dapat menggunakan [commitlint.io](https://commitlint.io/) untuk membantu Anda membuat pesan _commit_.
2. Pergi ke bagian _Pull requests_ pada _forked repository_ Anda, dan klik _New pull request_.

   ![Petunjuk-1](https://user-images.githubusercontent.com/46013258/126284390-c2bd1aa6-fdc2-4aa6-a945-031f02db038e.png)

3. Pilih _forked repository_ Anda sebagai _head repository_, dan pilih _branch_ tempat Anda membuat perubahan untuk bagian _compare_.

   ![Petunjuk-2](https://user-images.githubusercontent.com/46013258/126285036-27b49325-62a2-4a6c-b216-5bae261788da.png)

4. Berikan judul dan deskripsi yang jelas mengenai _pull request_ Anda.
   Pastikan Anda mengikuti pengisian deskripsi seperti [keterangan di
   bawah](#pemberian-deskripsi-pull-request).

   ![Petunjuk-3](https://user-images.githubusercontent.com/46013258/126286179-04341e30-1224-49cb-9b9a-3c3aee99c308.png)

5. Pilih _Create draft pull request_ (seperti pada gambar di atas) dan klik tombol berwarna hijau.
6. Jangan lupa untuk menandai _Draft Pull Request_ Anda sebagai _Ready for review_ ketika Anda sudah melakukan semua perubahan yang diinginkan.

#### Pemberian deskripsi _pull request_

Agar _pull request_ dapat berkaitan dengan _issue_, ada 1 syarat teks yang
harus dimasukkan ke dalam deskripsinya. Harap pastikan Anda menyebutkan nomor
_issue_ yang Anda kerjakan dengan benar. Ubah teks `<!-- mention the issue that you're trying to close with this PR -->` yang disediakan dari _template_
menjadi nomor _issue_. Contoh:

```markdown
Closes #318

## Description

Update **`Start working on Issues`** section with clearer instructions on getting ready to work on an issue.
```

### Menonaktifkan _GitHub Actions_

Kami menganjurkan untuk menonaktifkan GitHub Action pada _repository_ yang telah di-_forked_

1.  Masuk ke _Setting_ pada _repository_ yang telah di-_forked_
2.  Pilih _Action_ pada _sidebar_
3.  _Disable Actions_
    ![Disable-actions](https://user-images.githubusercontent.com/35433920/129485485-ca7d1202-5dbc-46f7-b823-978d3f4ed600.png)

## Pertanyaan yang sering ditanyakan

### Mengapa kita menggunakan bahasa Inggris dalam menulis _issue_ dan _pull request_?

Ada beberapa alasan mengapa kita menggunakan bahasa Inggris ketika berkomunikasi di dalam _issue_ dan _pull request_:

1. Secara alamiah, lebih mudah untuk _software engineer_ berkomunikasi dalam bahasa Inggris, karena terminologi-terminologi teknis yang digunakan dalam pemrograman pun berbahasa Inggris. Menerjemahkannya ke Bahasa Indonesia memunculkan resiko miskomunikasi, sementara menggunakan Bahasa Inggris membutuhkan banyak penyesuaian penulisan dalam bentuk _italic_ mengacu pada [PUEBI](https://puebi.js.org/huruf/miring).
2. Membiasakan para kontributor yang mayoritas berasal dari Indonesia untuk berkomunikasi dengan bahasa Inggris. Sangat penting untuk mengasah kemampuan menulis dan membaca bahasa Inggris kita karena sebagian besar dari komunitas _open-source_ di seluruh dunia menggunakan bahasa Inggris sebagai bahasa utama mereka.
3. Menggunakan bahasa Inggris membuat proyek ini lebih mudah diakui secara global. Apabila kita ingin mendapatkan dukungan dari komunitas global, mereka lebih mudah memahami tujuan kita, sehingga mereka lebih mudah untuk meluangkan waktu dan keahlian mereka untuk membantu membuat proyek ini lebih baik. Contohnya menyediakan _free credits_ untuk layanan mereka, mengadvokasikan proyek ini kepada pemimpin dunia, atau berkontribusi langsung ke proyek kita.

## Catatan Tambahan

### Label pada _issue_ dan _pull request_

_Issue labels_ adalah fitur untuk mengelompokkan beberapa _issues_ ke dalam satu atau banyak kategori berbeda. Hal ini memudahkan kita untuk memantau serta mengelola _issues_ dan _pull requests_ yang ada pada _repository_ WargaBantuWarga.

Jika Anda memiliki ide atau saran untuk penambahan label baru yang belum ada di _repository_, mohon untuk membuka _issue_ di [`kawalcovid19/wargabantuwarga.com`](https://github.com/kawalcovid19/wargabantuwarga.com/issues).

#### Tipe _Issue_ and _Issue State_

| Nama label         | `/wargabantuwarga.com`                                                                  | Deskripsi                                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `blocked`          | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/blocked)              | _Issues_ yang terhalang oleh _issue_ lainnya.                                                               |
| `bug`              | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/bug)                  | Laporan mengenai adanya _bug_ atau kesalahan pada website.                                                  |
| `enhancement`      | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/enhancement)          | Permintaan untuk penambahan fitur baru.                                                                     |
| `epic`             | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/epic)                 | Utas utama dari _issue_ yang didalamnya terdiri dari beberapa _issues_ yang lebih sederhana.                |
| `good first issue` | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/good%20first%20issue) | _Issues_ yang sederhana. Cocok untuk para pemula untuk mulai berkontribusi ke _repository_ WargaBantuWarga. |
| `help wanted`      | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/help%20wanted)        | _Issues_ yang membutuhkan perhatian lebih dan prioritas.                                                    |
| `invalid`          | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/invalid)              | _Issues_ yang tidak valid.                                                                                  |
| `question`         | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/question)             | Membutuhkan informasi tambahan terkait permasalahan yang ada atau terkait permintaan fitur baru.            |
| `wontfix`          | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/wontfix)              | Tim WargaBantuWarga tidak akan mengerjakan _issue_ tersebut untuk saat ini.                                 |

#### Kategori

| Nama Label                    | `/wargabantuwarga.com`                                                                           | Deskripsi                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| `ci-cd`                       | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/ci-cd)                         | _Continuous Integration & Continuous Delivery_.                     |
| `design`                      | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/design)                        | _Issues_ yang berkaitan dengan desain.                              |
| `documentation`               | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/documentation)                 | Perbaikan serta penambahan informasi pada dokumentasi.              |
| `dx`                          | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/dx)                            | _Issues_ terkait pengalaman developer dalam melakukan pengembangan. |
| `ui`                          | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/ui)                            | _Issues_ terkait tampilan antar muka pengguna.                      |
| `ux`                          | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/ux)                            | _Issues_ terkait pengalam pengguna dalam menggunakan website.       |
| `seo`                         | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/seo)                           | _Search engine optimization_.                                       |
| `scripting`                   | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/scripting)                     | _Issues_ terkait kode.                                              |
| `testing`                     | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/testing)                       | _Automated testing_.                                                |
| `netlify-cms/draft`           | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/netlify-cms%2Fdraft)           | _Draft_ perubahan konten di Netlify CMS.                            |
| `netlify-cms/pending_publish` | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/netlify-cms%2Fpending_publish) | Perubahan koten siap untuk dipublikasikan melalui Netlify CMS.      |
| `netlify-cms/pending_review`  | [cari](https://github.com/kawalcovid19/wargabantuwarga.com/labels/netlify-cms%2Fpending_review)  | Perubahan konten sedang dalam peninjauan di Netlify CMS.            |
