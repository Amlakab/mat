'use client';

import { useRef, useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useTheme } from '@/lib/theme-context';
import { useLanguage } from '@/lib/language-context';
import {
  QrCode,
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

export default function HomePage() {
  const { theme } = useTheme();
  const { t, isAmharic } = useLanguage();

  const isDark = theme === 'dark';

  const qrRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  const [targetUrl, setTargetUrl] = useState('');

  useEffect(() => {
    setTargetUrl(window.location.origin);
  }, []);

  const handleDownload = () => {
    if (!qrRef.current) return;

    const pngUrl = qrRef.current.toDataURL('image/png');

    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'mat-website-qr.png';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handlePrint = () => {
    if (!qrRef.current) return;

    const dataUrl = qrRef.current.toDataURL();

    const printWindow = window.open(
      '',
      '_blank',
      'width=450,height=550'
    );

    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>
            ${isAmharic ? 'የQR ኮድ ማተሚያ' : 'Print QR Code'}
          </title>

          <style>
            body {
              font-family: system-ui, sans-serif;
              margin: 0;
              padding: 40px;
              text-align: center;
              color: #1e293b;
            }

            .qr-wrapper {
              display: inline-block;
              padding: 24px;
              border: 2px solid #e2e8f0;
              border-radius: 16px;
            }

            h2 {
              margin-top: 0;
            }

            p {
              font-size: 14px;
              color: #64748b;
              word-break: break-all;
            }
          </style>
        </head>

        <body>
          <div class="qr-wrapper">
            <h2>
              ${isAmharic ? 'MAT Engineering & Trading' : 'MAT Engineering & Trading'}
            </h2>

            <img
              src="${dataUrl}"
              style="
                width:240px;
                height:240px;
                display:block;
                margin:0 auto;
              "
            />

            <p>${targetUrl}</p>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(targetUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <main
      className={`min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-200 ${
        isDark
          ? 'bg-[#0a192f] text-white'
          : 'bg-slate-50 text-gray-900'
      }`}
    >
      <div
        className={`w-full max-w-md p-6 sm:p-8 rounded-2xl border shadow-xl ${
          isDark
            ? 'bg-[#112240] border-slate-800 shadow-black/40'
            : 'bg-white border-slate-200 shadow-slate-200/50'
        }`}
      >

        {/* Header */}
        <div className="text-center mb-6">

          <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3">
            <QrCode className="w-8 h-8" />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold">
            {t('qrcode.title')}
          </h1>

          <p
            className={`mt-2 text-xs sm:text-sm leading-relaxed ${
              isDark
                ? 'text-slate-400'
                : 'text-slate-600'
            }`}
          >
            {t('qrcode.scan_desc')}
          </p>
        </div>

        {/* QR */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-inner my-4">

          {targetUrl && (
            <QRCodeCanvas
              value={targetUrl}
              size={220}
              ref={qrRef}
              level="H"
              includeMargin
            />
          )}

        </div>

        {/* URL */}
        <div
          className={`mt-4 p-2.5 rounded-xl border flex items-center justify-between gap-2 text-xs ${
            isDark
              ? 'bg-[#1e293b] border-slate-700 text-slate-300'
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}
        >

          <div className="flex items-center gap-1.5 truncate">

            <ExternalLink className="w-3.5 h-3.5 shrink-0 text-blue-500" />

            <span className="truncate font-mono">
              {targetUrl}
            </span>

          </div>

          <button
            onClick={handleCopyLink}
            className={`px-2.5 py-1 rounded-lg font-medium text-xs flex items-center gap-1 transition-all shrink-0 ${
              copied
                ? 'bg-emerald-500 text-white'
                : isDark
                  ? 'bg-slate-700 text-white hover:bg-slate-600'
                  : 'bg-white text-gray-700 border hover:bg-slate-100'
            }`}
          >

            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span>
                  {isAmharic ? 'ተቀድቷል' : 'Copied'}
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>
                  {isAmharic ? 'ቅዳ' : 'Copy'}
                </span>
              </>
            )}

          </button>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-500/20"
          >
            <Download className="w-4 h-4" />
            <span>{t('qrcode.download')}</span>
          </button>

          <button
            onClick={handlePrint}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all active:scale-[0.98] border ${
              isDark
                ? 'bg-slate-800/80 hover:bg-slate-800 text-white border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 text-gray-800 border-slate-200'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>{t('qrcode.print')}</span>
          </button>

        </div>

      </div>
    </main>
  );
}