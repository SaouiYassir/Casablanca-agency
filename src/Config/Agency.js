const agency = {
  name: 'Casablanca Location',
  shortName: 'Casa Location',
  description:
    "Location de voitures à Casablanca avec réservation rapide par WhatsApp, tarifs transparents et livraison flexible.",
  siteUrl: 'https://location-projet.vercel.app',
  phoneDisplay: '+212 6 01 10 99 65',
  phoneHref: '+212601109965',
  whatsapp: '212601109965',
  email: 'contact@casablancalocation.ma',
  address: {
    street: 'Boulevard de la Corniche',
    city: 'Casablanca',
    country: 'Maroc',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Boulevard%20de%20la%20Corniche%2C%20Casablanca%2C%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  hours: 'Lun – Dim : 8h – 22h',
  socials: {
    instagram: '',
    facebook: '',
    tiktok: '',
  },
  legal: {
    rc: '',
    ice: '',
    minAge: 21,
    minLicenseYears: 1,
    cancellationPolicy: "Annulation gratuite jusqu'à 48 h avant la prise en charge.",
    paymentNote: 'Paiement à la prise en charge, selon les moyens acceptés par l’agence.',
  },
}

export const whatsappUrl = (message = '') => {
  const query = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${agency.whatsapp}${query}`
}

export const fullAddress = `${agency.address.street}, ${agency.address.city}, ${agency.address.country}`

export default agency
