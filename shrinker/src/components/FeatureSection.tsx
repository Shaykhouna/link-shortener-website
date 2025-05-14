import React from 'react';
import { BarChartIcon, GaugeIcon, ShieldIcon } from 'lucide-react';
export function FeatureSection() {
  const features = [{
    name: 'Analytics Dashboard',
    description: 'Track clicks, monitor traffic sources, and gain valuable insights about your audience with our powerful analytics tools.',
    icon: BarChartIcon
  }, {
    name: 'Lightning Fast',
    description: 'Our optimized infrastructure ensures your shortened links load quickly and reliably, every single time.',
    icon: GaugeIcon
  }, {
    name: 'Secure Links',
    description: 'All links are screened for malicious content and protected with industry-leading security measures.',
    icon: ShieldIcon
  }];
  return <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in a link shortener
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            LinkShrink provides powerful tools to help you manage, track, and
            optimize your shortened links.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map(feature => <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>)}
          </dl>
        </div>
      </div>
    </section>;
}