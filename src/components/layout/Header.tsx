import Script from "next/script";

export default function Header() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KE6K7KYS6C"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KE6K7KYS6C');
        `}
      </Script>
    </>
  );
}
