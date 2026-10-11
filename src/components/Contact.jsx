import React from 'react'

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 sm:h-14 sm:w-14"
  >
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 7l9 7 9-7" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 sm:h-14 sm:w-14"
  >
    <path d="M6.6 3.5L9 3l1.8 4.3-2 1.5a11 11 0 005.4 5.4l1.5-2 4.3 1.8-.5 2.4a2 2 0 01-2 1.6A15.5 15.5 0 014.9 5.5a2 2 0 011.7-2z" />
  </svg>
)

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 sm:h-14 sm:w-14"
  >
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

const contacts = [
  {
    icon: <MailIcon />,
    title: 'Email',
    label: 'info@nepaltravel.com',
    href: 'mailto:info@nepaltravel.com',
  },
  {
    icon: <PhoneIcon />,
    title: 'Whatsapp',
    label: '+977 9812 345678',
    href: 'https://wa.me/9779812345678',
  },
  {
    icon: <PinIcon />,
    title: 'Office',
    label: 'Thamel, Kathmandu 44600, Nepal',
    href: 'https://maps.google.com/?q=Thamel+Kathmandu',
  },
]

const Contact = () => {
  return (
    <section className="bg-[#f5f2ed] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
        {contacts.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="text-[#e8b9a8]">{item.icon}</div>

            {/* Title */}
            <h3 className="mt-5 font-['Playfair_Display'] text-3xl font-normal text-[#2c4549] sm:mt-6 sm:text-4xl lg:text-5xl">
              {item.title}
            </h3>

            {/* Link */}
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="mt-3 max-w-xs break-words font-['Work_Sans'] text-sm text-[#2c4549] underline underline-offset-2 transition-opacity duration-300 hover:opacity-70 sm:mt-4 sm:text-base lg:max-w-sm"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact