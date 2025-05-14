import React, { useState, /*memo*/ } from 'react';
import { ClipboardCopyIcon, ArrowRightIcon } from 'lucide-react';
const token = import.meta.env.VITE_API_TOKEN
const domain = import.meta.env.VITE_DOMAIN

export function HeroSection() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState('');

  const shortenUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate URL
    if (!url || !url.trim() || url.includes(" ")) {
      setError('Please enter a valid URL');
      return;
    }
    try {
      setIsLoading(true);
      setError('');
      // Mock API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 800));
      // Generate a mock shortened URL
      // let expiredTime = formatMilliseconds(Date.now() + (1000*60*60*24*15))
      // const randomString = Math.random().toString(36).substring(2, 8);
      const randomUniq = generateRandomTimestampString()
      let value = {
        "url": url,//"https://www.codementor.io/projects/web/link-shortener-website-brqjanf6zq",
        "domain": domain,
        "alias": randomUniq,
        "description": "string"
      }
      console.log(randomUniq)

      // console.log(randomString)
      // console.log(process.env.REACT_APP_API_TOKEN)

      const response = await fetch(`https://api.tinyurl.com/create?api_token=${token}`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data && typeof data === 'object') {
        console.log('Success:', data);

        // ✅ Use the `data` object safely here
        setShortenedUrl(`${data.data.tiny_url}`);
        setIsLoading(false);
      } else {
        console.warn('Data is not valid:', data);
      }
      // setShortenedUrl(`https://lnk.sh/${randomString}`);
    } catch (error) {
      setError('Failed to shorten URL. Please try again.');
      setIsLoading(false);
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  function generateRandomTimestampString() {
    const timestamp = Date.now(); // current time in milliseconds (Unix timestamp)
    const randomPart = Math.random().toString(36).substring(2, 10); // random alphanumeric string
    return `${randomPart}${timestamp}`;
  }
  return <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Shorten your links,</span>{' '}
            <span className="block text-blue-600 xl:inline">
              expand your reach
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create short, memorable links in seconds. Track clicks, analyze
            data, and optimize your online presence.
          </p>
        </div>
        <div className="mt-10 max-w-xl mx-auto">
          <form onSubmit={shortenUrl} className="sm:flex">
            <div className="flex-1 min-w-0">
              <label htmlFor="url" className="sr-only">
                URL to shorten
              </label>
              <input id="url" type="text" placeholder="Enter your long URL here" value={url} onChange={e => setUrl(e.target.value)} className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button type="submit" disabled={isLoading} className="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-600 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-10 disabled:opacity-70 disabled:cursor-not-allowed">
                {isLoading ? <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing
                  </span> : <span className="flex items-center justify-center">
                    Shorten <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </span>}
              </button>
            </div>
          </form>
          {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
          {shortenedUrl && <div className="mt-6 bg-white p-4 rounded-md shadow-sm border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Your shortened URL:</p>
                  <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
                    {shortenedUrl}
                  </a>
                </div>
                <button onClick={copyToClipboard} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <ClipboardCopyIcon className="h-4 w-4 mr-1" />
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>}
        </div>
      </div>
    </section>;
}
