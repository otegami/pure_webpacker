# Webpacker をはずして pure な Webpack 構成に変更

- いつも参考にさせていただいている `hakozaru` さんのブログを読みながら実際に手を動かしてみる
  - ref: <https://hakozaru.com/posts/purge-webpacker-1>

## 動機

- tailwindcss 3.0 を導入しようとしたところ、PostCSS 8 を入れる必要があった
- Webpack 構成では、postcss-loader v4.0.3 以上が必要である
  - <https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users#webpack>
- しかし、Webpacker の依存関係で、postcss-loader v3.0.0 で固定されてしまっていた
- 今後も考えると、素の Webpack の方が何かと便利そうなので、外せる予行練習をしたくなったため
